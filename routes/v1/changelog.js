const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      version: {
        code: 1,
        name: '1.0.0-alpha'
      },
      changelog: 'Initial Release'
    }
  ]);
});

module.exports = router;