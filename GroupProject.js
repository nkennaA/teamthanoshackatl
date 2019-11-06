
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
  }pick = document.getElementById('pick'); // or in jQuery use: select = this;
  if (pick.value) {
    // value is set to a valid option, so submit form
    return true;
  }
  return false;
}
