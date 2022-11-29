//Claire Murray

// Import Required Modules
const http = require('http');
const express = require('express');
const router = require('./router')

// Initialize Express server
app = express();

// Set the port the server will run on.
// (Most of the time will be port 3000)
app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

// All routes will be relative to '/' and found in router.js
app.use('/', router);

// Start listening on the port
port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(server.address())
    console.log(`Server listening on port ${port}`)
});