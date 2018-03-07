const request = require('request');

const companyAPI = {};

companyAPI.apiQuery = (req, res) => {
  const options = {
    url: 'https://s3-us-west-2.amazonaws.com/didrio-techfair/companies.json',
    headers: { Accept: 'application/json' },
  };
  request(options, (error, response, body) => {
    if (error) res.send(error);
    res.send(JSON.parse(body));
  });
};

module.exports = companyAPI;
