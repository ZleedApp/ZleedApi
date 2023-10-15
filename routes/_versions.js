const express  = require('express');
const mongoose = require('mongoose');
const crypto   = require('crypto');

const { DatabaseTest } = require('#@/tools/models');

const router = express.Router();

router.get('/', async (req, res) => {
  res.json({
    versions: [
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
    ],
    database: {
      connected: mongoose.connection.readyState
    }
  });
});

router.use('/v1', require('./v1/_routes'));

module.exports = router;
