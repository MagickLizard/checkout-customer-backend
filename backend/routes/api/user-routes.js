let express = require('express');
const AddItemsController = require('../../controllers/add-items-controller.js');
// NOTE: Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
const helmet = require('helmet'); 


module.exports = (app) => {

	let zipcode = 'test';

	app.post('/user', (req, res) => {

    // zipcode = req.body.zipcode;
    res.send({ req, zipcode });
		// if(!zipcode || zipcode.length < 5 || zipcode.length > 5) {
		// 	res.redirect('/error');
		// } else { 
		// 	res.redirect('/user');
		// }
  }),
  app.post('/api/customer', helmet.noCache(), (req, res) => { 
  req.get('Referrer')
  console.log('req.body>>>', req.body)
  
  res.send(req.body)
  const addItemsController = new AddItemsController();
  addItemsController.handle(req, res);
});
}
