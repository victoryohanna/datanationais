import { Link } from "react-scroll";
import brand from "../assets/logo1.jpg";

import "../sass/navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="container-fluid navbar-wrapper">
        <nav className="navbar navbar-expand-lg navbar-body">
          <div className="container-fluid">
            <div className="navbar-brand">
              <img src={brand} alt="brand"  />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="hero-section"
                    className="nav-link "
                    aria-current="page"
                    activeClass="active"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
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
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
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
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
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
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
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
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
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
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                  >
                    Clients
                  </Link>
                </li>
              </ul>
              <div className="button-section">
                <button
                  type="button"
                  data-bs-toggle="modal1"
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
