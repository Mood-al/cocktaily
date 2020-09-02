import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import SearchInput from "./SearchInput";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const navHandeler = (e) => {
    setNav((prevNav) => !prevNav);
  };
  console.log(nav);
  return (
    <nav className="my-nav">
      <Link className="logo" to="/">
        cocktaily
      </Link>
      <SearchInput />
      <ul className={nav ? "active" : null}>
        <li>
          <Link to="/" onClick={() => setNav(true)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setNav(true)}>
            about
          </Link>
        </li>
      </ul>
      <div className="bars" onClick={navHandeler}>
        <i className="fas fa-stream"></i>
      </div>
    </nav>
  );
};

export default NavBar;
