const request = require('request');



async function getRecentConversationSummaries() {
  let path = '/v1/tags/search/q:cat';
  const options = {
    method: 'GET',
    url: 'http://api.instagram.com' + path,
    headers: {
      "Cache-Control": "no-cache"
    }
  };
  let promiseResult = new Promise((resolve, reject) => {
    let output = {
      success: null,
      statusCode: null,
      siebelMessage: null
    };
    request(options, (err, response, body) => {
      if (err) {
        console.log('errr>>>', err)
        reject(err);
      }
      else {
        console.log('body>>>', body)
        resolve(body);
        
      }
  })
  });
  console.log('promiseResult>>>', promiseResult)
  return await promiseResult;
}
getRecentConversationSummaries();

module.exports = getRecentConversationSummaries;