import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper teal darken-2 px1">
      <a href="_" className="brand-logo">
        Tasks manager in TypeScript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">ALL TASKS</NavLink>
          {/* <a href="/">ALL TASKS</a> */}
        </li>
        <li>
          <NavLink to="/about">INFO</NavLink>
          {/* <a href="/">INFO</a> */}
        </li>
      </ul>
    </div>
  </nav>
);
