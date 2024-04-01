import { Link } from "react-router-dom";
import brand from "../assets/logo1.jpg";

import "../sass/navbar.scss";
import RegisterCourse from "./common/register";

const NavLinks = () => {
  return (
    <div className="main-wrapper">
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
              <ul className="navbar-nav me-auto mb-2">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </span>
                  <ul
                    className="dropdown-menu listmenu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/services/data-analytics"
                      >
                        Data Analytics
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/services/business-intelligence"
                      >
                        Business Intelligence
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/services/research">
                        Academic Research
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services/web-design">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/services/training">
                        Training
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/services/consultancy"
                      >
                        Consultancy
                      </Link>
                    </li>
                  </ul>
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
      <RegisterCourse />
    </div>
  );
};

export default NavLinks;
