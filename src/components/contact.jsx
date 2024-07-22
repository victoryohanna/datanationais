
// import {useState} from "react";
// import emailjs from "@emailjs/browser"
import "../sass/contactUs.scss";
import Map from "./elements/map";
// import location from './elements/location'


const ContactUs = () => {

  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [stateMessage, setStateMessage] = useState(null);

  // const sendEmail = (e) => {
  //   e.persist();
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   emailjs
  //     .sendForm(
  //       process.env.REACT_APP_SERVICE_ID, //service_nwedhps
  //       process.env.REACT_APP_TEMPLATE_ID,
  //       e.target,
  //       process.env.REACT_APP_PUBLIC_KEY
  //     )
  //     .then(
  //       (result) => {
  //         setStateMessage("Message sent!");
  //         setIsSubmitting(false);
  //         setTimeout(() => {
  //           setStateMessage(null);
  //         }, 5000); // hide message after 5 seconds
  //       },
  //       (error) => {
  //         setStateMessage("Something went wrong, please try again later");
  //         setIsSubmitting(false);
  //         setTimeout(() => {
  //           setStateMessage(null);
  //         }, 5000); // hide message after 5 seconds
  //       }
  //     );

  //   // Clears the form after sending the email
  //   e.target.reset();
  // };

  return (
    <div className="contact-wrapper" id="contact-section">
      <div className="container contact">
        <div className="header-text">
          <h1>Contact Us</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="email">
              <p>Email: admin@datanationias.com</p>
              <p>
                <span>Phone N0: </span>+2348134552628
              </p>
              <div className="contact-form">
                <div>
                  <p>Enquiries | Suggestions | Complaints</p>
                </div>
                <form>
                  {/* {stateMessage && <p>{stateMessage}</p>}   service_04jxhk2 */}
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
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="address">
              <p>60, Iledu Road, Tanke Bubu, Ilorin South LGA, </p>
              <p>Ilorin Kwara State</p>
            </div>
            <div className="map-section">
              <Map />
            </div>
          </div>
          {/* <div className="col-md-3">
            <p>
              <span>Phone N0: </span>+2348134552628
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
