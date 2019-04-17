const request = require('request');

const API_BASE_URL = 'https://api.instagram.com/v1/tags/search/q:cat';

async function getRecentSearchSummaries () {
  let promiseResult = new Promise((resolve, reject) => {

    let oauthOptions = new request(API_BASE_URL, {
      method: 'GET',
      json:true
    });

  // const getConversationsAll = API_BASE_URL + '/conversations';
  console.log('oauthOptions>>>', oauthOptions.body);
  oauthOptions
  .then((err, httpResponse, body) => {
    if (err) {
      console.log('err here')
      return reject('ERROR : ' + err);
    }
    return resolve(body);
  })
  .catch((e) => {
    console.log('err here')
    reject('getAccessToken ERROR : ' + e);
  });
});
 return promiseResult;
}
getRecentSearchSummaries();

module.exports = getRecentSearchSummaries;