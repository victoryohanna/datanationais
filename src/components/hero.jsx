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
          <h3>Training Outline</h3>
        </Modal.Header>

        <Modal.Body
          style={{
            maxHeight: "calc(100vh - 210px)",
            overflowY: "auto",
          }}
        >
          <div className="modal-btn">
            <div>
              <p>
                DataNation Integrated Analytics Service present a four month
                Data Analytics training with a full two phase well loaded
                package and content to become an analyst, the class is schedule
                to holding on every Friday and Saturday for 3hrs.
              </p>
              <p>
                Understand Data Analysis 📊📈 and Become an analyst in, Excel,
                Python, Power BI, SQL and below is what you are getting for just
                small token, register with us today at Datanation Integrated
                Analytics service because we have the best hand that teach you.
              </p>
              <p>
                Application is fully open throughout the Month of July and
                Commence date will communicated via same website and our premium
                whatApp group
              </p>
            </div>
            <div>
              <h6>FIRST PHASE (2 MONTHS)</h6>
              <div>
                <h6>1. Understand Data</h6>
                <ul>
                  <li>Database basics </li>
                  <li>Keys (PK and FK)</li>
                  <li>Cardinality </li>
                  <li>ER Diagrams </li>
                  <li>Normalization basics </li>
                  <li>De-normalization </li>
                  <li>OLAP vs OLTP </li>
                  <li>Databases vs Data warehouses vs Data lakes </li>
                  <li>Cloud vs on-premise </li>
                  <li>ETL and data modeling</li>
                </ul>
              </div>

              <div>
                <h6>2. Understanding Data Analysis</h6>
                <ul>
                  <li>Importance of Data Analysis</li>
                  <li>
                    Different Types of Data Analysis (Qualitative and
                    Quantitative)
                  </li>
                  <li>Understanding Quantitative Data (the course focus)</li>
                  <li>Sources and Methods of Data Collection</li>
                  <li>Variable and Types</li>
                  <li>Data Types</li>
                  <li>Scale of Measurement</li>
                </ul>
              </div>
              <div>
                <h6>3. Learn Excel </h6>
                <ul>
                  <li>Understanding Workbook and Worksheet</li>
                  <li>Data Entry and Basic Formatting</li>
                  <li>Simple Arithmetic Formulas and Functions</li>
                  <li>Creating and Managing Tables</li>
                  <li>Pivot Tables</li>
                  <li>Data cleaning techniques</li>
                  <li>Power Query</li>
                  <li>Conditional formatting</li>
                  <li>Data Visualization</li>
                  <li>Data validation </li>
                  <li>Creating an interactive dashboard</li>
                  <li>Introduction to Statistical Analysis(Using Toolpak)</li>
                </ul>
              </div>
            </div>
            <div>
              <h6>SECOND SEMESTER (2 MONTHS)</h6>
              <div>
                <h6>4. Learn SQL </h6>
                <ul>
                  <li>Overview of Databases</li>
                  <li>Types of Database Management Systems (DBMS)</li>
                  <li>Introduction to SQL</li>
                  <li>Basics SQL commands (SELECT, INSERT, UPDATE, DELETE)</li>
                  <li>Sorting and Limiting Results</li>
                  <li>Conditions and Logical Operators</li>
                  <li>Aggregations with GROUP BY and HAVING</li>
                  <li>Joins and Relationships (INNER, LEFT, FULL OUTER)</li>
                  <li>Common table expressions (CTEs)</li>
                  <li>Sub queries </li>
                  <li>
                    Introduction to Window Functions (ROW_NUMBER(), RANK(),
                    DENSE_RANK())
                  </li>
                </ul>
              </div>
              <div>
                <h6>5. Learn a BI Tool </h6>
                <ul>
                  <li>
                    Introduction to Business Intelligence (BI) - the umbrella
                    term{" "}
                  </li>
                  <li>Getting started Power BI, or Tableau </li>
                  <li>Getting Started with Power BI Desktop</li>
                  <li>Data Modeling in Power BI</li>
                  <li>
                    Using DAX (Data Analysis Expressions) or equivalent
                    functions{" "}
                  </li>
                  <li>Connecting to various data sources </li>
                  <li>Creating Relationships Data Wrangling with Pandas</li>
                  <li>Introduction to Power BI Visualizations</li>
                  <li>Building interactive dashboards </li>
                  <li>Creating data visualizations </li>
                  <li>Advanced Query Editor Functions</li>
                  <li>Sharing and collaborating on reports </li>
                </ul>
              </div>
              <div>
                <h6>6. Learn Python for Data Science </h6>
                <ul>
                  <li>Basic syntax and data types</li>
                  <li>Setting Up the Python Data Science Environment</li>
                  <li>NumPy Basics</li>
                  <li>Pandas Introduction </li>
                  <li>Handling Missing Data</li>
                  <li>Data manipulation with Pandas </li>
                  <li>Data visualization with Matplotlib and Seaborn</li>
                  <li>Writing and using functions for EDA</li>
                  <li>Exploratory Data Analysis </li>
                </ul>
              </div>
            </div>
            <div>
              <h5>
                <b>Registration Information:</b>
              </h5>
              <h6>
                <b>Physical Class:</b> <span>100,000 NGN</span>
              </h6>

              <h6>
                <b>Virtual Class:</b>
                <span>150,000 NGN</span>
              </h6>

              <h6>
                <b>Registration Period:</b>
                <span> Now until August 2, 2024</span>
              </h6>
              <h6>
                <b>Classes Begin:</b> <span> First week of August 2024</span>
              </h6>
              <p>
                <b>Note:</b> An upfront payment of 70% of the total fee is
                required before the commencement of the first phase.
              </p>
            </div>

            <div className="btn" style={{ background: "#108fbf", width: 250 }}>
              <Link
                type="button"
                to="/"
                target="_blank"
                style={{ color: "#ffffff", fontSize: 22 }}
              >
                REGISTER NOW
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default HeroSection;
