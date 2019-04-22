
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
  const setConversationsPath = async () => {
    let path = API_BASE_URL;
    path += '/api/conversations';
    return makeRequest(path)
  };
  const setMessagePath = async (setMessagesPath) => {
   let path = API_BASE_URL + '/api/conversations/' + setMessagesPath + '/messages';
    return makeRequest(path)
  };
  const setUsersPath = async (setMessagesPath) => {
    let path = API_BASE_URL;
    path += '/api/users/' + setMessagesPath;
    return makeRequest(path)
  };
  const conversationArray = await setConversationsPath();
  const conversationMessages = await Promise.all(conversationArray.map(
    (conversation) => (setMessagePath(conversation.id))
  ));
  let messageResult = (conversationMessages).map((k) => {
    for (let items of k) { return items; }
  });
  let messagesSorted = (messageResult).sort((previous, current) => current.created_at - previous.created_at);
  const userResult = await Promise.all(messagesSorted.map(
    (conversation) => (setUsersPath(conversation.from_user_id))
  ));
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
console.log('organiseData>>>', JSON.stringify(organiseData))
  return organiseData; //FORMAT DATA TO RESPONSE
}
// getRecentConversationSummaries();
module.exports = getRecentConversationSummaries;