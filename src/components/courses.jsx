import { useState } from "react";
// import { Link } from "react-router-dom";

import "../sass/courses.scss";

import Python from "./common/course/pythonr";
import Excel from "./common/course/excel";
import RProgramming from "./common/course/rProgramming";
import Tableau from "./common/course/tableau";
import Spss from "./common/course/spss";
import Sql from "./common/course/sql";
import PowerBI from "./common/course/powerBI";
import WebDevelopment from "./common/course/webDevelopment";

const Courses = () => {
  const [component, setComponent] = useState("");

  const renderExcel = () => {
    setComponent("excel");
  };
  const renderPowerBI = () => {
    setComponent("PowerBI");
  };
  const renderSql = () => {
    setComponent("sql");
  };
  const renderSpss = () => {
    setComponent("spss");
  };
  const renderTableau = () => {
    setComponent("tableau");
  };

  const renderRProgramming = () => {
    setComponent("rProgramming");
  };

  const renderRPython = () => {
    setComponent("python");
  };

  
  const renderWeb = () => {
    setComponent("web");
  };

  return (
    <div className="courses-wrapper" id="courses-section">
      <div className="container courses-container">
        <div className="header-text">
          <h1>Course Modules</h1>
        </div>
        <div className="course-body">
          <div className="row">
            <div className="col-md-4">
              {/* <div className="shedules mb-4">
                <h4>Time Schedule</h4>
                <span>Monday - Friday : 9am - 1pm</span> <br />
                <span>Saturday : 10am - 4pm</span> <br />
                <span>Duration : 8 weeks</span>
              </div> */}
              <div className="courses">
                <span>Data Analytics Courses</span> <hr />
                <ul>
                  <li>
                    <button type="button" onClick={renderExcel}>
                      Excel for Data Analysis
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={renderSpss}>
                      SPSS for Data Analysis
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={renderRProgramming}>
                      R programming for Data Analysis
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={renderRPython}>
                      Python programming for Data Analysis
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={renderPowerBI}>
                      Power BI for Data Visualization
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={renderTableau}>
                      Tableau for Data Visualization
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={renderSql}>
                      Structured Query Language
                    </button>
                  </li>
                </ul>
                <span>Web Design & Development</span> <hr />
                <ul>
                  <li>
                    <button
                      type="button"
                      className="bt"
                      onClick={renderWeb}
                    >
                      Web Development
                    </button>
                  </li>
                  
                </ul>
                {/* <span>Android & IOS Application</span> */}
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              {component === "web" ? (
                <WebDevelopment />
              ) : component === "excel" ? (
                <Excel />
              ) : component === "spss" ? (
                <Spss />
              ) : component === "tableau" ? (
                <Tableau />
              ) : component === "sql" ? (
                <Sql />
              ) : component === "PowerBI" ? (
                <PowerBI />
              ) : component === "rProgramming" ? (
                <RProgramming />
              ) : component === "python" ? (
                <Python />
              ) : (
                <Excel />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
