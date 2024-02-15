
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
//import brand from "../assets/logo1.jpg";
import { Link } from "react-router-dom";

import "../sass/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-8 ">
            <div className="foot-note">
              <div className="d-flex ">
                <h4>Vision & Mission</h4>
              </div>
              <hr />
              <div className="vission_section">
                <h5>Vision Statement</h5>
                <p>
                  To empower students and professionals globally with the
                  necessary resources and guidance to succeed in their
                  educational and professional pursuits, and to be the leading
                  provider of end-to-end study abroad and immigration services.
                </p>
              </div>
              <div className="mission_section">
                <h5>Mission Statement</h5>
                <p>
                  Our mission is to facilitate and streamline the study abroad
                  and immigration process for our clients, from exam
                  registration to visa processing and beyond. We aim to provide
                  high-quality services and resources that enable students to
                  achieve their academic and career goals, and we strive to do
                  so with integrity, professionalism, and a commitment to
                  excellence. We are dedicated to making the study abroad
                  experience accessible to all, regardless of background or
                  circumstance, and to fostering a culture of diversity,
                  inclusivity, and global citizenship.
                </p>
              </div>
            </div>

            <div className="social-media">
              <ul>
                <li>
                  <a href="/">
                    <BsTwitter />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <BsFacebook />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <h4>Our Services</h4>
            <hr />
            <ul>
              <li>
                <Link to="/services/data-analytics">Data Analytics</Link>
              </li>
              <li>
                <Link to="/services/business-intelligence">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link to="/services/research">Academic Research</Link>
              </li>
              <li>
                <Link to="/services/web-design">Web Development</Link>
              </li>
              <li>
                <Link to="/services/training">Training</Link>
              </li>
              <li>
                <Link to="/services/consultancy">Consultancy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright d-flex justify-content-center">
        <span>&copy; Copyright 2024 All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
