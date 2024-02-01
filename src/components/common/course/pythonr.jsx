import { Tabs, Tab } from "react-bootstrap";

const Python = () => {
  return (
    <div className="modules">
      <div className="course-overview">
        <h5>PYTHON FOR DATA ANALYSIS</h5>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          veniam earum. Eum libero nemo ipsam nobis atque quae unde quibusdam
          officia? Et modi beatae id non laborum, sequi tenetur doloremque
          deserunt molestias excepturi, quia quisquam nostrum obcaecati
          necessitatibus reprehenderit aliquam, dolorem eius ea dolorum
          reiciendis nihil. Itaque est ullam incidunt.
        </p> */}
        <p></p>
        <Tabs defaultActiveKey="#1" className="mb-3">
          <Tab eventKey="#1" title="Beginner Level">
            <div className="collapse-section1">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <b>Module 1: Introduction to Data Analysis with Python</b>
                </button>
              </p>
              <div className="collapse" id="collapse1">
                <div className=" pp">
                  <h5>1.1 Overview of Data Analysis</h5>
                  <ul>
                    <li>Importance and Applications</li>
                    <li>Role of Python in Data Analysis</li>
                  </ul>
                  <h5>1.2 Setting Up the Python Data Science Environment</h5>
                  <ul>
                    <li>Installing Anaconda Distribution</li>
                    <li>Introduction to Jupyter Notebooks</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collapse-section2">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <b>Module 2: Basic Python for Data Analysis</b>
                </button>
              </p>
              <div className="collapse" id="collapse2">
                <div className=" pp">
                  <h5>2.1 NumPy Basics</h5>
                  <ul>
                    <li>Introduction to NumPy Arrays</li>
                    <li>Array Operations and Functions</li>
                  </ul>
                  <h5>2.2 Pandas Introduction</h5>
                  <ul>
                    <li>DataFrames and Series</li>
                    <li>Data Indexing and Selection</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collapse-section3">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <b>Module 3: Data Cleaning and Preprocessing</b>
                </button>
              </p>
              <div className="collapse" id="collapse3">
                <div className=" pp">
                  <h5>3.1 Handling Missing Data</h5>
                  <ul>
                    <li>Identifying and Filling Missing Values</li>
                    <li>Dropping Missing Values</li>
                  </ul>
                  <h5>3.2 Data Wrangling with Pandas</h5>
                  <ul>
                    <li>Merging and Concatenating DataFrames</li>
                    <li>Reshaping and Pivoting Data</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="#2" title="Intermediate Level">
            <div className="collapse-section1">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <b>Module 4: Exploratory Data Analysis (EDA)</b>
                </button>
              </p>
              <div className="collapse" id="collapse1">
                <div className=" pp">
                  <h5>4.1 Descriptive Statistics</h5>
                  <ul>
                    <li>Measures of Central Tendency and Dispersion</li>
                    <li>Data Visualization with Matplotlib and Seaborn</li>
                  </ul>
                  <h5>4.2 Data Distribution Analysis</h5>
                  <ul>
                    <li>Histograms and Kernel Density Estimation (KDE)</li>
                    <li>Box Plots and Violin Plots</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collapse-section2">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <b>Module 5: Advanced Data Visualization</b>
                </button>
              </p>
              <div className="collapse" id="collapse2">
                <div className=" pp">
                  <h5>5.1 Interactive Visualizations with Plotly</h5>
                  <ul>
                    <li>Building Interactive Charts</li>
                    <li>Dashboards and Applications</li>
                  </ul>
                  <h5>5.2 Geographic Data Visualization</h5>
                  <ul>
                    <li>Plotting Maps with Geopandas</li>
                    <li>Working with GeoJSON and Shapefiles</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collapse-section2">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <b>Module 6: Statistical Analysis with Python</b>
                </button>
              </p>
              <div className="collapse" id="collapse2">
                <div className=" pp">
                  <h5>6.1 Hypothesis Testing</h5>
                  <ul>
                    <li>t-tests, ANOVA, and Chi-Square Tests</li>
                    <li>Understanding p-values and Confidence Intervals</li>
                  </ul>
                  <h5>6.2 Correlation and Regression Analysis</h5>
                  <ul>
                    <li>Pearson and Spearman Correlation</li>
                    <li>Simple and Multiple Regression</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="#3" title="Advance Level">
            <div className="collapse-section1">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <b>Module 7: Machine Learning Foundations with Python</b>
                </button>
              </p>
              <div className="collapse" id="collapse1">
                <div className=" pp">
                  <h5>7.1 Introduction to Machine Learning</h5>
                  <ul>
                    <li>Types of Machine Learning</li>
                    <li>Supervised vs. Unsupervised Learning</li>
                  </ul>
                  <h5>7.2 Scikit-Learn Basics</h5>
                  <ul>
                    <li>Building and Evaluating Models</li>
                    <li>Model Selection and Hyperparameter Tuning</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collapse-section2">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <b>Module 8: Time Series Analysis</b>
                </button>
              </p>
              <div className="collapse" id="collapse2">
                <div className=" pp">
                  <h5>8.1 Handling Time Series Data with Pandas</h5>
                  <ul>
                    <li>Resampling and Shifting</li>
                    <li>Rolling Windows and Exponential Moving Averages</li>
                  </ul>
                  <h5>8.2 Time Series FoWrecasting</h5>
                  <ul>
                    <li>
                      ARIMA and Seasonal Decomposition of Time Series (STL)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collapse-section2">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <b>Module 9: Big Data Processing with Python</b>
                </button>
              </p>
              <div className="collapse" id="collapse2">
                <div className=" pp">
                  <h5>9.1 Introduction to Big Data</h5>
                  <ul>
                    <li>Overview of Apache Spark</li>
                    <li>PySpark Basics</li>
                  </ul>
                  <h5>9.2 Working with Distributed Data</h5>
                  <ul>
                    <li>Parallel Computing and Spark RDDs</li>
                    <li>Spark DataFrames and SQL</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="collapse-section2">
              <p>
                <button
                  className="btn-collapse"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <b>Module 10: Real-World Data Analysis Projects</b>
                </button>
              </p>
              <div className="collapse" id="collapse2">
                <div className=" pp">
                  <h5>10.1 Capstone Project</h5>
                  <ul>
                    <li>
                      Applying Data Analysis Skills to a Real-world Dataset
                    </li>
                    <li>Project Presentation and Documentation</li>
                  </ul>
                  <h5>8.2 Time Series FoWrecasting</h5>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Python;
