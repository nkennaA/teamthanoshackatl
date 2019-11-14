const fs = require('fs');
module.exports = {
    getHomePage: (req, res) => {
        let eventsQuery = "SELECT event_name FROM the_events";
        connection.query(eventsQuery, (err, result) => {
            if(err) {
                return res.status(500).send(err);
            }
            if(result.length != 3) {
                return res.send("Too many events");
            }
            let first = result[0]["event_name"];
            let second = result[1]["event_name"];
            let third = result[2]["event_name"];
            res.render('index.ejs', {
                first,
                second,
                third
            });
        });
    },
    addUser: (req, res) => {
        if (!req.body) {
            return res.status(400).send("No files were uploaded.");
        }
        console.log("woo");
        const 
        myEmail = req.body.email,
        fName = req.body.fname,
        lName = req.body.lname,
        nameReg =  /^[A-Z][a-zA-Z-']+[a-zA-Z]$/, 
        emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,   //*(yahoo|ymail|rocketmail|gmail|aol|hotmail|icloud|mailchimp|zoho|gmx|hushmail|mail|outlook|yandex|army|godaddy|aemail4u|boardermail|caramail|email|fastmail|swissmail|comcast|domain|namecheap|name|msn|theclubhou.se|simplicity|indeed|bluehost)\.(net|mil|com|in|org|co\.uk)*/ 
        spcChar= /^[0-9!@#\$%\^\&*\)\(+=._-]+$/, 
        errChar= /^\S+$/,
        emailErr= /^\S+$/
        charEmail= emailErr.test(myEmail), 
        myChar1= errChar.test(fName),
        myChar2= errChar.test(lName),
        char1= spcChar.test(fName),
        char2= spcChar.test(lName),    
        nameRes = nameReg.test(fName),
        nameRes2 = nameReg.test(lName),
        emailRes = emailReg.test(myEmail);
        console.log(myChar1);
        console.log(myChar2);
        console.log(emailRes);
       
      if(fName == "") {
          var message = "Please Enter Your First Name!";
          res.render("error.ejs", {
              message
          });
          return;
        }
      
      else if(myChar1 == false){
        var message= "Do Not Put Spaces In First Name!";
        res.render("error.ejs", {
            message
        });
        return;
        }
      
      else if(fName[0] !== fName[0].toUpperCase()) {
          var message= "Please Capitalize Your First Name!";
          res.render("error.ejs", {
            message
        });
        return;
        }
      
      else if(char1 === true && char1 !== nameRes && nameRes !== spcChar) {
          var message= "Do Not Add Special Characters In Your First Name!"
          res.render("error.ejs", {
            message
        });
        return;
        }
      else if(nameRes === false) {
        var message= "Please Enter a Valid First Name!";
        res.render("error.ejs", {
            message
        });
        return;
        }
      
      if(lName == "") {
        var message= "Please Enter Your Last Name!";
        res.render("error.ejs", {
            message
        });
        return;
        }
        
      else if(myChar2 == false) {
          var message = "Do Not Put Spaces in Last Name!";
          res.render("error.ejs", {
            message
        });
        return;
        }
        
      else if(lName[0] !== lName[0].toUpperCase()) {
          var message= "Please Capitalize Your Last Name!";
          res.render("error.ejs", {
            message
        });
        return;
        }
        
      else if(char2 === true && char2 !== nameRes2 && nameRes2 !== spcChar) {
          var message= "Do Not Add Special Characters In Your Last Name!";
          res.render("error.ejs", {
            message
        });
        return; 
        }
      
      else if(nameRes2 === false) {
        var message= "Please Enter a Valid Last Name!";
        res.render("error.ejs", {
            message
        });
        return; 
        }
    
        
      if(myEmail == "") {
        var message= "Please Enter Your Email Address!";
        res.render("error.ejs", {
            message
        });
        return; 
        }
      
      else if(charEmail !== true) {
        var message= "Please Don't Add Any Spaces In Your Email!";
        res.render("error.ejs", {
            message
        });
        return; 
        }
      else if(emailRes === false) {
        var message= "Please Enter a Valid Email Address!";
        res.render("error.ejs", {
            message
        });
        return; 
        }
      
      else if(emailRes === true && nameRes2 === true && nameRes ===true) {
          console.log("True");
      }
        let name = req.body.fname +" "+ req.body.lname;
        name = name.replace(/'/g, "\'");
        let email = req.body.email;
        let eventID;
        let event = req.body.event;
        if(event === "event1"){
            eventID = 1;
        } else if(event ==="event2"){
            eventID = 2;
        } else {
            eventID = 3;
        }
        let emailQuery = "SELECT * FROM `guests` WHERE email_address = '"+email+"'";
        connection.query(emailQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if(result.length > 0) {
                res.send('This email already exists');
            } else {
                let insertQuery = "INSERT INTO `guests` (guest_name, email_address, event_id) VALUES ('"+name+"', '"+email+"', '"+eventID+"')";
                connection.query(insertQuery, (err, result) => {
                    if(err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/success');
                });
            }
        });
    }
}