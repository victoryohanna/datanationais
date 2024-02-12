
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import brand from "../assets/logo1.jpg";

import "../sass/footer.scss";

const Footer = () => {
  return (
    <div className="footer" id="footer-section">
      <div className="logo-section">
        <img src={brand} className="footer-logo" alt="..." />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Our Services</h4>
            <hr />
            <ul>
              <li>
                <a href="/data-analytics">Data Analytics</a>
              </li>
              <li>
                <a href="/business-intelligence">Business Intelligence</a>
              </li>
              <li>
                <a href="/research">Academic Research</a>
              </li>
              <li>
                <a href="/web-design">Web Development</a>
              </li>
              <li>
                <a href="/training">Training</a>
              </li>
              <li>
                <a href="/consultancy">Consultancy</a>
              </li>
            </ul>
          </div>
          {/* <div className="col-md-3 quick-as">
            <h4>Quick as</h4>
            <hr />
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              
            </ul>
          </div> */}
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
        </div>
      </div>
      <div className="copyright d-flex justify-content-center">
        <span>&copy; Copyright 2024 All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
