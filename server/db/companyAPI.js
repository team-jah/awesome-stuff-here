const request = require('request');

const companyAPI = {};

companyAPI.apiQuery = (req, res) => {
  const options = {
    url: 'https://s3-us-west-2.amazonaws.com/didrio-techfair/companies.json',
    headers: { Accept: 'application/json' },
  };
  request(options, (error, response, body) => {
    if (error) res.send(error);
    body = JSON.parse(body);
    console.log(Object.keys(body).length);
    res.send(body);
  });
};

module.exports = companyAPI;
