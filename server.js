var nodemailer = require("nodemailer");
// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
        type: "login", 
        user: "ismail.tk18@gmail.com",
        pass: "nelgtwxooezpkmri"
    }
});

var mailOptions = {
    from: "ismail.tk18@gmail.com", 
    to: "ansar.devfactory@gmail.com", 
    subject: "Hello", 
    text: "Hello Test"
}

smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response);
    }
});