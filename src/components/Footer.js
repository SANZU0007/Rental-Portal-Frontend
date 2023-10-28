import React from "react";

import "./Footer.css";

import { GoRocket ,GoFileDirectoryFill} from "react-icons/go";
import {IoMdMail} from 'react-icons/io';
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://github.com/SANZU0007"
          target="_blank"
          rel="noopener noreferrer"
        >
        <GoFileDirectoryFill/>
        </a>
        <a
          href="https://www.linkedin.com/in/sanjay-m-sanjay-89688825a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMdMail/>
        </a>

        <a
          href="https://www.instagram.com/san.___j.__/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <GoRocket/>
        </a>
      </div>
      <p> &copy; 2023 SanjayWeb.com</p>
    </div>
  );
}

export default Footer;