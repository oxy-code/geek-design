var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'src')));
app.listen('3000', function(){
	console.log('Open this link in your browser http://localhost:3000')
})