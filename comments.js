// Create web server
// Step 1: Create a server object
// Step 2: Create a port to listen for requests
// Step 3: Write a response to the client
// Step 4: Send the response to the client
// Step 5: Log the request
// Step 6: Start the server
// Step 7: Test the server

// Step 1: Create a server object
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Step 3: Write a response to the client
  // res.write('Hello World from Node.js');
  // res.end();

  // Step 4: Send the response to the client
  // res.end('Hello World from Node.js');

  // Step 5: Log the request
  console.log(req.url, req.method, req.headers);

  // Step 6: Start the server
  // Step 7: Test the server
  // res.end