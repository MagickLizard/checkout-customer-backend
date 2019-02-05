const CheckoutService = require('../services/checkout-service.js');

class CheckoutAddingItemsModel {
  constructor() {
    this.checkoutService = CheckoutService
  }

  add(newData) {
    console.log('checkoutService getting into model>>>')
    const checkoutService = this.checkoutService.add(newData) //TODO: create a safety layer in lib instead of calling this from model
    return checkoutService;
  }

  total(allData) {
    return allData
  }
}
module.exports = CheckoutAddingItemsModel;
