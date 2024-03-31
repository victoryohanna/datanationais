import "../sass/header.scss";
import image1 from "../assets/hero1.jpg";
import image2 from "../assets/hero3.jpg";
import Banner from "./elements/Banner";

const HeaderComponent = () => {
  return (
    <div className="container-header" id="hero-section">
      <div
        className="carousel slide carousel-fade carousel-section "
        data-bs-ride="carousel" data-bs-interval="5000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="img-carousel " alt="slide 1" />
          </div>
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
