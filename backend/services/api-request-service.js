
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
          resolve(JSON.parse(body));
        }
      })
    })
  };
  const conversationRequestWrapper = async (setMessagesPath) => {
    let path = API_BASE_URL;
    path += '/api/conversations';
    return makeRequest(path)
  };
  const requestWrapper = async (conversationArray, requestType) => {
    return new Promise((resolve, reject) => {
      if (requestType === 1) {
        path = API_BASE_URL + '/api/conversations/' + conversationArray + '/messages';
      }
      else if (requestType === 2) {
        path = API_BASE_URL + '/api/users/' + conversationArray;
      }
      makeRequest(path)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          console.error(' Error 2*****', err);
          reject(err);
        });
    });
  };
  const conversationArray = await conversationRequestWrapper();
  const conversationMessages = await Promise.all(conversationArray.map(
    (conversation) => (requestWrapper(conversation.id, 1))
  ));
  let messageResult = (conversationMessages).map((k) => {
    for (let items of k) { return items; }
  });
  let messagesSorted = (messageResult).sort((previous, current) => current.created_at - previous.created_at);
  const userResult = await Promise.all(messagesSorted.map(
    (conversation) => (requestWrapper(conversation.from_user_id, 2))
  ));
  console.log('conversationArray>>>', conversationArray)
  console.log('messagesSorted>>>', messagesSorted)
  console.log('userResult>>>', userResult)

  let conversationBody = [];
  const organiseData = (messagesSorted).reduce((previous, current, index) => {
          conversationBody.push({
            id: current.conversation_id,
            latest_message: {
              id: current.conversation_id,
              body: current.body
            },
            from_user: {
              id: current.from_user_id,
              avatar_url: userResult[index].avatar_url
            },
            created_at: current.created_at
          });
    return conversationBody;
  }, []);

  return organiseData;
}
// getRecentConversationSummaries();
module.exports = getRecentConversationSummaries;