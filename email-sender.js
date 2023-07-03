const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
  },
});

const mailOptions = {
  from: "amin.sradkia@gmail.com",
  to: "amine.sradkia@sacemgroup.com",
  subject: "Subject",
  text: "Email sent from nodejs file",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
    // do something useful
  }
});
