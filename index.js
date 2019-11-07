var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
const path = require('path');

var app = express();
app.use(express.static('public'));
// app.set('views', __dirname+'/views');
// app.set('view engine', 'ejs');
// app.get('/', function (req, res) {
//     res.render('./index.html');
// });

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
app.listen(port, function () {
    console.log(`Example app listening on port`, port);
});