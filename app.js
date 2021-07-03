const express = require('express');
const http = require('http');
const cors = require('cors');

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());

const server = http.createServer(app);

require('./socket').listen(server);

server.listen(PORT, () => console.log(`socket server started at port ${PORT}`));
