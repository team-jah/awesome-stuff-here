// const request = require('request');
const json = require('../../build/assets/companies.json');

const companyAPI = {};

companyAPI.apiQuery = (req, res) => {
  // const options = {
  //   url: 'https://s3-us-west-2.amazonaws.com/didrio-techfair/companies.json',
  //   headers: { Accept: 'application/json' },
  // };
  // request(options, (error, response, body) => {
  //   if (error) res.send(error);
  //   body = JSON.parse(body);
  //   console.log(Object.keys(body).length);
  //   res.send(body);
  // });

  res.send(json);
};

module.exports = companyAPI;
