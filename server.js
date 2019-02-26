var express = require('express');
var socket = require('socket.io');
var app = express();
var http = require('http');
var server = app.listen(3000, function() {console.log('Server is running on PORT 3000');});


app.use(express.static('public'));

var io = socket(server);

connections= [];


io.on('connection', function(socket){
	connections.push(socket);
	console.log('%s Sockets connected', connections.length );


	socket.on('user', function(data){
socket.broadcast.emit('user', data);
});

	socket.on('chat', function(data){
	io.sockets.emit('chat', data);

});

});

	
	
 io.on('disconnect', function(){
 	connections.splice(connections.indexOf(socket),1);
 	console.log('%s Sockets connected' , connections.length);

 });





