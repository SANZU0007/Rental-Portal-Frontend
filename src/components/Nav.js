import React from "react";
import { Link } from "react-router-dom";

import DropdownButton from 'react-bootstrap/DropdownButton';
import { IoMdSearch } from 'react-icons/io';

import "./Nav.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2 style={{ color: "red", padding: "5px" }}>Rental Portal</h2>
      <div id="search-bar2">
      <div class="dropdown">
  <button class="dropbtn"> <b>search</b> <IoMdSearch /></button>
  <div class="dropdown-content">
    <a href="/cars">Product A</a>
    <a href="/bikes">Product B</a>
    <a href="/login">Login & Reg</a>
  </div>
</div>


      </div>
      <Link to="/" className="link1">Home</Link>
      <Link to="/login" className="link3">Login</Link>
      <Link to="/about" className="link3">About</Link>
    </div>
  );
}

export default Navbar;
