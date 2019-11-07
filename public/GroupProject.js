
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}

connection.connect();

connection.query('SELECT * FROM the_events', (err,rows) => {
  if(err) {
    console.log("Error fetching rows");
  }
  console.log("Data received from Db:\n");
  console.log(rows);
});
//   function validateForm() {
//   var name1 = document.forms["myForm"]["fname"].value;
//   var email1 = document.forms["myForm"]["email"].value;
  
//   if (name1 == "") 
//   {
//     alert("Name must be filled out");
//     return false;
//   }
//   if (email1 == "")
//   {
//     alert("Email must be filled out");
//     return false;
//   }
//   return false;
// }

// function ValidateEmail(mail){
//   var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (emailFormat.test(myForm.email.value)){

//   }
//   return true;
// }
// alert("You have entered an invalid email address!")
// return false;
// }