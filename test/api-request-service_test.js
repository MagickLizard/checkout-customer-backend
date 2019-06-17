
/* eslint-env mocha */
// const getRecentConversationSummaries = require('../backend/services/api-request-service.js');

const fixture = require('./fixtures/fixtures.js');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const mocha = require('mocha');
const should = require('chai').should;
// Configure Mocha, telling both it and chai to use BDD-style tests.

// mocha.setup("bdd");
// chai.should();
// let makeRequest = async (path) => {
//   /*     path = path || API_BASE_URL; */
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     if (xhr.status === 200) {
//       xhr.onload = function () {
//         try {
//           resolve(JSON.parse(xhr.responseText));
//         }
//         catch (err) { //added this because of error message is different format which fails on JSON.parse
//           /*         throw Error('ERROR***', err) */
//           console.log('catch')
//           reject('Error***', err)
//         }
//       }
//     }
//     else {
//       throw Error('HIII')
//     }
//     xhr.open('GET', path);
//     xhr.send();
//   });
// };
// const API_BASE_URL = "http://ui-developer-backend.herokuapp.com/api";
// async function getRecentConversationSummaries () {
//   let makeRequest = async (path) => {
//      return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
 
//           xhr.onload = function() {
//           if (xhr.status === 200) {
//           try {
//            resolve(JSON.parse(xhr.responseText));
//           }
//           catch (err) {
//            reject('ERROR***', err)
//           }
//           }
//           else {
//           reject('ERROR***')
//           }
//         };
//         xhr.open('GET', path);
//         xhr.send();
//     });
//   };
 
//    const setConversationsPath = () => {
//      let path = API_BASE_URL;
//      path += '/conversations';
//      console.log('path', path)
//      return makeRequest(path)
//    };
//    const setMessagePath = async (setMessagesPath) => {
//      let path = API_BASE_URL + '/conversations/' + setMessagesPath + '/messages';
//      return makeRequest(path)
//    };
//    const setUsersPath = async (setMessagesPath) => {
//      let path = API_BASE_URL;
//      path += '/users/' + setMessagesPath;
//      return makeRequest(path)
//    };
//   return setConversationsPath()
//      .then(conversations => {
//        return (conversations)
//      })
//      .then(conversationArray => {
//        return Promise.all(conversationArray.map(
//          (conversation) => (setMessagePath(conversation.id))
//        ));
//      })
//      .then(messages => {
//        let messagesArray = (messages).map((k) => {
//          for (let items of k) { return items; }
//        });
 
//        let messageSorted = (messagesArray).sort((previous, current) => current.created_at - previous.created_at);
//        messagesResult = messageSorted;
//        return messageSorted;
//      })
//      .then(messagesArray => {
//        return Promise.all(messagesArray.map(
//          (conversation) => (setUsersPath(conversation.from_user_id))
//      ))
//        })
//          .then(userResult => {
//              return messagesResult.map((message, index) => ({
//              id: message.id,
//              latest_message: {
//                  id: message.id,
//                  body: message.body,
//                  from_user: {
//                      id: userResult[index].id,
//                      avatar_url: userResult[index].avatar_url,
//                  },
//                  created_at: message.created_at,
//              }
//          }));
//          })
//          .catch(err => {
//            throw error ('ERROR')
//          })
//  }
 
function getDepositHistorySum(user) {
  const deposits = user.transactions.history.deposits;
  console.log('deposits', deposits)
  let sum = 0;
  for (var i = 0; i < deposits.length; i += 1) {
    console.log('i', i)
    console.log('deposits[i].amount', deposits[i])
    sum += deposits[i];
  }
  return sum;
}
// function Account() {
//   this.cat = 0;
//   this.dog = 0;
// }

// Account.prototype.increaseBalance = increaseBalance = function(amount, isCredit) {
//   var nested = function() {
//   if (!isCredit) {
//     this.cat += amount;
//   } else {
//     this.dog += amount;
//   }
// };
// return nested;
// }

 // Configure Mocha, telling both it and chai to use BDD-style tests.


describe('getRecentConversationSummaries()', () => {

      it('should return the current user\'s latest conversations sorted by latest message\'s timestamp', async () => {
        // console.log('getRecentConversationSummaries>>>', await getRecentConversationSummaries())
        let user = {transactions:{
          history:{
            deposits:[1, 2, 4 ,4 ,5, 5]
          }
        }
      }
      // let result = increaseBalance(2222, 333)
        let result = getDepositHistorySum(user)

        // const result = await getRecentConversationSummaries()//CHANGE BEFORE COMMIT
        // let conversationPath = getRecentConversationSummaries().setConversationsPath();
        // console.log('conversationPath>>>', conversationPath)
        
        console.log('result>>>', result);

      }).timeout(10000);
      // TODO: Add more tests
    });
    // describe('getRecentConversationSummaries()', () => {
    //   it('should return the current user\'s latest conversations sorted by latest message\'s timestamp', async () => {
    //     const result = await getRecentConversationSummaries();
    //     console.log('result>>', result)
    //     result.should.deep.equal([
    //       {
    //         id: "1",
    //         latest_message: {
    //           id: "1",
    //           body: "Moi!",
    //           from_user: {
    //             id: "1",
    //             avatar_url: "http://placekitten.com/g/300/300",
    //           },
    //           created_at: "2016-08-25T10:15:00.670Z",
    //         },
    //       },
    //       {
    //         id: "2",
    //         latest_message: {
    //           id: "2",
    //           body: "Hello!",
    //           from_user: {
    //             id: "3",
    //             avatar_url: "http://placekitten.com/g/302/302",
    //           },
    //           created_at: "2016-08-24T10:15:00.670Z",
    //         },
    //       },
    //       {
    //         id: "3",
    //         latest_message: {
    //           id: "3",
    //           body: "Hi!",
    //           from_user: {
    //             id: "1",
    //             avatar_url: "http://placekitten.com/g/300/300",
    //           },
    //           created_at: "2016-08-23T10:15:00.670Z",
    //         },
    //       },
    //       {
    //         id: "4",
    //         latest_message: {
    //           id: "4",
    //           body: "Morning!",
    //           from_user: {
    //             id: "5",
    //             avatar_url: "http://placekitten.com/g/304/304",
    //           },
    //           created_at: "2016-08-22T10:15:00.670Z",
    //         },
    //       },
    //       {
    //         id: "5",
    //         latest_message: {
    //           id: "5",
    //           body: "Pleep!",
    //           from_user: {
    //             id: "6",
    //             avatar_url: "http://placekitten.com/g/305/305",
    //           },
    //           created_at: "2016-08-21T10:15:00.670Z",
    //         },
    //       },
    //     ]);
    //   }).timeout(3000);
    
    //   // TODO: Add more tests
    // });

// Run all our test suites.  Only necessary in the browser.
// mocha.run();
