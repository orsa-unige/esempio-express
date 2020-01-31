#!/usr/bin/env node

// Server.js
const express = require('express'),
      server = express(),
      users = require('./users');

// Setting the port.
server.set('port', process.env.PORT || 3000);

// Muori bastardo maledetto
server.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

// Adding routes
server.get('/',(request,response)=>{
    response.sendFile(__dirname + '/page.html');
});

server.get('/users',(request,response)=>{
    response.json(users);
});

// Binding to localhost://3000
server.listen(3000,()=>{
    console.log('Express server started at port 3000');
});


