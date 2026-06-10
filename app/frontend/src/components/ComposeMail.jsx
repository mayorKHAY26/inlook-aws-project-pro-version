import React from "react";
import { useState } from "react";
import api from "../services/api";

function ComposeMail() {
  const [form, setForm] = useState({
    recipient: "",
    subject: "",
    body: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const sendMail = async (e) => {
    e.preventDefault();

    await api.post("/api/mail/send", form);

    setMessage("Email sent successfully");
    setForm({ recipient: "", subject: "", body: "" });
  };

  const saveDraft = async () => {
    await api.post("/api/mail/draft", form);
    setMessage("Draft saved successfully");
  };

  return (
    <form className="form-card wide" onSubmit={sendMail}>
      <h2>Compose Mail</h2>

      {message && <p className="success">{message}</p>}

      <input
        name="recipient"
        placeholder="Recipient email"
        value={form.recipient}
        onChange={handleChange}
        required
      />

      <input
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
      />

      <textarea
        name="body"
        placeholder="Write your message..."
        value={form.body}
        onChange={handleChange}
        rows="8"
      />

      <div className="button-row">
        <button type="submit">Send</button>
        <button type="button" onClick={saveDraft}>Save Draft</button>
      </div>
    </form>
  );
}

export default ComposeMail;