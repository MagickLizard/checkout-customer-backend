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
    const path = API_BASE_URL + '/api/search'; //try splitting these into one function and for loop around make request
    const conversationResult = await makeRequest(path);
    return conversationResult;
  };
  const messagesPath = async setMessagesPath => {
    let promiseArray = [];
    for (let i = 0; i < searchArray.length; i++) {
      promiseArray.push(new Promise((resolve, reject) => {
        let path = API_BASE_URL + '/api/search/' + searchArray[i].id + '/messages';
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
    let promiseArray = [];
    for (let i = 0; i < searchArray.length; i++) {
      promiseArray.push(new Promise((resolve, reject) => {
        let path = API_BASE_URL + '/api/users/' + searchArray[i].with_user_id;
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
    const userId = 1; //TODO
    const path = API_BASE_URL + '/api/users/' + userId;
    const userResult = await makeRequest(path);
    return userResult;
  };
  let searchArray = JSON.parse(await conversationsPath());
  let setMessageId = await messagesPath(searchArray);
  let userResult = await usersPath();
  console.log('conversationResult>>>', searchArray);
  console.log('setMessageId>>>', setMessageId)
  console.log('userResult>>>', userResult);

}
getRecentConversationSummaries();

module.exports = getRecentConversationSummaries;