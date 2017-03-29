var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res){
  res.send('Testing!');
});

app.listen(port, function(){
  console.log('Server is listening on port ' + port);
});
