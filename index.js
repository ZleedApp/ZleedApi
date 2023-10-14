require('dotenv').config();

const mongoose = require('mongoose');
const express  = require('express');
const morgan   = require('morgan');
const cors     = require('cors');

const app    = express();
const port   = process.env.PORT || 3000;

const connectToDatabase = async () => mongoose.connect(process.env.MONGO_URI);

connectToDatabase()
  .catch((err) => console.error(err));

app.use(morgan(process.env.DEV === '1' ? 'dev' : 'combined'));
app.use(cors({
  origin: '*'
}));

app.use('/', require('./routes/_versions'));
app.listen(port);