const express = require("express");
const router = express.Router();
const { sendEmail } = require("./nodemailer");
const { emailTemplate } = require("./emailTemplate");
const { personalEmail } = require("./configs");

router.post("/", (req, res) => {
  console.log(req.body);
  let { name, email, message } = req.body;

  if (!name | !email | !message) {
    res.send({ status: 0, reason: "incomplete data" });
    return;
  }



  try {
    sendEmail(emailTemplate(email, name, message), email, personalEmail);
    res.send({ status: 1 });
  } catch (e) {
    console.log(e);
    res.send({ status: 0 });
  }
});

module.exports = router;
