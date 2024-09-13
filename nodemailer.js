const nodemailer = require("nodemailer");
const { user, pass, host } = require("./config");

const transporter = nodemailer.createTransport({
  host: host,
  tls: { rejectUnauthorized: false },
  port: 465,
  secure: true, //allow use of port 587 must be true if port 465
  auth: {
    user: user,
    pass: pass,
  },
});

function sendEmail(payload, sender, to) {
  const mailOptions = {
    from: sender,
    to: to,
    subject: payload.subject,
    html: payload.content,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    console.log(error, info);
  });
}

module.exports = { sendEmail, transporter };
