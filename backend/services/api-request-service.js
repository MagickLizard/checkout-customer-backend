const request = require('request');
const url = require('url');

const API_BASE_URL = 'http://api.instagram.com';
async function getRecentConversationSummaries() {
  let makeRequest =  async (path) => {
    const options = {
      method: 'GET',
      url: path
    };
    return new Promise((resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          console.log('err>>>', err)
          reject(err);
        }
        else {
          resolve(body);
        }
      })
    });
  };
  const conversationsPath = async setPathConversations => {
    const path = API_BASE_URL + '/v1/tags/search/q:cat';
    const conversationResult =  await makeRequest(path);
    return conversationResult;
  };
  const messagesPath = async setMessagesPath => {
    const path = API_BASE_URL + '/v1/tags/search/q:lizard';
    const messageResult =  await makeRequest(path);
    return messageResult;
  };
  const usersPath = async setUserPath => {
    const path = API_BASE_URL + '/v1/tags/search/q:dog';
    const userResult =  await makeRequest(path);
    return userResult;
  };
  let conversationResult = await conversationsPath();
  let messageResult = await messagesPath();
  let userResult = await usersPath();
  console.log('conversationResult>>>', conversationResult);
  console.log('messageResult>>>', messageResult);
  console.log('messageResult>>>', userResult);

}
getRecentConversationSummaries();

module.exports = getRecentConversationSummaries;