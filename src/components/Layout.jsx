import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <nav style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "20px" }}>Store</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <div style={{ padding: "20px" }}>
        {children}
      </div>
    </div>
  );
}

export default Layout;