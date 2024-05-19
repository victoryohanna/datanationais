// import { Link } from "react-router-dom";
import "animate.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="header-text">
        <h1>
          Welcome to <span>DataNation</span>
        </h1>
        <h5>Integrated & Analytics Services</h5>
      </div>
      <div className="description">
        <p>
          We offer strategic consulting services to help businesses define their
          data strategy, developing roadmaps for data-driven transformation.
        </p>
      </div>
      {/* <div className="bootcamp">
        <Link to="/bootcamp" type="button">
          Join Our Bootcamp
        </Link>
      </div> */}
      {/* <div className="bootcamp-date ">
        <p className="">
          Application End: 30/04/2024
        </p>
        <p>Bootcamp Commence: 01/05/2024</p>
      </div> */}
    </div>
  );
};

export default Banner;
