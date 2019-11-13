const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

if(process.env.JAWS_DB_URL) {
  var connection = mysql.createConnection(process.env.JAWS_DB_URL);
  connection.connect(function(err){
    if(err) {
      console.log(err);
    }
    else {
      console.log("connected");
    }
  });
}
global.connection = connection;

var port = process.env.PORT || 3000;
const path = require('path');
app.set('port', process.env.port || port);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
app.listen(port, function () {
    console.log('Example app listening on port', port);
});