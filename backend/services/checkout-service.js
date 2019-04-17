const IterateRequestHelper = require('../lib/iterate-request-helper.js');
const StatsCollector = require('./statsCollector.js');
const apiRequestConversations = require('./api-request-service.js');

class CheckoutService {
  constructor() {
  }
  wrapper(requestBody) {
    let asyncRes = (async () => {
      let res = await apiRequestConversations.getRecentSearchSummaries();
      console.log('res>', res);
  })();
    console.log('asyncres>>>', asyncRes)
    return asyncRes;
    console.log('StatsCollector>>>', StatsCollector)
    
    return IterateRequestHelper.wrapper(requestBody)
  }
}
module.exports = new CheckoutService();
