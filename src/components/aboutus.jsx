import "../sass/about.scss";
const About = () => {
  return (
    <div className="about-wrapper" id="about-section">
      <div className="container about-container">
        <div className="header-text">
          <h1>Who Are We?</h1>
        </div>
        <div className="who">
          <p>
            We are a dynamic team of professionals, each committed to delivering
            exceptional results in DataNationIAS. From our skilled artisans to
            our visionary leaders, everyone at DataNationIAS shares a common
            goal - to exceed your expectations.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="what">
              <div className="title-text">
                <h3>What We Do</h3>
              </div>
              <div className="text-body">
                <p>
                  At DataNationIAS, we are on a mission to revolutionize the way
                  businesses harness the power of data. Established in 2020,
                  DataNationIAS is driven by a passion for innovation, a
                  commitment to excellence, and a vision to transform raw data
                  into actionable insights.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="how">
              <div className="title-text">
                <h3>How We Do It</h3>
              </div>
              <div className="text-body">
                <p>
                  We have been on a relentless journey to redefine standards and
                  set new benchmarks. Our passion for innovation and dedication
                  to customer satisfaction drive everything we do. In a crowded
                  market, what distinguishes us is our unwavering commitment to
                  quality service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
