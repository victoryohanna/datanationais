// import { Link } from "react-router-dom";

export const altLinks = (
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
);