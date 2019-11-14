const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const {getHomePage, addUser}=require('./routes/homePage.js');
const {getAdmin}=require('./routes/admin.js');
const {success}=require('./routes/success.js');
if(process.env.JAWSDB_URL) {
 var connection = mysql.createConnection(process.env.JAWSDB_URL);
 connection.connect(function(err){
   if(err) {
     console.log(err);
   }
   else {
     console.log("connected");
   }
 });
} else {
 var connection = mysql.createConnection('mysql://r73j0ltyjn09jiza:gyulu0ynbz3hy3sp@d6q8diwwdmy5c9k9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/h5rumeh3i389hfbj');
 connection.connect(function(err){
   if(err) {
     console.log("this didnt work");
   } else {
     console.log("connected locally");
   }
 });
 console.log("NO JAWS URL");
}
global.connection = connection;
var port = process.env.PORT || 3000;
app.set('port', process.env.port || port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');

app.get('/', getHomePage);
app.post('/', addUser);
app.get('/success', success);
app.get('/admin', getAdmin);

app.listen(port, function () {
   console.log('Example app listening on port', port);
});