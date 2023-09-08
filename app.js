const express = require('express');
const ws = require('ws');
const {createServer} = require("http");


const app = express(); // Rest API 

const server = createServer(app); // http.Server for WebSocketServer
const wsServer = new ws.WebSocketServer({server : server});

app.use(express.static('./react-app/public/'))
server.listen(80);
