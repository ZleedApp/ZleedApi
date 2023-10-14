const express = require('express');

const { User }         = require('#@/tools/models');
const { isEmailValid } = require('#@/tools/validators');

const bcrypt = require('bcrypt');
const {sign} = require('jsonwebtoken');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

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

  if (!isEmailValid(email)) {
    res.status(400);

    res.json({
      error: 1,
      code: 'ERR_EMAIL_INVALID'
    });

    return;
  }

  /////////////////////////
  
  const user = await User.findOne({
    email: email
  });
  
  if (user === null) {
    res.status(400);

    res.json({
      error: 1,
      code: 'ERR_USER_NOT_FOUND'
    });

    return;
  }
  
  /////////////////////////
  
  const passwordMatch = await bcrypt.compare(password, user.password);
  
  if (!passwordMatch) {
    res.status(400);

    res.json({
      error: 1,
      code: 'ERR_PASSWORD_INVALID'
    });

    return;
  }
  
  /////////////////////////

  const token = sign(
    { 
      id: user.id, 
      email: user.email,
    }, 
    process.env.JWT_SECRET, 
    { expiresIn: '30d' }
  );
  
  res.status(200);
  
  res.json({
    error: 0,
    code: 'SUCCESS_USER_LOGGED_IN',
    token
  });
});

module.exports = router;