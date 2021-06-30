const express = require('express');
// const http = require('http'); // http for local deploy
const http = require('https'); // https deploy on heroku
const cors = require('cors');

const PORT = 4000;
const app = express();
app.use(cors());

const server = http.createServer(app);

require('./socket').listen(server);

server.listen(PORT, () => console.log(`socket server started at port ${PORT}`));
