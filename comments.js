// Create web server
// Create a route to handle POST requests to /comments
// Read the data from the request body
// Parse the data into a JavaScript object
// Push the object into the comments array
// Send a response back to the client
// The response should be the object that was pushed into the comments array
// If there is an error, send a 400 status code and an error message back to the client

const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const comments = [];

app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.status(200).json(newComment);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});