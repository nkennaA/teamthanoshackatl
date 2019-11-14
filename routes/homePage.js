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