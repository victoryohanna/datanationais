import { useState } from "react";
import "../sass/register.scss";

const course = [
  "Data Analysis",
  "Web Development",
  "Android & IOS Application",
];

const RegisterCourse = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [courseName, setCourseName] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault()

    let data = {
      fullName,
      email,
      phoneNumber,
      courseName
    }

    console.log(data)
  }
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
              Course Registration
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
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control "
                  name="fullName"
                  id="fullName"
                  onChange={(e)=>setFullName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control "
                  name="phoneNumber"
                  id="phoneNumber"
                  onChange={(e)=>setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="course" className="form-label">
                  Course
                </label>
                <select
                  className="form-select"
                  name="course"
                  aria-label="Default select "
                  onChange={(e)=>setCourseName(e.target.value)}
                >
                  <option>Select</option>
                  {course.map((item, i) => {
                    return <option key={i}>{item}</option>;
                  })}
                </select>
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
