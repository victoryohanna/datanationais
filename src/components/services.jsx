import "../sass/services.scss";
import { Link } from "react-router-dom";


const Services = () => {
  return (
    <div className="services-wrapper" id="services-section">
      <div className="container services-container">
        <div className="header-text">
          <h1>Our Services</h1>
          <span>
            At DataNationIAS, we understand that navigating the complexities of
            today's business landscape requires more than just expertise; we are here to provide 
            strategic insight and innovation in the following fields:
          </span>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="data-analytic">
              {/* <Link to="/data-analytics"> */}
              <h3>Data Analytics</h3>
              <p>
                Leverage the full potential of your data through our advanced
                analytics and visualization services. From identifying trends to
                uncovering hidden patterns, we turn complex datasets into clear,
                insightful visuals that drive strategic decision-making.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="/">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="research-section">
              {/* <Link to="/business-intelligence"> */}
              <h3>Business Intelligence</h3>
              <p>
                Stay ahead of the curve with our predictive analytics services.
                Our models utilize machine learning algorithms to forecast
                future trends, helping you anticipate market shifts, customer
                behavior, and operational needs.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="/">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="research-section">
              {/* <Link to="/research"> */}
              <h3>Academic Research</h3>
              <p>
                We believe that the most profound discoveries often occur at the
                intersections of different disciplines. Our researchers
                collaborate across fields to approach complex issues from
                multiple perspectives.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="/">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="software_dev-section">
              {/* <Link to="/web-design"> */}
              <h3>Software Development</h3>
              <p>
                Elevate your online presence with our web and mobile app
                development expertise. We create responsive, intuitive, and
                engaging applications that resonate with your target audience.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="/">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="training-section">
              {/* <Link to="/training"> */}
              <h3>Training</h3>
              <p>
                We are dedicated to pushing the boundaries of knowledge,
                fostering intellectual curiosity, and addressing the critical
                challenges of our time through rigorous training.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="/">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="research-section">
              {/* <Link to="/consultancy"> */}
              <h3>Consultancy</h3>
              <p>
                Unlock the full potential of your business with our strategic
                consulting services. From market analysis to business planning,
                our experts collaborate with you to develop tailored strategies
                that drive growth and sustainability.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="/">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
