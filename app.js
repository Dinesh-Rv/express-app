const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();

require('./src/database/connect');
const userRoutes = require('./src/routes/userRoutes');

console.log(process.env.SQL_USER);
var app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', function (req, res) {
  res.send('Express');
});

app.listen(process.env.SQL_PORT, function () {
  console.log(`[NODENEW]: listening on port ${process.env.SQL_PORT}`);
});
