const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/json
app.use(bodyParser.json({limit: '50mb'})); // Adjust limit as needed

app.post('/', (req, res) => {
  console.log('Received request body:', req.body);
  res.json({ message: 'Request received successfully!' });
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});