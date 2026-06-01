const notifyUser = async (message) => {
  console.log(`Notification: ${message}`);
  return true;
};

module.exports = {
  notifyUser
};