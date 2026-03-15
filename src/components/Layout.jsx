import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>

      <nav className="navbar">
        <div className="container nav-links">
          <Link to="/">Store</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <div className="container">
        {children}
      </div>

    </div>
  );
}

export default Layout;