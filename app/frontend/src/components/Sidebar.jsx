import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/inbox">Inbox</Link>
      <Link to="/sent">Sent</Link>
      <Link to="/drafts">Drafts</Link>
      <Link to="/compose">Compose</Link>
      <Link to="/profile">Profile</Link>
    </aside>
  );
}

export default Sidebar;