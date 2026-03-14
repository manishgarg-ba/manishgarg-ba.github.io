import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="container navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="Manish Garg Logo" />
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/writing">Writing</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
