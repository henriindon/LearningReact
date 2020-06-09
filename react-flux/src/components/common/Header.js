import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/nowhere" activeStyle={activeStyle}>
        No Where
      </NavLink>
    </nav>
  );
}

export default Header;
