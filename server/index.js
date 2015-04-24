var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.normalize(__dirname+'/../client/')));

app.get('/', function (req, res) {
	res.sendFile(path.normalize(__dirname+'/../client/index.html'));
});

app.listen(8171, function () {
	console.log("Server has started.");
});