import React from 'react'
import { Link } from 'react-scroll';

export const defaultLinks =
  (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link
          to="hero-section"
          className="nav-link "
          aria-current="page"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="about-section"
          className="nav-link "
          aria-current="page"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="services-section"
          className="nav-link "
          aria-current="page"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="courses-section"
          className="nav-link "
          aria-current="page"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          Course Modules
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="contact-section"
          className="nav-link "
          aria-current="page"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          Contact Us
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="clients-section"
          className="nav-link "
          aria-current="page"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          Clients
        </Link>
      </li>
    </ul>
  );

