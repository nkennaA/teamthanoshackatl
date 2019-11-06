var express = require("express");
var app = express();
var path = require("path");


var app = express();
    app.use(express.static(__dirname + '/public'));

let port = process.env.PORT;
if(port == null || port == ""){
    port = 8000;
}
app.listen(port);
console.log('Server is running at ' + port);