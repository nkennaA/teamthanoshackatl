var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
const path = require('path');

var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}

connection.connect((err) => {
  if(err){
    console.log("Error Connecting");
    return;
  }
  console.log("Connection Established");
});

connection.query('SELECT * FROM the_events', (err,rows) => {
  if(err) {
    console.log("Error fetching rows");
  }
  console.log("Data received from Db:\n");
  console.log(rows);
});

// app.use(express.static(__dirname + '/public'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//   });
// app.listen(port, function () {
//     console.log(`Example app listening on port`, port);
// });