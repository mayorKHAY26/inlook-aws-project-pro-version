class Message {
  constructor({
    id,
    sender,
    recipient,
    subject,
    body,
    folder = "inbox",
    attachmentUrl = null
  }) {
    this.id = id;
    this.sender = sender;
    this.recipient = recipient;
    this.subject = subject || "No Subject";
    this.body = body || "";
    this.folder = folder;
    this.attachmentUrl = attachmentUrl;
    this.appName = "inlook-webmail-Komotehinse-version";
    this.isRead = false;
    this.createdAt = new Date();
  }
}

module.exports = Message;