const mongoose = require('mongoose');

const { Schema } = mongoose;

const companySchema = new Schema({
  name: { type: String, required: true },
  login: { type: String, required: true },
  applicants: { type: Array, default: [] },
});

module.exports = mongoose.model('CompanyProfile', companySchema);
