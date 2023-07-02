import { Link } from "react-scroll";
import brand from "../assets/logo1.jpg";

import "../sass/navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="container-fluid navbar-wrapper">
        <nav className=" container navbar navbar-expand-lg navbar-body">
          <div className="container-fluid">
            <div className="navbar-brand">
              <img src={brand} alt="brand" />
            </div>
            <button
              className="navbar-toggler fff"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon toggle-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse nav-collapse "
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="hero-section"
                    className="nav-link "
                    aria-current="page"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-120}
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
                    offset={-118}
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
                    offset={-120}
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
                    offset={-118}
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
                    offset={-118}
                    duration={500}
                  >
                    Contact
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
                    offset={-118}
                    duration={500}
                  >
                    Our Clients
                  </Link>
                </li>
              </ul>
              <div className="button-section">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#regModal"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
