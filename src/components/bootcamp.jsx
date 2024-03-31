import { Link } from "react-router-dom";

function BootcampOverview() {
  return (
    <div className="bootcamp-main">
      <div className="container">
        <div className="title-section">
            <h3>Join Our BootCamp</h3>
        </div>
        <div className="content">
          <p>
            Welcome to the Data Analytics Bootcamp, a specialized and intensive
            training program tailored to enhance participants' proficiency in
            data analytics. Our comprehensive bootcamp offers focused
            instruction, invaluable mentorship, personalized feedback, and
            networking opportunities to propel your career in the realm of data
            analytics.
          </p>
          <h5>Program Overview</h5>
          <p>
            The Data Analytics Bootcamp is strategically designed to unfold over
            a concise 4-week period, with daily sessions limited to a maximum of
            2 hours each. This streamlined schedule optimizes learning outcomes
            while accommodating participants' commitments.
          </p>
          <h5>Training Schedule</h5>
          <p>
            Participants will undergo rigorous physical lectures, spanning 2
            hours each day (Tuesday, Wednesday, and Saturday). These training
            days are chosen to ensure consistent progress and effective
            evaluation. This structure provides participants with ample time for
            reflection and assimilation of knowledge.
          </p>
          <h5>Curriculum Highlights</h5>
          <p>
            Throughout the 4-week duration, participants will engage in a robust
            physical learning experience which will take place in the office.
            The curriculum includes lectures delivered by various instructors,
            each bringing unique expertise to the table. This diversified
            approach ensures comprehensive insights into different facets of
            data analytics
          </p>
          <h5>Application Details</h5>
          <p>
            To ensure a focused and goal-oriented cohort aligned with
            organizational objectives, we limit the program to a maximum of 15
            participants. The application fee is set at fifteen thousand naira
            (#15,000), with early bird discounts available for the first five
            applicants at ten thousand naira (#10,000). For registration, apply
            in person at DataNation_IAS office
          </p>
          <h5>Commitment to Excellence</h5>
          <p>
            We are committed to identifying and selecting outstanding
            participants for further specialized training, fostering continuous
            growth and excellence in the ever-evolving technological landscape.
          </p>
          <p>
            Join us at the Data Analytics Bootcamp and embark on a
            transformative journey to elevate your skills and career prospects
            in the field of data analytics. Apply now to secure your spot and
            take advantage of our early bird discount!
          </p>
          <div className="register">
            <Link to="/">Apply Now!!</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BootcampOverview;