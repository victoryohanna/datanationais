import "../sass/services.scss";
import { Link } from "react-router-dom";
import { IoAnalytics } from "react-icons/io5";
import { GiArtificialIntelligence, GiArchiveResearch } from "react-icons/gi";
import { SiJirasoftware } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";

import RegisterCourse from "./common/register";

const Services = () => {
  return (
    <div className="services-wrapper" id="services-section">
      <div className="container services-container">
        <div className="header-text">
          <h1>Our Services</h1>
          <span>
            DataNation_IAS understands that navigating the complexity of today's
            business landscape demands more than just expertise. We are here to
            deliver strategic insight and innovation through the following
            services:
          </span>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="data-analytic">
              <div className="caption">
                <div>
                  <div className="img-container">
                    <IoAnalytics />
                  </div>
                </div>
                <h4>Data Analytics</h4>
              </div>
              <p>
                With our advanced analytics and visualization services, you can
                realize the full potential of your data. Our specialty is
                transforming complicated datasets into understandable,
                insightful visuals. We offer actionable insights that inform
                strategic decision-making and help you stay ahead in the
                fast-paced business world of today by spotting trends and
                revealing hidden patterns.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="services/data-analytics">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="research-section">
              <div className="caption">
                <div>
                  <div className="img-container">
                    <GiArtificialIntelligence />
                  </div>
                </div>
                <h4>Business Intelligence</h4>
              </div>
              <p>
                With our predictive analytics services, you can stay ahead of
                the competition. To predict future trends, foresee changes in
                the market, comprehend consumer behavior, and handle operational
                requirements, we employ state-of-the-art machine learning
                algorithms. We aim to establish you as a leader in your
                industry, help you achieve continuous success in a constantly
                shifting business climate, and make sure you're well-equipped
                for whatever lies ahead.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="services/business-intelligence">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="research-section">
              <div className="caption">
                <div>
                  <div className="img-container">
                    <GiArchiveResearch />
                  </div>
                </div>
                <h4>Academic Research</h4>
              </div>
              <p>
                Our multidisciplinary approach encourages cross-disciplinary
                collaboration to produce meaningful discoveries. Our researchers
                push the boundaries of knowledge by tackling challenges from
                different perspectives through this collective effort. This
                approach enables us to develop innovative solutions and insights
                that not only drive progress but also deepen understanding.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="services/research">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="software_dev-section">
              <div className="caption">
                <div>
                  <div className="img-container">
                    <SiJirasoftware />
                  </div>
                </div>
                <h4>Web Development</h4>
              </div>
              <p>
                Enhance your online visibility with our extensive experience in
                web and mobile app development. Our team specializes in creating
                responsive and intuitive applications suited to your business
                requirements. By focusing on user experience and engagement, we
                ensure that your digital platforms effectively resonate with
                your target audience, resulting in increased interaction and
                loyalty while aligning closely with your overall business
                objectives.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="services/web-design">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="training-section">
              <div className="caption">
                <div>
                  <div className="img-container">
                    <IoIosPeople />
                  </div>
                </div>
                <h4>Training</h4>
              </div>
              <p>
                We are committed to developing intellectual curiosity and
                specialize in addressing crucial challenges through our
                extensive training programs. By pushing the boundaries of
                knowledge, we promote lifelong learning and skill development.
                We aim to provide individuals and businesses with the tools and
                experience they need to thrive in today's
                fast-expanding environment, assuring long-term success and
                adaptation in a constantly changing business climate.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="services/training">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="research-section">
              <div className="caption">
                <div>
                  <div className="img-container">
                    <FaHandshake />
                  </div>
                </div>
                <h4>Consultancy</h4>
              </div>
              <p>
                Our group of experienced consultants offers a wealth of
                experience and skills. Together, we can design strategies that
                specifically address your company's objectives and demands. Our
                consultants can help with every step of the way, whether you
                need help with market research, company planning, or creating
                plans for sustainable growth. You can successfully navigate the
                constantly changing business landscape and attain long-term
                success when you have DataNation_IAS as your partner.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="services/research">
                  <h5>Read More...</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <RegisterCourse />
      </div>
    </div>
  );
};

export default Services;
