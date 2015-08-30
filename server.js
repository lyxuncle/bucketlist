var http = require("http");
var url = require("url");

function start(route, handle){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request);
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started");
}

exports.start = start;

// var express = require('express');
// var app = express();
 
// app.get('/', function (request, response) {
//   response.send('Hello World');
// });
 
// var server = app.listen(3000, function() {
//     console.log('Listening on port %d', server.address().port);
// });