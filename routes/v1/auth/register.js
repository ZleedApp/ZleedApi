const express = require('express');

const { User } = require('#@/tools/models');
const { isEmailValid } = require('#@/tools/validators');

const snowflake = require('#@/tools/snowflake');
const bcrypt    = require('bcrypt');

const saltRounds = 10;

const router = express.Router();

router.post('/', async (req, res) => {
  const { username, email, password } = req.body;

  if (typeof username == 'undefined') {
    res.status(400);

    res.json({
      error: 1,
      code: 'ERR_USERNAME_MISSING'
    });

    return;
  }

  if (typeof email == 'undefined') {
    res.status(400);

    res.json({
      error: 1,
      code: 'ERR_EMAIL_MISSING'
    });

    return;
  }

  if (typeof password == 'undefined') {
    res.status(400);

    res.json({
      error: 1,
      code: 'ERR_PASSWORD_MISSING'
    });

    return;
  }

  /////////////////////////

  const safeUsername = username
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(' ', '_');

  if (safeUsername.length < 3) {
    res.status(400);

    res.json({
      error: 1,
      code: 'ERR_USERNAME_TOO_SHORT'
    });

    return;
  }

  if (safeUsername.length > 32) {
    res.status(400);

    res.json({
      error: 1,
      code: 'ERR_USERNAME_TOO_LONG'
    });

    return;
  }

  /////////////////////////

  if (!isEmailValid(email)) {
    res.status(400);

    res.json({
      error: 1,
      code: 'ERR_EMAIL_INVALID'
    });

    return;
  }

  /////////////////////////

  const saltedPassword = await bcrypt.hash(password, saltRounds);

  const userDocument = new User({
    id: snowflake.getUniqueID(),
    username: safeUsername,
    displayName: username,
    email: email,
    password: saltedPassword,
  });

  try {
    await userDocument.save();

    res.status(201);

    res.json({
      error: 0,
      code: 'SUCCESS_USER_CREATED'
    });
  } catch (e) {
    if (e.code === 11000) {
      if (e.keyPattern.email === 1) {
        res.status(409);

        res.json({
          error: 1,
          code: 'ERR_EMAIL_USED'
        });
      } else if (e.keyPattern.username === 1) {
        res.status(409);

        res.json({
          error: 1,
          code: 'ERR_USERNAME_USED'
        });
      }
    } else {
      res.status(500);

      res.json({
        error: 1,
        code: 'ERR_INTERNAL',
        debug: e
      });
    }
  }
});

module.exports = router;