import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <h1>Dashboard</h1>
          <p>Welcome, {user?.name}</p>

          <div className="dashboard-grid">
            <div className="stat-card">Inbox</div>
            <div className="stat-card">Sent</div>
            <div className="stat-card">Drafts</div>
            <div className="stat-card">Monitoring Ready</div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;