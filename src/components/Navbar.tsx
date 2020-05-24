import React from "react";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="_" className="brand-logo">
        React + TypeScript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="/">ALL TASKS</a>
        </li>
        <li>
          <a href="/">INFO</a>
        </li>
      </ul>
    </div>
  </nav>
);
