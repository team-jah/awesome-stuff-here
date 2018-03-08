// const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();
const mongoose = require('mongoose');

const companyAPI = require('./db/companyAPI');
const companyController = require('./db/companyController');

// mongoose.connect('mongodb://jah:coolstuff@ds259778.mlab.com:59778/awesomestuff');
// mongoose.connection.once('open', () => {
//   console.log('\nConnected with Awesome Database');
// });

app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/companies', companyAPI.apiQuery);
app.post('/api/companies', companyController.addCompany);
app.put('/api/companies/applicants', companyController.addApplicant);

app.listen(port);
console.log(`Server started on PORT:${port}`);
