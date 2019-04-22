
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
  const conversationRequestWrapper = async (setMessagesPath) => {
    let path = API_BASE_URL;
    path += '/api/conversations';
    return (makeRequest(path)
    )
  };
  const requestWrapper = async (setMessagesPath, requestType) => {
    let promiseArray = [];
    for (let i = 0; i < conversationArray.length; i++) {
      promiseArray.push(new Promise((resolve, reject) => {
        if (requestType === 1) {
          path = API_BASE_URL + '/api/conversations/' + conversationArray[i].id + '/messages';
        }
        else if (requestType === 2) {
          path = API_BASE_URL + '/api/users/' + conversationArray[1].with_user_id;
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
        console.log('promise>>>', promise)
        return (promise);
      })
      .catch(err => {
        console.error('promise all error *****', err);
        return (err);
      });
  };
  const conversationArray = JSON.parse(await conversationRequestWrapper());
  const setMessageId = await requestWrapper(conversationArray, 1);
  const userResult = await requestWrapper(conversationArray, 2);
  // console.log('conversationArray>>>', conversationArray);
  console.log('setMessageId>>>', setMessageId);
  // console.log('userResult>>>', userResult);


  let messageResult = (setMessageId).map((k) => {
    for (let items of k) {
      return items;
    }
  });
  
  let messageArraySorted = (messageResult).sort((previous, current) => current.created_at - previous.created_at);
  let conversationBody = [];
  const organiseData = (conversationArray).reduce((previous, current) => {
    for (let message of messageArraySorted) {
      for (let user of userResult) {
        if (current.id === message.id) {
        // if (current.id === message.conversation_id && current.with_user_id === user.id) {
          conversationBody.push({
            id: message.conversation_id,
            latest_message: {
              id: message.conversation_id,
              body: message.body
            },
            from_user: {
              id: message.from_user_id,
              avatar_url: user.avatar_url
            },
            created_at: message.created_at //TODO: sort by time use moment atm its done automatically which will fail in tests
          });
        }
      }
    }

    return conversationBody;
  }, []);
  // console.log('organiseData>>>', organiseData);
  return organiseData;
  //TODO :sort by timestamp
}
// getRecentConversationSummaries();
module.exports = getRecentConversationSummaries;