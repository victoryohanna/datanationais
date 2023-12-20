import { Tabs, Tab } from "react-bootstrap";

const StatisticalPackages = () => {
  return (
    <div className="modules">
      <div className="course-overview">
        <h4>Statistical Packages Course Overview</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          commodi a blanditiis veniam debitis voluptas, cumque iusto maxime?
          Cumque, numquam?
        </p>
        <p></p>
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
                    <li>Overview of front-end vs back-end development</li>
                    <li>Introduction to HTML, CSS, and JavaScript</li>
                    <li>
                      Setting up a development environment (text editor,
                      browser, etc.)
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
                    <li>Understanding the structure of an HTML document</li>
                    <li>HTML tags and elements</li>
                    <li>Text formatting and basic styling with CSS</li>
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
                    <li>Working with responsive design and media queries</li>
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
                      Introduction to JavaScript and its role in web development
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
                    <li>Semantic HTML5 elements and their significance</li>
                    <li>
                      Working with forms, input validation, and HTML5 APIs
                    </li>
                    <li>
                      CSS preprocessors (e.g., SASS, LESS) and their features
                    </li>
                    <li>
                      CSS frameworks (e.g., Bootstrap, Foundation) and their
                      usage
                    </li>
                    <li>
                      Introduction to CSS grid and flexbox for modern layouts
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
                      The Document Object Model (DOM) and its relationship with
                      JavaScript
                    </li>
                    <li>Accessing and manipulating DOM elements dynamically</li>
                    <li>Handling events and event delegation</li>
                    <li>
                      Asynchronous programming with callbacks, promises, and
                      async/await
                    </li>
                    <li>Introduction to AJAX and working with JSON data</li>
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
                  StatisticalPackages Frameworks and Libraries
                </button>
              </p>
              <div className="collapse" id="collapse3">
                <div className=" pp">
                  <ul>
                    <li>
                      Introduction to popular StatisticalPackages frameworks
                      (e.g., React, Vue.js)
                    </li>
                    <li>
                      Building components and managing state in
                      StatisticalPackages frameworks
                    </li>
                    <li>Introduction to component-based architecture</li>
                    <li>
                      Working with StatisticalPackages libraries and packages
                      (e.g., jQuery)
                    </li>
                    <li>
                      Introduction to module bundlers (e.g., Webpack, Parcel)
                      and task runners (e.g., Gulp, Grunt)
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
                    <li>Overview of web hosting and deployment options</li>
                    <li>
                      Version control with Git and collaboration workflows
                      (e.g., GitHub)
                    </li>
                    <li>
                      Optimizing StatisticalPackages assets (e.g., minification,
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
  );
};

export default StatisticalPackages;
