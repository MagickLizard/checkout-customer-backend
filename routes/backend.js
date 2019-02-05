let express = require('express');
let app = express();

const AddItemsController = require('../controllers/add-items-controller.js');
// const TotalItemsController = require('../controllers/total-items-controller.js');
const exampleJson = require('../example.json');


const router = express.Router();
const helmet = require('helmet'); //Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!

let server = app.listen(8080, () => {
  let host = server.address().address
  let port = server.address().port
  console.log("app listening at http://",'host>', host, 'post>', port)
})
app.use(express.json());

app.get('/checkout', helmet.noCache(), (req, res) => { //this is deals
  req.get('Referrer')
  res.send(req.body)
  const addItemsController = new AddItemsController();
  console.log('addItemsController resp>>>', addItemsController)
  
  addItemsController.handle(req, res);
});

