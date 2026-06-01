const Message = require("../models/Message");
const { messages } = require("../config/db");

const getInbox = (req, res) => {
  const inbox = messages.filter(
    (message) => message.recipient === req.user.email && message.folder === "inbox"
  );

  res.json(inbox);
};

const getSentMail = (req, res) => {
  const sent = messages.filter(
    (message) => message.sender === req.user.email && message.folder === "sent"
  );

  res.json(sent);
};

const getDrafts = (req, res) => {
  const drafts = messages.filter(
    (message) => message.sender === req.user.email && message.folder === "draft"
  );

  res.json(drafts);
};

const sendMail = (req, res) => {
  const { recipient, subject, body } = req.body;

  const sentMessage = new Message({
    id: Date.now().toString(),
    sender: req.user.email,
    recipient,
    subject,
    body,
    folder: "sent"
  });

  const inboxMessage = new Message({
    id: `${Date.now()}-inbox`,
    sender: req.user.email,
    recipient,
    subject,
    body,
    folder: "inbox"
  });

  messages.push(sentMessage);
  messages.push(inboxMessage);

  res.status(201).json({
    message: "Email sent successfully",
    data: sentMessage
  });
};

const saveDraft = (req, res) => {
  const { recipient, subject, body } = req.body;

  const draft = new Message({
    id: Date.now().toString(),
    sender: req.user.email,
    recipient,
    subject,
    body,
    folder: "draft"
  });

  messages.push(draft);

  res.status(201).json({
    message: "Draft saved successfully",
    data: draft
  });
};

module.exports = {
  getInbox,
  getSentMail,
  getDrafts,
  sendMail,
  saveDraft
};