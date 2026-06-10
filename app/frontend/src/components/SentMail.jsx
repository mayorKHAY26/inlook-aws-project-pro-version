import React from "react";
import MailViewer from "./MailViewer";

function SentMail({ messages }) {
  return (
    <div className="mail-list">
      <h2>Sent Mail</h2>

      {messages.length === 0 ? (
        <p>No sent messages.</p>
      ) : (
        messages.map((message) => (
          <MailViewer key={message.id} message={message} />
        ))
      )}
    </div>
  );
}

export default SentMail;