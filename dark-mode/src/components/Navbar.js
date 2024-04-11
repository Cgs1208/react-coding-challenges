import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../theme-context";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div>
        <Link to="/">Homepage</Link>
        <Link to="about">About</Link>
        <Link to="blog">Blog</Link>
      </div>
      <div className="mode-switch">
        <label>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          {theme === "dark" ? "Dark" : "Light"}
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
