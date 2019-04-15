const IterateRequestHelper = require('../lib/iterate-request-helper.js');
const StatsCollector = require('./statsCollector.js');


class CheckoutService {
  constructor() {
  }
  wrapper(requestBody) {
    console.log('StatsCollector>>>', StatsCollector)
    
    return IterateRequestHelper.wrapper(requestBody)
  }
}
module.exports = new CheckoutService();
