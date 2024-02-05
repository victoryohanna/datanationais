import { Tabs, Tab } from "react-bootstrap";
import {
  powerBiBeginnerCourse,
  powerBiIntermediateCourse,
  powerBiAdvancedCourse,
} from "../courses";

const PowerBI = () => {
  return (
    <div className="modules">
      <div className="course-overview">
        <h5>POWER BI FOR DATA VISUALIZATION</h5>

        <Tabs defaultActiveKey="#1" className="mb-3">
          <Tab eventKey="#1" title="Beginner Level">
            {powerBiBeginnerCourse.map((course, i) => {
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
          <Tab eventKey="#2" title="Intermediate Level">
            {powerBiIntermediateCourse.map((course, i) => {
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
          <Tab eventKey="#3" title="Advanced Level">
            {powerBiAdvancedCourse.map((course, i) => {
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
        </Tabs>
      </div>
    </div>
  );
};

export default PowerBI;
