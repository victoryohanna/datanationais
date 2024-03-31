import { Tabs, Tab } from "react-bootstrap";
import { excelBeginnerCourses, excelAdvanceCourses } from "../courses";

const Excel = () => {
  return (
    <div className="modules">
      <div className="course-overview">
        <h6>EXCEL FOR DATA ANALYSIS</h6>
        <Tabs defaultActiveKey="#1" className="mb-3">
          <Tab eventKey="#1" title="Level 1">
            {excelBeginnerCourses.map((course, i) => {
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
                      <h6>{course.title}</h6>
                    </button>
                  </p>
                  <div className="collapse" id={course.dataId}>
                    <div className=" pp">
                      {course.topic.map((item, i) => {
                        return (
                          <div key={i}>
                            <h6>{item.name}</h6>
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
          <Tab eventKey="#2" title="Level 2">
            {excelAdvanceCourses.map((course, i) => {
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
                      <h6>{course.title}</h6>
                    </button>
                  </p>
                  <div className="collapse" id={course.dataId}>
                    <div className=" pp">
                      {course.topic.map((item, i) => {
                        return (
                          <div key={i}>
                            <h6>{item.name}</h6>
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

export default Excel;
