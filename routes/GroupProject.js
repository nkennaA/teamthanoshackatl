

function validateForm() {
  const 
    myEmail = document.getElementById("mail").value,
    fName = document.getElementById("fname").value,
    lName = document.getElementById("lname").value,
    nameReg =  /^[A-Z][a-zA-Z-']+[a-zA-Z]$/, 
    emailReg = /^[a-zA-Z0-9][a-zA-Z0-9!@\$%\&-_.]+[\S+@\S]+@(yahoo|ymail|rocketmail|gmail|aol|hotmail|icloud|mailchimp|zoho|gmx|hushmail|mail|outlook|yandex|army|godaddy|aemail4u|boardermail|caramail|email|fastmail|swissmail|comcast|domain|namecheap|name|msn|theclubhou.se|simplicity|indeed|bluehost)\.(net|mil|com|in|org|co\.uk)$/i,  
    spcChar= /^[0-9!@#\$%\^\&*\)\(+=._-]+$/, 
    errChar= /^\S+$/,
    emailErr= /^\S+$/,
    charEmail= emailErr.test(myEmail), 
    myChar1= errChar.test(fName),
    myChar2= errChar.test(lName),
    char1= spcChar.test(fName),
    char2= spcChar.test(lName),    
    nameRes = nameReg.test(fName),
    nameRes2 = nameReg.test(lName),
    emailRes = emailReg.test(myEmail);
   
  if(fName == "") {
    alert("Please Enter Your First Name!");
    }
  
  else if(myChar1 == false){
    alert("Do Not Put Spaces In First Name!");
    }
  
  else if(fName[0] !== fName[0].toUpperCase()) {
      alert("Please Capitalize Your First Name!");
    }
  
  else if(char1 === true && char1 !== nameRes && nameRes !== spcChar) {
      alert("Do Not Add Special Characters In Your First Name!");
    }
  else if(nameRes === false) {
    alert("Please Enter a Valid First Name!");
    return false;
    }
  
  if(lName == "") {
    alert("Please Enter Your Last Name!");
    }
    
  else if(myChar2 == false) {
      alert("Do Not Put Spaces in Last Name!");
    }
    
  else if(lName[0] !== lName[0].toUpperCase()) {
      alert("Please Capitalize Your Last Name!");
    }
    
  else if(char2 === true && char2 !== nameRes2 && nameRes2 !== spcChar) {
      alert("Do Not Add Special Characters In Your Last Name!");
    }
  
  else if(nameRes2 === false) {
    alert("Please Enter a Valid Last Name!");
    }
    
  if(myEmail == "") {
    alert("Please Enter Your Email Address!");
    }
  
  else if(charEmail !== true) {
    alert("Please Don't Add Any Spaces In Your Email!");
    }
  else if(emailRes === false) {
    alert("Please Enter a Valid Email Address!");
    return false;
    }
  
  else if(emailRes === true && nameRes2 === true && nameRes ===true) {
    return confirm("Thank You For Signing Into An Event @ The Clubhou.se!!!");
    }
}
   
console.log("woo");
