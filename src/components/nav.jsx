
import brand from "../assets/logo1.jpg";

import "../sass/navbar.scss";

const NavLinks = () => {
  return (
    <div className="nav-main">
      <div className="container-fluid navbar-wrapper">
        <nav className="navbar navbar-expand-lg navbar-body">
          <div className="container-fluid">
            <div className="navbar-brand">
              <img src={brand} alt="brand" style={{ width: "250px" }} />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ">
              <ul className="navbar-nav me-auto mb-2">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
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
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="/data-analytics">
                        Data Analytics
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/business-intelligence">
                        Business Intelligence
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="/research">
                        Academic Research
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/web-design">
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/training">
                        Training
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/consultancy">
                        Consultancy
                      </a>
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
    </div>
  );
};

export default NavLinks;
