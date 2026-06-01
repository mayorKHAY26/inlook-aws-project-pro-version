function MailViewer({ message }) {
  return (
    <div className="mail-card">
      <h3>{message.subject || "No Subject"}</h3>
      <p><strong>From:</strong> {message.sender}</p>
      <p><strong>To:</strong> {message.recipient}</p>
      <p>{message.body}</p>
      <small>{new Date(message.createdAt).toLocaleString()}</small>
    </div>
  );
}

export default MailViewer;