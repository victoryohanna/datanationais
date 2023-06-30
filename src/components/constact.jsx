import "../sass/contactUs.scss";

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <div className="container">
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
                  <div class="mb-3">
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
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="address">
              <p>60, Iledu Road, Tanke Bubu,</p>
              <span>Ilorin South LGA, Ilorin Kwara State</span>
            </div>
            <div className="map-section">
                <p>Map</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
