const IterateRequestHelper = require('../lib/iterate-request-helper.js');

class CheckoutService {
  constructor() {
  }
  wrapper(requestBody) {
    const result = IterateRequestHelper.wrapper(requestBody)
    return result
  }
}
module.exports = new CheckoutService();
