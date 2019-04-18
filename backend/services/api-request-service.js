const request = require('request');
const url = require('url');

const API_BASE_URL = 'http://api.instagram.com';


async function getRecentConversationSummaries() {
  const paths = ['/v1/tags/search/q:cat', '/v1/tags/search/q:lizard', '/v1/tags/search/q:dog'];
  for (let path of paths) {
    const options = {
      method: 'GET',
      url: API_BASE_URL + path
    };
    let promiseResult = new Promise((resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          console.log('errr>>>', err)
          reject(err);
        }
        else {
          resolve(body);
        }
      })
    });
    await promiseResult
      .then(data => {
        return (data);
      })
      .catch(err => {
        console.error('Make email response Error *****', err);;
      });
  }
}
getRecentConversationSummaries();

module.exports = getRecentConversationSummaries;