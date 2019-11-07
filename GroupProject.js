
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  var z = document.forms["myForm"]["email"].value;
  
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  if(z ==""){
    alert("Email must be filled out");
    return false;
  }
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(z.value.match(mailformat)){
    return true;
  }else
  {
  alert("You have entered an invalid email address!");
z.focus();
return false;
}
}
