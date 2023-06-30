import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="header-text">
        <h1>Welcome to <span>DataNation</span></h1>
        <h5>Integrated & Analytics Services</h5>
      </div>
      <div className="description">
        <p>
          We offer strategic consulting services to help businesses define their
          data strategy, developing roadmaps for data-driven transformation.
        </p>
      </div>
      <div className="link-section">
      <Link to="/">Learn more</Link>
      </div>
    </div>
  );
};

export default Banner;
