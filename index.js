var express = require("express");
console.log(1);
var app = express();
console.log(2);
var port = process.env.PORT || 3000;
console.log(3);
const path = require('path');
console.log(4);
app.use(express.static(__dirname + '/public'));
  app.get('*', (req, res) => {
    console.log(5);
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    console.log(6);
  });
app.listen(port, function () {
    console.log('Example app listening on port', port);
});