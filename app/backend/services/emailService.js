const sendEmailNotification = async ({ recipient, subject }) => {
  console.log(`Email notification sent to ${recipient} for subject: ${subject}`);
  return true;
};

module.exports = {
  sendEmailNotification
};