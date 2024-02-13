import "../sass/services.scss";
import { Link } from "react-router-dom";
import { IoAnalytics } from "react-icons/io5";
import { GiArtificialIntelligence, GiArchiveResearch } from "react-icons/gi";
import { SiJirasoftware } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";

import RegisterCourse from "./common/register";

const Services = () => {
  return (
    <div className="services-wrapper" id="services-section">
      <div className="container services-container">
        <div className="header-text">
          <h1>Our Services</h1>
          <span>
            At DataNationIAS, we understand that navigating the complexities of
            today's business landscape requires more than just expertise; we are
            here to provide strategic insight and innovation in the following
            fields:
          </span>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="data-analytic">
              <div className="caption">
                <div>
                  <div className="img-container">
                    <IoAnalytics />
                  </div>
                </div>
                <h4>Data Analytics</h4>
              </div>
              <p>
                Leverage the full potential of your data through our advanced
                analytics and visualization services. From identifying trends to
                uncovering hidden patterns, we turn complex datasets into clear,
                insightful visuals that drive strategic decision-making.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="services/data-analytics">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="research-section">
              <div className="caption">
                <div>
                  <div className="img-container">
                    <GiArtificialIntelligence />
                  </div>
                </div>
                <h4>Business Intelligence</h4>
              </div>

              <p>
                Stay ahead of the curve with our predictive analytics services.
                Our models utilize machine learning algorithms to forecast
                future trends, helping you anticipate market shifts, customer
                behavior, and operational needs.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="services/business-intelligence">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="research-section">
              <div className="caption">
                <div>
                  <div className="img-container">
                    <GiArchiveResearch />
                  </div>
                </div>
                <h4>Academic Research</h4>
              </div>

              <p>
                We believe that the most profound discoveries often occur at the
                intersections of different disciplines. Our researchers
                collaborate across fields to approach complex issues from
                multiple perspectives.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="services/research">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="software_dev-section">
              <div className="caption">
                <div>
                  <div className="img-container">
                    <SiJirasoftware />
                  </div>
                </div>
                <h4>Software Development</h4>
              </div>

              <p>
                Elevate your online presence with our web and mobile app
                development expertise. We create responsive, intuitive, and
                engaging applications that resonate with your target audience.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="services/web-design">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="training-section">
              <div className="caption">
                <div>
                  <div className="img-container">
                    <IoIosPeople />
                  </div>
                </div>
                <h4>Training</h4>
              </div>

              <p>
                We are dedicated to pushing the boundaries of knowledge,
                fostering intellectual curiosity, and addressing the critical
                challenges of our time through rigorous training.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="services/training">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="research-section">
              <div className="caption">
                <div>
                  <div className="img-container">
                    <FaHandshake />
                  </div>
                </div>
                <h4>Consultancy</h4>
              </div>

              <p>
                Unlock the full potential of your business with our strategic
                consulting services. From market analysis to business planning,
                our experts collaborate with you to develop tailored strategies
                that drive growth and sustainability.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="services/research">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <RegisterCourse />
      </div>
    </div>
  );
};

export default Services;
