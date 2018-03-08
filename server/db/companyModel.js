const mongoose = require('mongoose');

const { Schema } = mongoose;

const companySchema = new Schema({
  name: { type: String, required: true },
  applicants: { type: Array, default: [], required: true }
});

module.exports = mongoose.model('Company', companySchema);
