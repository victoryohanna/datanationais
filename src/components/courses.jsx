import { useState } from "react";
// import { Link } from "react-router-dom";

import "../sass/courses.scss";

import Frontend from "./common/course/frontend";
import Backend from "./common/course/backend";
import FullStack from "./common/course/fullstack";
import RPython from "./common/course/pythonr";
import StatisticalModel from "./common/course/statsModel";
import StatisticalPackages from "./common/course/statsPakages";

const Courses = () => {
  const [component, setComponent] = useState("");

  const renderFrontend = () => {
    setComponent("forntend");
  };

  const renderBackend = () => {
    setComponent("backend");
  };

  const renderFullstack = () => {
    setComponent("fullstack");
  };

  const renderStatModel = () => {
    setComponent("stats-model");
  };

  const renderStatPackages = () => {
    setComponent("stats-packages");
  };

  const renderRPython = () => {
    setComponent("r-python");
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
              <div className="shedules mb-4">
                <h4>Time Schedule</h4>
                <span>Monday - Friday : 9am - 1pm</span> <br />
                <span>Saturday : 10am - 4pm</span> <br />
                <span>Duration : 8 weeks</span>
              </div>
              <div className="courses">
                {/* <h4>Course List</h4> */}
                <span>Data Analytics</span> <hr />
                <ul>
                  <li>
                    <button type="button" onClick={renderStatModel}>
                      Statistical Modelling
                    </button>
                  </li>

                  <li>
                    <button type="button" onClick={renderStatPackages}>
                      Statistical Packages
                    </button>
                  </li>

                  <li>
                    <button type="button" onClick={renderRPython}>
                      R & Python Programming
                    </button>
                  </li>
                </ul>
                <span>Web Development</span> <hr />
                <ul>
                  <li>
                    <button
                      type="button"
                      className="bt"
                      onClick={renderFrontend}
                    >
                      Frontend
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={renderBackend}>
                      Backend
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={renderFullstack}>
                      Full-Stack
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
              {component === "frontend" ? (
                <Frontend />
              ) : component === "backend" ? (
                <Backend />
              ) : component === "fullstack" ? (
                <FullStack />
              ) : component === "stats-model" ? (
                <StatisticalModel />
              ) : component === "stats-packages" ? (
                <StatisticalPackages />
              ) : component === "r-python" ? (
                <RPython />
              ) : (
                <StatisticalModel />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
