const express = require('express');

const router = express.Router();

router.use('/changelog.json', require('./changelog'));
router.use('/swagger.json', require('./swagger'));

module.exports = router;