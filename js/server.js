// const { response } = require('express');
const http = require('http');
const fs = require('fs');

// gateway that will be listened to for connection requests
const PORT = 8080;


// Create a function for handling the requests and responses coming into our server
const handleRequest = (req, res) => {
    const path = req.url;
  // Here we use the fs package to read our index.html file
  fs.readFile(`${__dirname}/index.html`, (err, data) => {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
};

// Create our server
const server = http.createServer(handleRequest);

// Starts our server
server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});