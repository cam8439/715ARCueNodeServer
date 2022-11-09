const http = require('http');
const express = require('express');
const router = require('./router')

app = express();

app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

app.use('/', router);

port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(server.address())
    console.log(`Server listening on port ${port}`)
});