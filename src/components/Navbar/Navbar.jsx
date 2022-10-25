import React from "react";
import "./Navbar.css";
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="n-left">
        <div className="n-name">Madeha Rawshon.</div>
      </div>

      <div className="n-right">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
        <button className="button">Reach Out</button>
      </div>
    </div>
  );
};

export default Navbar;
