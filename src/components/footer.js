import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
};
  return (
    <div className='footer_content'>

      <div className='row'>
        <div className='icons'>
          <FaFacebook className='icon' role='link' onClick={() => openInNewTab('https://github.com/MandalShreyasi')} />
          <FaLinkedin className='icon' role='link' onClick={() => openInNewTab('https://www.linkedin.com/in/shreyasi-mandal-47484623a')} />
          <FaGithub className='icon' role='link' onClick={() => openInNewTab('https://github.com/MandalShreyasi')}/>
         <FaInstagram className='icon' role='link' onClick={() => openInNewTab('https://github.com/MandalShreyasi')}/>
        </div>
      </div>
      <div className='row '>
        <nav>
          <ul className='footer-nav'>
            <li className="nav-item active">
              <Link to="/">Home</Link>
            </li>
            <li>|</li>
            <li className="nav-item ">
              <Link to="/allprojects">My Projects</Link>
            </li>
            <li>|</li>
            <li className="nav-item ">
              <Link to="/about">About Me</Link>
            </li>
            <li>|</li>
            <li className="nav-item ">
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='row'>
        <h6>Shreyasi Mandal ©️ 2023 All rights reserved.</h6>
      </div>
    </div>
  );
};

export default footer;
