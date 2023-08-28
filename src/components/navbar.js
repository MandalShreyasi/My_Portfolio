import React from 'react';
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg  navbar-light ">
          <div className="container">
            <a className="navbar-brand" href="/">SHREYASI <span>MANDAL</span></a>
            <div className="collapse navbar-collapse ">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item ">
                  <Link to="/allprojects">My Projects</Link>
                </li>
                <li className="nav-item ">
                  <Link to="/about">About</Link>
                </li>
                <li className="nav-item ">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default navbar;