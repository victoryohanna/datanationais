import "../sass/contactUs.scss";
// import Map from "./elements/map";
// import location from './elements/location'

const ContactUs = () => {
  return (
    <div className="contact-wrapper" id="contact-section">
      <div className="container contact">
        <div className="header-text">
          <h1>Contact Us</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
            ipsa laboriosam? Sed aliquam reiciendis eligendi animi nam alias
            doloremque modi!
          </span>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="email">
              <p>datanation16@gmail.com</p>
              <div className="contact-form">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email address"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="button-section">
                    <button type="submit" >Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="address">
              <p>60, Iledu Road, Tanke Bubu, Ilorin South LGA, </p>
              <p>Ilorin Kwara State</p>
            </div>
            <div className="map-section">
                {/* <Map location={location} zoomLevel={15}/> */}
            </div>
          </div>
          <div className="col-md-3">
            <p>
              <span>Phone N0: </span>+2348134552628
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
