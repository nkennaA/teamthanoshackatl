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
        emailReg = /^[a-zA-Z0-9][a-zA-Z0-9!@\$%\&-_.]+[\S+@\S]+@[a-zA-Z0-9!@\$%\&-_.]+$/i,   //*(yahoo|ymail|rocketmail|gmail|aol|hotmail|icloud|mailchimp|zoho|gmx|hushmail|mail|outlook|yandex|army|godaddy|aemail4u|boardermail|caramail|email|fastmail|swissmail|comcast|domain|namecheap|name|msn|theclubhou.se|simplicity|indeed|bluehost)\.(net|mil|com|in|org|co\.uk)*/ 
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
        console.log(myChar1);
        console.log(myChar2);
        console.log(emailRes);
       
      if(fName == "") {
        res.send("Please Enter Your First Name!");
        }
      
      else if(myChar1 == false){
        res.send("Do Not Put Spaces In First Name!");
        }
      
      else if(fName[0] !== fName[0].toUpperCase()) {
          res.send("Please Capitalize Your First Name!");
        }
      
      else if(char1 === true && char1 !== nameRes && nameRes !== spcChar) {
          res.send("Do Not Add Special Characters In Your First Name!");
        }
      else if(nameRes === false) {
        res.send("Please Enter a Valid First Name!");
        return false;
        }
      
      if(lName == "") {
        res.send("Please Enter Your Last Name!");
        }
        
      else if(myChar2 == false) {
          res.send("Do Not Put Spaces in Last Name!");
        }
        
      else if(lName[0] !== lName[0].toUpperCase()) {
          res.send("Please Capitalize Your Last Name!");
        }
        
      else if(char2 === true && char2 !== nameRes2 && nameRes2 !== spcChar) {
          res.send("Do Not Add Special Characters In Your Last Name!");
        }
      
      else if(nameRes2 === false) {
        res.send("Please Enter a Valid Last Name!");
        }
        
      if(myEmail == "") {
        res.send("Please Enter Your Email Address!");
        }
      
      else if(charEmail !== true) {
        res.send("Please Don't Add Any Spaces In Your Email!");
        }
      else if(emailRes === false) {
        res.send("Please Enter a Valid Email Address!");
        return false;
        }
      
      else if(emailRes === true && nameRes2 === true && nameRes ===true) {
          console.log("True");
      }
        let name = req.body.fname +" "+ req.body.lname;
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