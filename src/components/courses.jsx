import "../sass/courses.scss";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";

import courses from "./elements/services";

const Courses = () => {
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
                <h4>Course List</h4>
                <span>Data Analytics</span>
                <ul>
                  <Link to="/">
                    <li>Statistical Modelling</li>
                  </Link>
                  <Link to="/">
                    <li>Statistical Packages</li>
                  </Link>
                  <Link to="/"> 
                    <li>R & Python Programming</li>
                  </Link>
                </ul>
                <span>Web Development</span>
                <ul>
                  <Link to="/">
                    <li>Frontend</li>
                  </Link>
                  <Link to="/"> 
                  <li>Backend</li>
                  </Link>
                  <Link to="/"> <li>Full-Stack</li></Link>
                </ul>
                <span>Android & IOS Application</span>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="modules">
                <div className="course-overview">
                  <h4>Course Overview</h4>
                  <p>
                    Our comprehensive hands-on step-by-step training program is
                    here to equip you with the skills you need to thrive in this
                    ever-evolving industry. You will learn industry best
                    practices from our world class experienced instructors who
                    are passionate about sharing their knowledge.
                  </p>
                  <p>
                    Theories are important, but practice makes perfect. With us,
                    you'll work on exciting projects that simulate real-world
                    scenarios, developing robust portfolio to showcase your new
                    found career.
                  </p>
                  <Tabs defaultActiveKey="#1" className="mb-3">
                    <Tab eventKey="#1" title="Beginner">
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
                            Introduction to Web Development
                          </button>
                        </p>
                        <div className="collapse" id="collapse1">
                          <div className=" pp">
                            <ul>
                              <li>What is web development?</li>
                              <li>
                                Overview of front-end vs back-end development
                              </li>
                              <li>Introduction to HTML, CSS, and JavaScript</li>
                              <li>
                                Setting up a development environment (text
                                editor, browser, etc.)
                              </li>
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
                            HTML Fundamentals
                          </button>
                        </p>
                        <div className="collapse" id="collapse2">
                          <div className=" pp">
                            <ul>
                              <li>
                                Understanding the structure of an HTML document
                              </li>
                              <li>HTML tags and elements</li>
                              <li>
                                Text formatting and basic styling with CSS
                              </li>
                              <li>Creating hyperlinks and navigation</li>
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
                            CSS Styling
                          </button>
                        </p>
                        <div className="collapse" id="collapse3">
                          <div className=" pp">
                            <ul>
                              <li>Introduction to CSS syntax and selectors</li>
                              <li>Applying styles to HTML elements</li>
                              <li>Cascading and inheritance</li>
                              <li>Layout and positioning techniques</li>
                              <li>
                                Working with responsive design and media queries
                              </li>
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
                            JavaScript Basics
                          </button>
                        </p>
                        <div className="collapse" id="collapse4">
                          <div className=" pp">
                            <ul>
                              <li>
                                Introduction to JavaScript and its role in web
                                development
                              </li>
                              <li>Variables, data types, and operators</li>
                              <li>Conditional statements and loops</li>
                              <li>Functions and scope</li>
                              <li>DOM manipulation and event handling</li>
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
                            Advanced HTML and CSS
                          </button>
                        </p>
                        <div className="collapse" id="collapse1">
                          <div className=" pp">
                            <ul>
                              <li>
                                Semantic HTML5 elements and their significance
                              </li>
                              <li>
                                Working with forms, input validation, and HTML5
                                APIs
                              </li>
                              <li>
                                CSS preprocessors (e.g., SASS, LESS) and their
                                features
                              </li>
                              <li>
                                CSS frameworks (e.g., Bootstrap, Foundation) and
                                their usage
                              </li>
                              <li>
                                Introduction to CSS grid and flexbox for modern
                                layouts
                              </li>
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
                            JavaScript and the Browser
                          </button>
                        </p>
                        <div className="collapse" id="collapse2">
                          <div className=" pp">
                            <ul>
                              <li>
                                The Document Object Model (DOM) and its
                                relationship with JavaScript
                              </li>
                              <li>
                                Accessing and manipulating DOM elements
                                dynamically
                              </li>
                              <li>Handling events and event delegation</li>
                              <li>
                                Asynchronous programming with callbacks,
                                promises, and async/await
                              </li>
                              <li>
                                Introduction to AJAX and working with JSON data
                              </li>
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
                            Frontend Frameworks and Libraries
                          </button>
                        </p>
                        <div className="collapse" id="collapse3">
                          <div className=" pp">
                            <ul>
                              <li>
                                Introduction to popular frontend frameworks
                                (e.g., React, Vue.js)
                              </li>
                              <li>
                                Building components and managing state in
                                frontend frameworks
                              </li>
                              <li>
                                Introduction to component-based architecture
                              </li>
                              <li>
                                Working with frontend libraries and packages
                                (e.g., jQuery)
                              </li>
                              <li>
                                Introduction to module bundlers (e.g., Webpack,
                                Parcel) and task runners (e.g., Gulp, Grunt)
                              </li>
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
                            Web Application Deployment and Optimization
                          </button>
                        </p>
                        <div className="collapse" id="collapse4">
                          <div className=" pp">
                            <ul>
                              <li>
                                Overview of web hosting and deployment options
                              </li>
                              <li>
                                Version control with Git and collaboration
                                workflows (e.g., GitHub)
                              </li>
                              <li>
                                Optimizing frontend assets (e.g., minification,
                                concatenation)
                              </li>
                              <li>
                                Introduction to caching, CDNs, and performance
                                optimization strategies
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses; 
