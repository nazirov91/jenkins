var express = require('express');
var app = express();
var port = 8080;

app.get('/', function(req, res){
  res.send('Now trying with the deploy user');
});

app.listen(port, function(){
  console.log('Server is listening on port ' + port);
});
