const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();

require('./src/database/connect');
const userRoutes = require('./src/routes/userRoutes');
const postRoutes = require('./src/routes/postRoutes');

console.log(process.env.SQL_USER);
let app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/post', postRoutes);

// app.use((error, req, res) => {
//   console.error(error.stack);
//   const statusCode = error.statusCode || 500;
//   res.status(statusCode).json({
//     error: {
//       message: error.message,
//       statusCode: statusCode,
//     },
//   });
// });

app.get('/', function (req, res) {
  res.send('Express');
});

app.listen(process.env.SQL_PORT, function () {
  console.log(`[NODENEW]: listening on port ${process.env.SQL_PORT}`);
});
