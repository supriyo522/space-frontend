import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="nav">
      <div className="nav-center">METEORA</div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-right ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/orionis">Orionis</Link>
        <Link to="/etheron">Etheron</Link>
        <Link to="/theronix">Theronix</Link>
        <Link to="/lumenara">Lumenara</Link>
      </div>
    </nav>
  );
}
