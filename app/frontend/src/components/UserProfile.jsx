import React from "react";
function UserProfile({ user }) {
  return (
    <div className="profile-card">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
    </div>
  );
}

export default UserProfile;