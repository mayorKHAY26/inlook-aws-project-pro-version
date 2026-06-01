import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Inbox from "../components/Inbox";
import api from "../services/api";

function InboxPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    api.get("/api/mail/inbox").then((res) => setMessages(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Inbox messages={messages} />
        </main>
      </div>
    </>
  );
}

export default InboxPage;