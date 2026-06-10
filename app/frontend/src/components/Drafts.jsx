import React from "react";
import MailViewer from "./MailViewer";

function Drafts({ messages }) {
  return (
    <div className="mail-list">
      <h2>Drafts</h2>

      {messages.length === 0 ? (
        <p>No drafts saved.</p>
      ) : (
        messages.map((message) => (
          <MailViewer key={message.id} message={message} />
        ))
      )}
    </div>
  );
}

export default Drafts;