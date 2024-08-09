import { Link } from "react-router-dom";

function BootcampOverview() {
  return (
    <div className="bootcamp-main">
      <div className="container">
        <div className="title-section">
          <h3>Join Our Training</h3>
        </div>
        <div className="content">
          <div className="modal-btn">
            <div>
              <p>
                DataNation Integrated Analytics Service offers a comprehensive
                data analytics training program consisting of a{" "}
                <b>3-month physical and a 4-month virtual class</b>.
              </p>
              <h5>
                <b>Tentative Schedules:</b>
              </h5>
              <h6>
                <b>Physical Class - </b>
                <span>Wednesday, Friday and Saturday</span>
              </h6>
              <h6>
                <b>Virtual Live Class - </b>
                <span>Friday and Saturday</span>
              </h6>

              <h6>Three (3) Hours per session</h6>
              <p>
                This is an excellent opportunity for individuals aspiring to
                become data analysts. Registration for the program is still open.
                Physical classes starts on <b>August 9, 2024</b> while virtual
                classes starts on <b>August 16, 2024</b>.The training provides a
                robust curriculum and content to develop participants into
                skilled data analysts.
              </p>
            </div>
            <div>
              <h6>FIRST PHASE</h6>
              <div>
                <h6>1. Understand Data</h6>
                <ul>
                  <li>Database basics </li>
                  <li>Keys (PK and FK)</li>
                  <li>Cardinality </li>
                  <li>ER Diagrams </li>
                  <li>Normalization basics </li>
                  <li>De-normalization </li>
                  <li>OLAP vs OLTP </li>
                  <li>Databases vs Data warehouses vs Data lakes </li>
                  <li>Cloud vs on-premise </li>
                  <li>ETL and data modeling</li>
                </ul>
              </div>

              <div>
                <h6>2. Understanding Data Analysis</h6>
                <ul>
                  <li>Importance of Data Analysis</li>
                  <li>
                    Different Types of Data Analysis (Qualitative and
                    Quantitative)
                  </li>
                  <li>Understanding Quantitative Data (the course focus)</li>
                  <li>Sources and Methods of Data Collection</li>
                  <li>Variable and Types</li>
                  <li>Data Types</li>
                  <li>Scale of Measurement</li>
                </ul>
              </div>
              <div>
                <h6>3. Learn Excel </h6>
                <ul>
                  <li>Understanding Workbook and Worksheet</li>
                  <li>Data Entry and Basic Formatting</li>
                  <li>Simple Arithmetic Formulas and Functions</li>
                  <li>Creating and Managing Tables</li>
                  <li>Pivot Tables</li>
                  <li>Data cleaning techniques</li>
                  <li>Power Query</li>
                  <li>Conditional formatting</li>
                  <li>Data Visualization</li>
                  <li>Data validation </li>
                  <li>Creating an interactive dashboard</li>
                  <li>Introduction to Statistical Analysis(Using Toolpak)</li>
                </ul>
              </div>
            </div>
            <div>
              <h6>SECOND PHASE</h6>
              <div>
                <h6>4. Learn SQL </h6>
                <ul>
                  <li>Overview of Databases</li>
                  <li>Types of Database Management Systems (DBMS)</li>
                  <li>Introduction to SQL</li>
                  <li>Basics SQL commands (SELECT, INSERT, UPDATE, DELETE)</li>
                  <li>Sorting and Limiting Results</li>
                  <li>Conditions and Logical Operators</li>
                  <li>Aggregations with GROUP BY and HAVING</li>
                  <li>Joins and Relationships (INNER, LEFT, FULL OUTER)</li>
                  <li>Common table expressions (CTEs)</li>
                  <li>Sub queries </li>
                  <li>
                    Introduction to Window Functions (ROW_NUMBER(), RANK(),
                    DENSE_RANK())
                  </li>
                </ul>
              </div>
              <div>
                <h6>5. Learn a BI Tool </h6>
                <ul>
                  <li>
                    Introduction to Business Intelligence (BI) - the umbrella
                    term{" "}
                  </li>
                  <li>Getting started Power BI, or Tableau </li>
                  <li>Getting Started with Power BI Desktop</li>
                  <li>Data Modeling in Power BI</li>
                  <li>
                    Using DAX (Data Analysis Expressions) or equivalent
                    functions{" "}
                  </li>
                  <li>Connecting to various data sources </li>
                  <li>Creating Relationships Data Wrangling with Pandas</li>
                  <li>Introduction to Power BI Visualizations</li>
                  <li>Building interactive dashboards </li>
                  <li>Creating data visualizations </li>
                  <li>Advanced Query Editor Functions</li>
                  <li>Sharing and collaborating on reports </li>
                </ul>
              </div>
              <div>
                <h6>6. Learn Python for Data Science </h6>
                <ul>
                  <li>Basic syntax and data types</li>
                  <li>Setting Up the Python Data Science Environment</li>
                  <li>NumPy Basics</li>
                  <li>Pandas Introduction </li>
                  <li>Handling Missing Data</li>
                  <li>Data manipulation with Pandas </li>
                  <li>Data visualization with Matplotlib and Seaborn</li>
                  <li>Writing and using functions for EDA</li>
                  <li>Exploratory Data Analysis </li>
                </ul>
              </div>
            </div>
            <p>Let the best hand train you!! 👨🏽‍💻</p>
            <div>
              <h5>
                <b>Registration Information:</b>
              </h5>
              <h6>
                <b>Physical Class:</b> <span>100,000 NGN</span>
              </h6>

              <h6>
                <b>Virtual Class:</b>
                <span>150,000 NGN</span>
              </h6>

              {/* <h6>
                <b>Registration Period:</b>
                <span> Now until August 2, 2024</span>
              </h6>
              <h6>
                <b>Classes Begin:</b> <span> First week of August 2024</span>
              </h6> */}
              <p>
                <b>Note:</b> An upfront payment of 70% of the total fee is
                required before the commencement of the first phase.
              </p>
            </div>

            <div className="btn" style={{ background: "#108fbf", width: 250 }}>
              {/* <div className="register">
                <button
                  type="button"
                  data-bs-toggle="modal1"
                  data-bs-target="#regModal"
                >
                  Apply Now
                </button>
              </div> */}
              <Link
                type="button"
                to="https://forms.zohopublic.com/datanationintegratedanalyticss/form/Applicants/formperma/a9Ujees35yPIf9iCgIdY72CZiZHHzw3GFJMBGy9vLyc"
                target="_blank"
                style={{ color: "#ffffff", fontSize: 22 }}
              >
                REGISTER NOW
              </Link>
            </div>
          </div>
          {/* <p>
            Welcome to the Data Analytics Bootcamp, a specialized and intensive
            training program tailored to enhance participants' proficiency in
            data analytics. Our comprehensive bootcamp offers focused
            instruction, invaluable mentorship, personalized feedback, and
            networking opportunities to propel your career in the realm of data
            analytics.
          </p> */}
          {/* <h6>Program Overview</h6>
          <p>
            The Data Analytics Bootcamp is strategically designed to unfold over
            a concise 4-week period, with daily sessions limited to a maximum of
            2 hours each. This streamlined schedule optimizes learning outcomes
            while accommodating participants' commitments.
          </p> */}
          {/* <h6>Expected Learning Outcomes</h6>
          <ul>
            <li>
              Understand the fundamental concepts of data analytics, including
              its importance, basic terminology, and its role in decision-making
              processes
            </li>
            <li>
              Gain proficiency in using Microsoft Excel for data manipulation,
              analysis, and visualization. Also, become familiar with Power BI
              for more advanced data visualization and reporting
            </li>
            <li>
              Learn about database management systems and the role they play in
              storing and retrieving data efficiently. Gain proficiency in SQL
              (Structured Query Language) for querying and managing relational
              databases, including creating, modifying, and querying tables.
            </li>
            <li>
              Understand the importance of integrating data analytics and
              programming skills into project management processes. Learn how to
              apply data-driven insights to project planning, execution, and
              monitoring, and how to effectively communicate findings to
              stakeholders.
            </li>
          </ul> */}

          {/* <p></p>
          <h6>Training Schedule</h6>
          <p>
            Participants will undergo rigorous physical lectures, spanning 2
            hours each day (Tuesday, Wednesday, and Saturday). These training
            days are chosen to ensure consistent progress and effective
            evaluation. This structure provides participants with ample time for
            reflection and assimilation of knowledge.
          </p>
          <h6>Curriculum Highlights</h6>
          <p>
            Throughout the 4-week duration, participants will engage in a robust
            physical learning experience which will take place in the office.
            The curriculum includes lectures delivered by various instructors,
            each bringing unique expertise to the table. This diversified
            approach ensures comprehensive insights into different facets of
            data analytics.
          </p>
          
          <h6>Application Details</h6>
          <p>
            To ensure a focused and goal-oriented cohort aligned with
            organizational objectives, we limit the program to a maximum of 15
            participants. The application fee is set at fifteen thousand naira
            (&#x20A6;15,000) per participant. For registration, apply in
            person at DataNation_IAS office
          </p>
          <h6>Commitment to Excellence</h6>
          <p>
            We are committed to identifying and selecting outstanding
            participants for further specialized training, fostering continuous
            growth and excellence in the ever-evolving technological landscape.
          </p>
          <p>
            Join us at the Data Analytics Bootcamp and embark on a
            transformative journey to elevate your skills and career prospects
            in the field of data analytics. Apply now to secure your spot!
          </p> */}
          {/* <div className="register">
            <button
              type="button"
              data-bs-toggle="modal1"
              data-bs-target="#regModal"
            >
              Apply Now
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default BootcampOverview;
