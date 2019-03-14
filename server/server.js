require('dotenv').config()
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

app.use(express.static(`${__dirname}/../build`));

//nodemailer
const { USER, PASS, SERVER_PORT } = process.env

app.post("/send", async (req, res) => {
  const output = `
  <p> You have  new contact request</p>
  <h3>Contact Details</h3>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Email: ${req.body.email}</li>
  </ul>
  <h3>Message</h3>
  <p> ${req.body.message}</p>
  `;

console.log(`kennycrump9@hotmail.com`, PASS)
const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: `kennycrump9@hotmail.com`,
        pass: PASS
    }
});

//   setup email data with unicode symbols
  let mailOptions = {
    from: 'kennycrump9@hotmail.com', // sender address
    to: 'kennycrump@gmail.com', // list of receivers
    subject: "KC Portfolio Contact Request", // Subject line
    text: "", // plain text body
    html: output // html body
  };

  // send mail with defined transport object
//   let info = await transporter.sendMail(mailOptions);
    let info = await transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
   });
  //   console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  res.status(200).send({ message: "Email has been sent" });
});

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`);
});
