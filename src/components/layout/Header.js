import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-style">
      <h1>My List</h1>
      <Link className="link-style" to="/">
        Home
      </Link>
      |
      <Link className="link-style" to="/about">
        About
      </Link>
      <hr />
    </header>
  );
}

export default Header;
