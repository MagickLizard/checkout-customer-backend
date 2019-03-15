
const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes directory
require('./routes')(app);

app.get('/', (req, res) => {
  
  res.send('PORT 8080');
});

app.listen(port, (err) => {
  if (err) { console.log(err); };
  console.log('Listening on port ' + port);
});