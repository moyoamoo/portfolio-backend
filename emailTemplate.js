const emailTemplate = (email, name, message) => {
  return {
    subject: `Message from Contact Form`,
    content: `<h1>Moyo, you have a message from ${name} @ ${email}</h1>
    <p>${message}<p/>`,
  };
};

module.exports = { emailTemplate };
