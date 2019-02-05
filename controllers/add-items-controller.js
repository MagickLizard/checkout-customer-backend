const CheckoutAddingItemsModel = require('../models/checkout-adding-items-model.js');

class AddItemsController {
  constructor() {
     this.checkoutAddingItemsModel = new CheckoutAddingItemsModel();
  }

  handle(req, res) {
    console.log('req>>>', req.body)
    console.log('res>>>', res)
    let checkout = this.checkoutAddingItemsModel.add(req => {
      if (!err && req.body) {
         data = {
          id: req,
          Customer: '',
          Items: '',
          'Total':'',
        };
        next(null, data);
      }
    });
        console.log('checkout controller>>>', checkout)
  }
}

module.exports = AddItemsController;
