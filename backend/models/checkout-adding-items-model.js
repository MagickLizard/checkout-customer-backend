const CheckoutService = require("../services/checkout-service.js");

class CheckoutAddingItemsModel {
  constructor() {
    this.checkoutService = CheckoutService;
  }

  add(req) {
    if (req.body) {
      const res = this.checkoutService.wrapper(req.body);
      console.log("in add>", res);
      return res;
    } else {
      console.log("ERROR in Model >>>");
      return {error: Error};
    }
  }

  total(allData) {
    return allData;
  }
}
module.exports = CheckoutAddingItemsModel;
