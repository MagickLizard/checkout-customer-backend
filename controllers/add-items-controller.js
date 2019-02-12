const CheckoutAddingItemsModel = require('../models/checkout-adding-items-model.js');

class AddItemsController {
  constructor() {
    this.checkoutAddingItemsModel = new CheckoutAddingItemsModel();
  }

  handle(req, res) {
    if (req) { //TODO: fix this later use request lib and use promify 
      let checkout = this.checkoutAddingItemsModel.add(req)
      return checkout;
    }
    else {
      return data = {
        id: 'Something wrong',
        Customer: '',
        Items: '',
        'Total': '',
      };
    }
  }
}

module.exports = AddItemsController;
