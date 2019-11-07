
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
const path = require('path');
if (process.env.JAWSDB_URL) {
 connection = mysql.createConnection(process.env.JAWSDB_URL);
}
app.use(express.static(__dirname + '/public'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
app.listen(port, function () {
    console.log('Example app listening on port', port);
});