import { Link } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";
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
                  <Link to="/" className="nav-link " aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link " aria-current="page">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    role="button"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link ">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link " aria-current="page">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
