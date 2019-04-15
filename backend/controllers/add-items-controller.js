const CheckoutAddingItemsModel = require('../models/checkout-adding-items-model.js');

class AddItemsController {
  constructor() {
    this.checkoutAddingItemsModel = new CheckoutAddingItemsModel();
  }

  handle(req, res) {
    if (req) { // TODO: fix this later use request lib and use promisify 
      let checkout = this.checkoutAddingItemsModel.add(req)
      console.log('Did you get a discount? >', checkout);
      
      return checkout;
    }
    else {
      return data = {
        id: 'Something wrong',
        customer: '',
        items: '',
        'total': '',
      };
    }
  }
}

module.exports = AddItemsController;
