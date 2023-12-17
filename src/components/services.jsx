import "../sass/services.scss";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import RegisterCourse from "./register";

const Services = () => {
  const navigate = useNavigate();

  const navigation = () => {
    navigate("/register");
  };
  return (
    <div className="services-wrapper" id="services-section">
      <div className="container services-container">
        <div className="header-text">
          <h1>Our Services</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. epellat id
            eos quos deleniti magni? Facilis, deserunt recusandae.
          </span>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="data-analytic">
              <h3>Data Analytics</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, perspiciatis placeat consectetur deserunt quae quos
                voluptatibus ipsa ipsum error eum optio atque in veritatis
                voluptas fuga doloremque rem distinctio illo.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="research-section">
              <h3>Business Intelligence</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                error non quae alias veniam ullam quod asperiores dolor! Ipsum
                praesentium neque eius quam, itaque veniam illo cum vitae quo
                quae.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="research-section">
              <h3>Academic Research</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                error non quae alias veniam ullam quod asperiores dolor! Ipsum
                praesentium neque eius quam, itaque veniam illo cum vitae quo
                quae.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="software_dev-section">
              <h3>Software Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi blanditiis, repellat, dicta id veniam illo excepturi
                enim pariatur vel accusantium, voluptatum asperiores? Sit
                cupiditate voluptate quos aperiam voluptates. Cupiditate,
                voluptatum.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="training-section">
              <h3>Training</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam praesentium atque dignissimos ipsum temporibus
                voluptatum reiciendis fugit dicta sequi quam doloribus ab
                corporis, nulla perferendis est aut molestias unde quo.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="research-section">
              <h3>Consultancy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                error non quae alias veniam ullam quod asperiores dolor! Ipsum
                praesentium neque eius quam, itaque veniam illo cum vitae quo
                quae.
              </p>
            </div>
          </div>
          <div className="apply-button">
            <button
              type="button"
              className="btn btn-apply"
              data-bs-toggle="modal"
              data-bs-target="#regModal"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <RegisterCourse />
    </div>
  );
};

export default Services;
