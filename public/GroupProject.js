

function validateForm()
{
  const 
    myEmail = document.getElementById("mail").value,
    fName = document.getElementById("fname").value,
    lName = document.getElementById("lname").value,
    nameReg = /^[a-zA-Z' `-]+$/ ,
    emailReg = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,      
    nameRes = nameReg.test(fName),
    nameRes2 = nameReg.test(lName),
    emailRes = emailReg.test(myEmail);
    
    
    if(fName == "")
  {
    alert("Please Enter a First Name")
    }
  else if(nameRes === false)
  {
    alert("Please Enter a Valid First Name");
     }
  if(lName == "")
  {
    alert("Please Enter a Last Name");
    }
  else if(nameRes2 === false)
  {
    alert("Please Enter a Valid Last Name");
    }
  if(myEmail == "")
  {
    alert("Please Enter a Email Address");
    return false;
  }
  else if(emailRes === false)
  {
    alert("Please Enter a Valid Email Address");
    return false;
    }
  if(emailRes === true && nameRes2 === true && nameRes ===true){
    
    return confirm("Thank You for signing in @ The Clubhou.se!!!");

  }
}
   
console.log("woo");
