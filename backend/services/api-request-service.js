
const request = require('request');
const url = require('url');
const moment = require('moment');

const API_BASE_URL = 'http://api.instagram.com';
async function getRecentsearchummaries() {
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
  const requestWrapper = async (setMessagesPath, requestType) => {
    let path = API_BASE_URL;
    if (requestType === undefined) {
      path += '/api/search';
      const conversationResult = await makeRequest(path);
      return conversationResult;
    };
    let promiseArray = [];
    for (let i = 0; i < conversationArray.length; i++) {
      promiseArray.push(new Promise((resolve, reject) => {
        if (requestType === 'messageRequest') {
          path = API_BASE_URL + '/api/search/' + conversationArray[i].id + '/messages';
        }
        else if (requestType === 'userRequest') {
          path = API_BASE_URL + '/api/users/' + conversationArray[i].with_user_id;
        }
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
  const conversationArray = JSON.parse(await requestWrapper());
  const setMessageId = await requestWrapper(conversationArray, 'messageRequest');
  const userResult = await requestWrapper(conversationArray, 'userRequest');

  let messageResult = (setMessageId).map((k) => {
    for (let items of k) {
      return items;
    }});
  const organiseData = (conversationArray).reduce((previous, current) => {
    let conversationBody = [];
    for (let message of messageResult) {
      for (let user of userResult) {
        if (user.id === current.id) {
          conversationBody.push({
            id: current.id,
            latest_message: {
              id: message.conversation_id,
              body: message.body
            },
            from_user: {
              id: user.id,
              avatar_url: user.avatar_url
            },
            created_at: message.created_at //TODO: sort by time use moment atm its done automatically which will fail in tests
          });
        }
      }
    }
    return conversationBody;
  }, []);
  return organiseData;
  //TODO :sort by timestamp
}
getRecentsearchummaries();
module.exports = getRecentsearchummaries;