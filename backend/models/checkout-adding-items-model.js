const CheckoutService = require('../services/checkout-service.js');

class CheckoutAddingItemsModel {
  constructor() {
    this.checkoutService = CheckoutService
  }

  add(req) {
    if (req.body) {
   //TODO: create a safety layer in lib instead of calling this from model
   return this.checkoutService.wrapper(req.body)
    }
    else {
      console.log('ERROR in Model >>>')
      //not handling yet
    }
 
  }

  total(allData) {
    return allData
  }
}
module.exports = CheckoutAddingItemsModel;
