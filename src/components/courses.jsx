import "../sass/courses.scss";
import { Link } from "react-router-dom";

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
                    <Link to="/"><li>Statistical Modelling</li></Link>
                  <Link><li>Statistical Packages</li></Link>
                  <Link><li>R & Python Programming</li></Link>
                 
                </ul>
                <span>Web Development</span>
                <ul>
                  <li>Statistical Modelling</li>
                  <li>Statistical Packages</li>
                  <li>R & Python Programming</li>
                
                </ul>
                <span>Android & IOS Application</span>
                <ul>
                  <li>Statistical Modelling</li>
                  <li>Statistical Packages</li>
                  <li>R & Python Programming</li>
                 
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="modules">
                <div className="course-overview">
                  <h4>Course Overview</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi debitis recusandae deleniti ab delectus, nisi, minus
                    blanditiis nesciunt iusto quae, exercitationem distinctio
                    provident possimus obcaecati officiis dolore vero cupiditate
                    enim?
                  </p>
                  <p>
                    <button
                      className="btn-collapse"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      HTML
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample">
                    <div className=" pp">
                      Some placeholder content for the collapse component. This
                      panel is hidden by default but revealed when the user
                      activates the relevant trigger.
                    </div>
                  </div>
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
