const CompanyProfile = require('./companyModel');

const companyController = {};

companyController.addCompany = (req, res) => {
  CompanyProfile.create({
    name: req.body.name,
    login: req.body.login,
  }).then((result) => {
    console.log('Post created');
    res.status(200).json(result);
  });
};

companyController.addApplicant = (req, res) => {
  CompanyProfile.findByIdAndUpdate(req.body.id, { $push: { applicants: req.body.applicant } })
    .then((result) => {
      console.log('Applicant added');
      res.status(200).json(result);
    });
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
