require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes/_versions'));

app.listen(port, () => {
  console.log(`${port}`);
});