const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;
const host = process.env.EMAIL_HOST;
const personalEmail = process.env.PERSONAL_EMAIL;

module.exports = { user, pass, host, personalEmail };
