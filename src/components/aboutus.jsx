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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
          architecto officia porro rerum exercitationem iste in fugit ut
          voluptatibus a cum quasi nulla sed. Consequuntur vel eligendi magni
          ducimus laboriosam.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
        <div className="what"> 
        <div className="title-text">
            <h3>What We Do</h3>
            </div>
          <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            cupiditate. Maxime qui enim aperiam unde quas maiores dignissimos,
            perspiciatis debitis laudantium aspernatur eaque blanditiis eos
            sunt? Corrupti eligendi molestias odio.
          </p>
          </div>
        </div>
        </div>
        <div className="col-md-6"> 
        <div className="how">
            <div className="title-text">
            <h3>How We Do It</h3>
            </div>
          <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            odio ipsum doloribus perferendis numquam cupiditate consectetur
            voluptate, beatae, atque, aut eum quod exercitationem eligendi
            eveniet! Aliquid itaque similique dicta autem!
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
