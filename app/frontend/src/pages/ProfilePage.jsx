import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import UserProfile from "../components/UserProfile";

function ProfilePage() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <UserProfile user={user} />
        </main>
      </div>
    </>
  );
}

export default ProfilePage;