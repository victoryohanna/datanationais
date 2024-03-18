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
            
            We are a dynamic group of professionals, all dedicated to providing
            outstanding results for DataNation_IAS. To surpass your expectations
            is the shared objective of every member of the DataNation_IAS team,
            from our talented artisans to our visionary leaders.
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
                  
                  At DataNation_IAS, we are on a mission to transform the way
                  organizations use data. DataNation_IAS, incorporated in 2022,
                  is driven by a desire to innovate, a commitment to excellence,
                  and a vision to turn raw data into actionable insights.
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
                  
                  DataNation_IAS has worked relentlessly to redefine standards
                  and set new benchmarks. Our passion for innovation and
                  commitment to customer satisfaction drive everything we do.
                  Our continual commitment to outstanding service distinguishes
                  us in the highly competitive market.
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
