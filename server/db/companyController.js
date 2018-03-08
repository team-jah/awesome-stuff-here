const Company = require('./companyModel');

const companyController = {};

companyController.addCompany = (req, res, next) => {
  console.log('body', req.body);
  Company.findOne({ name: req.body.company }).then(company => {
    if (company) next();
    else Company.create({ name: req.body.company }).then(() => next());
  });
};

companyController.addApplicant = (req, res) => {
  console.log(req.body);
  Company.findOneAndUpdate({ name: req.body.company }, { $push: { applicants: req.body.applicant } })
    .then((result) => res.status(200).json(result));
};

companyController.getCompanies = (req, res) => {
  Company.find({}).then(companies => res.status(200).json(companies));
};

module.exports = companyController;

// [
// 	{
//     name: 'Henry',
//     email: 'henryau@gmail.com',
//     testScore: '100',
//     video: '',
//   },
//   {
//     name: 'Andrew',
//     email: 'didrio@gmail.com',
//     testScore: '1',
//     video: '',
//   },
// ]

// {"name":"Henry","email":"henryau@gmail.com","testScore":"100","video":""}
