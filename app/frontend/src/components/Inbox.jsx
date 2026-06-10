import React from "react";
import MailViewer from "./MailViewer";

function Inbox({ messages }) {
  return (
    <div className="mail-list">
      <h2>Inbox</h2>

      {messages.length === 0 ? (
        <p>No inbox messages.</p>
      ) : (
        messages.map((message) => (
          <MailViewer key={message.id} message={message} />
        ))
      )}
    </div>
  );
}

export default Inbox;