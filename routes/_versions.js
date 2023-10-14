const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      version: {
        code: 1,
        name: '1.0.0-alpha'
      },
      path: '/v1',
      swagger: '/swagger.json',
      changelog: '/changelog.json',
      deprecated: false
    }
  ]);
});

router.use('/v1', require('./v1/_routes'));

module.exports = router;
