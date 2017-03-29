var express = require('express');
var app = express();
var port = 8080;

app.get('/', function(req, res){
  res.send('It seems to be working. Good job!');
});

app.listen(port, function(){
  console.log('Server is listening on port ' + port);
});
