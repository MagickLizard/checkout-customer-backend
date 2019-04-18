const request = require('request');
const url = require('url');

const API_BASE_URL = 'http://api.instagram.com';
async function getRecentConversationSummaries() {
  let makeRequest = async (path) => {
    const options = {
      method: 'GET',
      url: path
    };
    return new Promise((resolve, reject) => {
      request(options, (err, response, body) => {
        if (err) {
          console.error(' Error 1*****', err);
          reject(err);
        }
        else {
          resolve(body);
        }
      })
    });
  };
  const conversationsPath = async setPathConversations => {
    const path = API_BASE_URL + '/v1/tags/search/q:cat'; //try splitting these into one function and for loop around make request
    const conversationResult = await makeRequest(path);
    return conversationResult;
  };
  const messagesPath = async setMessagesPath => {
    let promiseArray = [];
    for (let i = 0; i < searchArray.length; i++) {
      promiseArray.push(new Promise((resolve, reject) => {
        let conversationId = JSON.stringify(searchArray[i].id);
        let path = API_BASE_URL + '/v1/tags/search/q:lizard' + searchArray[i].id;
        makeRequest(path)
          .then(data => {
            resolve(JSON.parse(data));
          })
          .catch(err => {
            console.error(' Error 2*****', err);
            reject(err);
          });
      }));
    }
    return Promise.all(promiseArray)
      .then(promise => {
        return (promise);
      })
      .catch(err => {
        console.error('promise all error *****', err);
        return (err);
      });
  };
  const usersPath = async setUserPath => {
    const userId = 1; //TODO
    const path = API_BASE_URL + '/v1/tags/search/q:lizard' + userId;
    const userResult = await makeRequest(path);
    return userResult;
  };
  let searchArray = JSON.parse(await conversationsPath());
  console.log('conversationResult>>>', searchArray);


  let setMessageId = await messagesPath(searchArray);
  console.log('setMessageId>>>', setMessageId)

  // let userResult = JSON.parse(await usersPath());
  // console.log('userResult>>>', userResult);

}
getRecentConversationSummaries();

module.exports = getRecentConversationSummaries;