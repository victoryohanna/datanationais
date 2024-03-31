import { useState } from "react";
import "../../sass/register.scss";
import axios from "axios";

const course = [
  "Excel for Data Analysis",
  "SPSS for Data Analysis",
  "R programming for Data Analysis",
  "Python programming for Data Analysis",
  "Power BI for Data Visualization",
  "Taleau for Data Visualization",
  "Structured Query Language",
  "Web Development",
];

const RegisterCourse = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [courseName, setCourseName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let studentData = {
      regNo:"001",
      firstName,
      lastName,
      gender,
      email,
      phoneNumber,
      courseName,
    };

    await axios.post("http://localhost:4000", studentData).then((data) => {
      if(data){
        alert("Saved Successfully") 
        console.log(data);
      }else{
        alert("Not Successfull")
      }
      
    });
  };
  return (
    <div
      className="modal fade"
      id="regModal"
      tabIndex="-1"
      aria-labelledby="regModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="regModalLabel">
              Register
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      name="firstName"
                      id="firstName"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      name="lastName"
                      id="lastName"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="course" className="form-label">
                      Gender
                    </label>
                    <select
                      className="form-select"
                      name="course"
                      aria-label="Default select "
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option>Select</option>
                      <option>Female</option>
                      <option>Male</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      name="phoneNumber"
                      id="phoneNumber"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="mb-3">
                    <label htmlFor="course" className="form-label">
                      Course
                    </label>
                    <select
                      className="form-select"
                      name="course"
                      aria-label="Default select "
                      onChange={(e) => setCourseName(e.target.value)}
                    >
                      <option>Select</option>
                      {course.map((item, i) => {
                        return <option key={i}>{item}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>

              <div className="btn-submit">
                <button type="submit" className="btn ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCourse;
