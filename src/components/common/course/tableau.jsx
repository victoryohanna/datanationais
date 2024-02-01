import { Tabs, Tab } from "react-bootstrap";

const Tableau = () => {
  return (
    <div className="modules">
      <div className="course-overview">
        <h5>TABLEAU FOR DATA VISUALIZATION</h5>
        {/* <p>
          Welcome to the world of Applied Statistical Modeling! This course is
          designed to equip you with the essential skills and knowledge needed
          to analyze data, draw meaningful insights, and make informed decisions
          using statistical models. Whether you're a novice seeking an
          introduction to statistical concepts or a seasoned professional
          looking to enhance your modeling expertise, this course is tailored to
          cater to a diverse audience.
        </p> */}
        <p></p>
        <Tabs defaultActiveKey="#1" className="mb-3">
          <Tab eventKey="#1" title="Beginner Level">
            <div className="collapse-section1">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Foundations of Statistics
                </button>
              </p>
              <div className="collapse" id="collapse1">
                <div className=" pp">
                  <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collapse-section2">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Regression Analysis
                </button>
              </p>
              <div className="collapse" id="collapse2">
                <div className=" pp">
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collapse-section3">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Time Series Analysis
                </button>
              </p>
              <div className="collapse" id="collapse3">
                <div className=" pp">
                  <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collapse-section4">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Hypothesis Testing
                </button>
              </p>
              <div className="collapse" id="collapse4">
                <div className=" pp">
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="#2" title="Advanced">
            <div className="collapse-section1">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Classification and Clustering
                </button>
              </p>
              <div className="collapse" id="collapse1">
                <div className=" pp">
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collapse-section2">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Model Evaluation and Validation
                </button>
              </p>
              <div className="collapse" id="collapse2">
                <div className=" pp">
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collapse-section3">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Statistical Model Frameworks and Libraries
                </button>
              </p>
              <div className="collapse" id="collapse3">
                <div className=" pp">
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collapse-section4">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Introduction to Bayesian Statistics
                </button>
              </p>
              <div className="collapse" id="collapse4">
                <div className=" pp">
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Tableau;
