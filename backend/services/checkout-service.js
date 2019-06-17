const IterateRequestHelper = require("../lib/iterate-request-helper.js");
// const StatsCollector = require("./statsCollector.js");
// const apiRequestConversations = require("./api-request-service.js");

class CheckoutService {
  wrapper(requestBody) {
    // console.log('StatsCollector>>>', StatsCollector); //part one
          let asyncRes = (async () => { // part two
        let res = await apiRequestConversations.getRecentConversationSummaries();
        console.log('res>', res);
    });
      return asyncRes;

    return IterateRequestHelper.wrapper(requestBody);
  }
}
module.exports = new CheckoutService();
