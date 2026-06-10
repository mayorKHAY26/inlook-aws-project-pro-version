import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SentMail from "../components/SentMail";
import api from "../services/api";

function SentPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    api.get("/api/mail/sent").then((res) => setMessages(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <SentMail messages={messages} />
        </main>
      </div>
    </>
  );
}

export default SentPage;