import { Tabs, Tab } from "react-bootstrap";
import { excelCourses } from "../courses";

const Excel = () => {
  return (
    <div className="modules">
      <div className="course-overview">
        <h5>EXCEL FOR DATA ANALYSIS</h5>
        <Tabs defaultActiveKey="#1" className="mb-3">
          <Tab eventKey="#1" title="Beginner Level">
            {excelCourses.map((course, i) => {
              return (
                <div className="collapse-section1" key={i}>
                  <p>
                    <button
                      className="btn-collapse"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={course.datatarget}
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <h5>{course.title}</h5>
                    </button>
                  </p>
                  <div className="collapse" id={course.dataId}>
                    <div className=" pp">
                      {course.topic.map((item, i) => {
                        return (
                          <div key={i}>
                            <h5>{item.name}</h5>
                            <ul>
                              {item.subTopics.map((item, i) => {
                                return <li key={i}>{item}</li>;
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
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

export default Excel;
