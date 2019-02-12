let express = require('express');
let app = express();

const AddItemsController = require('../controllers/add-items-controller.js');
// const exampleJson = require('../example.json');
// const router = express.Router();
// NOTE: Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
const helmet = require('helmet'); 

let server = app.listen(8080, () => {
  let host = server.address().address
  let port = server.address().port
  console.log("app listening at http://",'host>', host, 'post>', port)
})
app.use(express.json());

app.get('/checkout', helmet.noCache(), (req, res) => { 
  req.get('Referrer')
  res.send(req.body)
  const addItemsController = new AddItemsController();
  
  addItemsController.handle(req, res);
});

