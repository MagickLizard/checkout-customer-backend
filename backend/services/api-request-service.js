const request = require('request');
var http = require('http');
const url = require('url');



async function getRecentConversationSummaries() {
  let promiseResult = new Promise((resolve, reject) => {
    const request = http.get({
      host: 'api.instagram.com',
      path: '/v1/tags/search/q:cat'
    }, (response) => (response, resolve, reject) => {
      const hasResponseFailed = response.status >= 400;
      var responseBody = '';

      if (hasResponseFailed) {
        reject(`Request to ${response.url} failed with HTTP ${response.status}`);
      }

      response.on('data', chunk => responseBody += chunk);
      response.on('end', () => resolve(JSON.parse(responseBody)));
    });
          
    request.end();
    resolve(request);
  });
  console.log('promiseResult>>>', promiseResult)
  return promiseResult;
}
getRecentConversationSummaries();

module.exports = getRecentConversationSummaries;