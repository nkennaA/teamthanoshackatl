var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
const path = require('path');
// var mysql = require('mysql');
// var connection = port===3000 ? mysql.createConnection('mysql://r73j0ltyjn09jiza:gyulu0ynbz3hy3sp@d6q8diwwdmy5c9k9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/h5rumeh3i389hfbj')
//                              : mysql.createConnection(process.env.JAWSDB_URL);
// connection.connect();
// export function pullEvents(){
//     connection.query('SELECT * FROM the_events', (err,rows) => {
//         if(err) {
//           console.log("Error fetching rows");
//         }
//         console.log("Data received from Db:\n");
//         console.log(rows);
//       });
// }
app.use(express.static(__dirname + '/public'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
app.listen(port, function () {
    console.log(`Example app listening on port`, port);
});