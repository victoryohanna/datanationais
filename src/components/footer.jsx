
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
                <h5>Vision Statement:</h5>
                <p>
                  Our vision is to transform the use of data for academic
                  exploration and business innovation on a global scale.
                </p>
              </div>
              <div className="mission_section">
                <h5>Mission Statement:</h5>
                <p>
                  Our mission is to empower individuals and businesses to fully
                  utilize data for significant change and long-term success by
                  providing them with actionable intelligence and
                  innovative strategies.
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
        <span>DataNation_IAS &copy; 2024. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
