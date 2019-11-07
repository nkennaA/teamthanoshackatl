


function myFunction() {
  
  var x = document.forms["myForm"]["fname"].value;
  var z = document.forms["myForm"]["email"].value;
  var mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var letters = /^[A-Za-z\s]+$/;
  
  if(x == "")
  {
   
    alert ("message");
    return false;
  }
  if(z == "")
  {
   
    alert('Message');
    return false;
  }
  
  
  
  
  
  
  
  
  
  
  
  /*if (x.value.match(letters)) {
   
    return true;
    
   }
   else{
    alert("Name must be filled out")
    return false;
    
   }
}

  if(z == "mailformat.test(str")){
    document.myForm.email.focus();
    return true;
  }
  else{
    alert("You have entered an invalid email address!");
    document.myForm.email.focus();
    return false;*/
}

