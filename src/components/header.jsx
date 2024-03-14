import "../sass/header.scss";
import image1 from "../assets/hero1.jpg";
import image2 from "../assets/hero3.jpg";
import Banner from "./elements/Banner";

const HeaderComponent = () => {
  return (
    <div className="container-header" id="hero-section">
      <div
        className="carousel slide carousel-fade carousel-section "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="img-carousel " alt="slide 1" />
          </div>
          {/* <script
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></script>
          <div
            className="elfsight-app-53d34201-5890-4b38-85fd-f4b081f185f0"
            data-elfsight-app-lazy
          ></div> */}
          <div className="carousel-item">
            <img src={image2} className="img-carousel" alt="slide 2" />
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default HeaderComponent;
