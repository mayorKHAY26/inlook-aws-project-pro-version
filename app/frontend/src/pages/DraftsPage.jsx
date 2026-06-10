import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Drafts from "../components/Drafts";
import api from "../services/api";

function DraftsPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    api.get("/api/mail/drafts").then((res) => setMessages(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Drafts messages={messages} />
        </main>
      </div>
    </>
  );
}

export default DraftsPage;