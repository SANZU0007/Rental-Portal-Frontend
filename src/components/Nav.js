import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { IoMdSearch } from 'react-icons/io';

import "./Nav.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2 style={{ color: "red", padding: "5px" }}>Rental Portal</h2>
      <div id="search-bar2">
      <DropdownButton id="dropdown-basic-button" title="Search">
  <Dropdown.Item href="http://localhost:3000/cars" style={{ border: 'none' }}>
    <p id="box-model" style={{ border: 'none' }}>Product A</p>
  </Dropdown.Item>
  <Dropdown.Item href="http://localhost:3000/bikes" style={{ border: 'none' }}>
    <p id="box-model">Product B</p>
  </Dropdown.Item>
  <Dropdown.Item href="http://localhost:3000/login" style={{ border: 'none' }}>
    <p id="box-model">Login & Reg</p>
  </Dropdown.Item>
</DropdownButton>

      </div>
      <Link to="/" className="link1">Home</Link>
      <Link to="/login" className="link3">Login</Link>
      <Link to="/about" className="link3">About</Link>
    </div>
  );
}

export default Navbar;
