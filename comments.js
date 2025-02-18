// Create web server
let express = require('express');
let app = express();
app.use(express.static('public'));
let bodyParser = require('body-parser');
let fs = require('fs');

// Use body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Use JSON
app.use(bodyParser.json());

app.post('/comments', function (req, res) {
  // Get the comment from the request
  let comment = req.body.comment;

  // Read the comments file
  fs.readFile('comments.json', 'utf8', function (err, data) {
    // Parse the JSON into an object
    let comments = JSON.parse(data);

    // Add the new comment
    comments.push(comment);

    // Write the comments back to the file
    fs.writeFile('comments.json', JSON.stringify(comments), function (err) {
      // Send the response
      res.send('Comment added');
    });
  });
});

app.get('/comments', function (req, res) {
  // Read the comments file
  fs.readFile('comments.json', 'utf8', function (err, data) {
    // Parse the JSON into an object
    let comments = JSON.parse(data);

    // Send the comments as the response
    res.send(comments);
  });
});

// Start the server
app.listen(3000, function () {
  console.log('Server is running on http://localhost:3000');
});