const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morganBody = require('morgan-body');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static('build'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

morganBody(app, {
  dateTimeFormat: 'clf',
  logReqUserAgent: false,
  theme: 'lightened',
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.use((error, req, res, _) => {
  res.status(error.status).json({ message: error.message });
});

app.listen(port, (err) => {
  if (err) {
    console.log('Error');
  } else {
    console.log(`running on port ${port}`);
  }
});
