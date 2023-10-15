const express = require('express');

const router = express.Router();

router.use('/changelog.json', require('./changelog'));
router.use('/swagger.json', require('./swagger'));

router.use('/register', require('./auth/register'));
router.use('/login', require('./auth/login'));

router.use('/user', require('./user/_routes'));

module.exports = router;