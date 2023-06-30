import { Link } from "react-router-dom";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
// import { logo } from "./files/images";

import "../sass/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-section">
        <img src="" className="footer-logo" alt="..." />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 quick-links">
            <h4>Our Services</h4>
            <hr />
            <ul>
              <li>
                <Link to="/">Admission Processing</Link>
              </li>
              <li>
                <Link to="/">Personal Statements</Link>
              </li>
              <li>
                <Link to="/">Score Reporting</Link>
              </li>
              <li>
                <Link to="/">Proof of Fund</Link>
              </li>
              <li>
                <Link to="/">Passport Processing</Link>
              </li>
              <li>
                <Link to="/">Visa Processing</Link>
              </li>
              <li>
                <Link to='/'>Study Abroad Packages</Link>
              </li>
              <li>
                <Link to='/'>Consultancy</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 quick-links">
            <h4>Contact Us</h4>
            <hr />
            <ul>
              <li>
                Address:{" "}
                <p>
                  Development & Innovation Centre No 23, Ven Adefila Street, Off
                  Lajorin Road, G.R.A Ilorin, Kwara State, Nigeria.
                </p>
              </li>
              <li>Phone Number: +23408090901234</li> 
              <li>Email Address: info@exams.com</li>
            </ul>
          </div>
          <div className="col-md-6 ">
            <div className="foot-note">
              <div className="d-flex justify-content-center">
                <h4>Vision & Mission</h4>
              </div>
              <hr />
              <div className="vission_section">
                <h5>Vision Statement</h5>
                <p>
                  “To empower students and professionals globally with the
                  necessary resources and guidance to succeed in their
                  educational and professional pursuits, and to be the leading
                  provider of end-to-end study abroad and immigration services.”
                </p>
              </div>
              <div className="mission_section">
                <h5>Mission Statement</h5>
                <p>
                  “Our mission is to facilitate and streamline the study abroad
                  and immigration process for our clients, from exam
                  registration to visa processing and beyond. We aim to provide
                  high-quality services and resources that enable students to
                  achieve their academic and career goals, and we strive to do
                  so with integrity, professionalism, and a commitment to
                  excellence. We are dedicated to making the study abroad
                  experience accessible to all, regardless of background or
                  circumstance, and to fostering a culture of diversity,
                  inclusivity, and global citizenship.”
                </p>
              </div>
            </div>

            <div className="social-media">
              <ul>
                <li>
                  <Link to="/">
                    <BsTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <BsInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <BsFacebook />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright d-flex justify-content-center">
        <span>&copy; Copyright 2023 All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
