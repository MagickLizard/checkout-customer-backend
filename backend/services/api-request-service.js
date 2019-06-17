

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API_BASE_URL = 'http://ui-developer-backend.herokuapp.com';
async function getRecentConversationSummaries() {
  let makeRequest = async (path, response) => {
     return new Promise((resolve) => {
        let xhr = new XMLHttpRequest();
   
          xhr.onreadystatechange = async function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            resolve(await JSON.parse(xhr.responseText));
          }
        };
        xhr.open('GET', path, true);
        xhr.send();
        return xhr;
    });
  };

  const setConversationsPath = () => {
    let path = API_BASE_URL;
    path += '/api/conversations';
    return makeRequest(path)
  };
  const setMessagePath = (setMessagesPath) => {
    let path = API_BASE_URL + '/api/conversations/' + setMessagesPath + '/messages';
    return makeRequest(path)
  };
  const setUsersPath = (setMessagesPath) => {
    let path = API_BASE_URL;
    path += '/api/users/' + setMessagesPath;
    return makeRequest(path)
  };
  const conversationArray = await setConversationsPath();
  const messagesArray = await Promise.all(conversationArray.map(
    (conversation) => (setMessagePath(conversation.id))
  ));
  let messageResult = (messagesArray).map((k) => {
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
  return conversationBody;
}
// getRecentConversationSummaries();
module.exports = getRecentConversationSummaries;