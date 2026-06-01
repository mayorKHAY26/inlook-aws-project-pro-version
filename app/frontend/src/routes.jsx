import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import InboxPage from "./pages/InboxPage";
import SentPage from "./pages/SentPage";
import DraftsPage from "./pages/DraftsPage";
import ComposePage from "./pages/ComposePage";
import ProfilePage from "./pages/ProfilePage";

function AppRoutes() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/inbox" element={token ? <InboxPage /> : <Navigate to="/login" />} />
      <Route path="/sent" element={token ? <SentPage /> : <Navigate to="/login" />} />
      <Route path="/drafts" element={token ? <DraftsPage /> : <Navigate to="/login" />} />
      <Route path="/compose" element={token ? <ComposePage /> : <Navigate to="/login" />} />
      <Route path="/profile" element={token ? <ProfilePage /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default AppRoutes;