import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";


import slide1 from "../assets/images/dais1.png";
import slide2 from "../assets/images/dais2.png";
import slide3 from "../assets/images/dais3.png";

import Carousel from "react-bootstrap/Carousel";
import "../sass/herosection.scss";

function HeroSection() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className=" main-desktop" id="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Carousel fade indicators={false}>
              <Carousel.Item interval={3000}>
                <img src={slide1} alt="" />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img src={slide2} alt="" />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img src={slide3} alt="" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-6">
            <div className="title">
              <h2>Welcome to DataNation</h2>
              <span>Integrated & Analytics Services</span>
            </div>

            <p>
              We offer strategic consulting services to help businesses define
              their data strategy, developing roadmaps for data-driven
              transformation.
            </p>

            <p>
              Our Training Program is designed to equip you with the right skill
              and knowledge needed to excel in this rapidly growing industry.
              Whether you're a beginner looking to start a new career or a
              professional aiming to upgrade your skills, our comprehensive
              courses are tailored to meet your needs.
            </p>
            <div className="btn-max">
              <Link type="button" to="/" state={"about"} onClick={handleShow}>
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Choose Plan </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="modal-btn"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <div className="btn" style={{ background: "#004aad", width: 250 }}>
              <Link
                type="button"
                to="https://forms.gle/13BkGZco1tdGNVqg8"
                target="_blank"
                style={{ color: "#ffffff", fontSize: 22 }}
              >
                Discrete Plan
              </Link>
            </div>
            <div className="btn" style={{ background: "#004aad", width: 250 }}>
              <Link
                type="button"
                to="/retail"
                style={{ color: "#ffffff", fontSize: 22 }}
              >
                Retail Plan
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default HeroSection;
