var http = require('http');
var url  = require('url');
var fs = require('fs');
var path = require('path');

var express = require('express');
var app = express();
app.use(express.static('public'));

(async function() {

	try {
		var server = app.listen(8080,function(){
			var host = server.address().address;
			var port = server.address().port;

			console.log("Server is running on port http://%s:%s", host, port)
		})
	} catch(e) {
		console.log(e);
	}

})()
