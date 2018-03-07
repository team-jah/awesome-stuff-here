// const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
// const mongoose = require('mongoose');

const companyAPI = require('./db/companyAPI');

// mongoose.connect('mongodb://localhost/not-instagram');
// mongoose.connection.once('open', () => {
//   console.log('\nConnected with Not-Instagram Database');
// });

app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/companies', companyAPI.apiQuery);

app.listen(port);
console.log(`Server started on PORT:${port}`);
