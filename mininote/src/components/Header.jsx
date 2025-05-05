import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeProvider";

function Header() {
  const { isDark, toggleDark } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/add">Add Note</Link>
      <button onClick={toggleDark} className="button">
        {isDark ? "Light" : "Dark"} Mode
      </button>
    </nav>
  );
}

export default Header;
