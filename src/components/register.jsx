import "../sass/register.scss";
const RegisterCourse = () => {
  return (
    <div
      className="modal fade"
      id="regModal"
      tabindex="-1"
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
            <form>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input type="text" className="form-control " id="fullName" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input type="text" className="form-control " id="phoneNumber" />
              </div>
              <div className="mb-3">
                <label htmlFor="course" className="form-label">
                  Course
                </label>
                <select className="form-select " aria-label="Default select ">
                  <option>Select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCourse;
