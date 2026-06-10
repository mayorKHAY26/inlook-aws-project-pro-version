import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ComposeMail from "../components/ComposeMail";

function ComposePage() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <ComposeMail />
        </main>
      </div>
    </>
  );
}

export default ComposePage;