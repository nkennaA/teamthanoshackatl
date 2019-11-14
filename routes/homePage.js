const fs = require('fs');
module.exports = {
    getHomePage: (req, res) => {
        res.render('index.ejs', {});
    },
    addUser: (req, res) => {
        if (!req.files) {
            return res.status(400).send("No files were uploaded.");
        }
        let name = req.body.fname +" "+ req.body.lname;
        let email = req.body.email;
        let eventID;
        let event = req.body.event;
        if(event === "Beer & Bytes"){
            eventID = 0;
        } else if(event ==="Augusta Dev"){
            eventID = 1;
        } else {
            eventID = 2;
        }
        let emailQuery = "SELECT * FROM `guests` WHERE email_address = '"+email+"'";
        connection.query(emailQuery, (req, res) => {
            if (err) {
                return res.status(500).send(err);
            }
            if(result.length > 0) {
                alert('This email already exists');
            } else {
                let insertQuery = "INSERT INTO `guests` (guest_name, email_address, event_id) VALUES ('"+name+"', '"+email+"', '"+eventID+"')";
                connection.query(insertQuery, (req, result) => {
                    if(err) {
                        return res.status(500).send(err);
                    }
                    alert("Successfully added user");
                    res.redirect('/');
                });
            }
        });
    }
}