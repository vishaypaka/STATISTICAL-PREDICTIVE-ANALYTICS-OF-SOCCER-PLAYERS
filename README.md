<h1>Statistical & Predictive Analytics of Soccer Players in Databricks Platform</h1>

<p>This repository showcases the research and implementation of predictive analytics for soccer player ratings using various algorithms. It features exploratory data analysis (EDA) visualizations, descriptive statistics, predictive modeling, and NoSQL queries. The project identifies significant player attributes and uses machine learning models to predict ratings, with Artificial Neural Network (ANN) providing the best performance.</p>

<h2>Project Overview</h2>
<p>The project involves the analysis of FIFA player datasets (<code>FIFAPLAYERS_NOSQL_ONLY.csv</code> and <code>finalfifaplayers.csv</code>) to understand and predict player ratings. It integrates descriptive statistics, EDA, and NoSQL queries to deliver actionable insights. Predictive modeling is conducted in Databricks using PySpark and ANN.</p>

<h2>Steps in the Project</h2>
<ol>
  <li><strong>Data Preprocessing:</strong> The datasets are cleaned and prepared for analysis, ensuring accuracy and consistency for modeling and visualization.</li>
  <li><strong>Descriptive Statistics:</strong> Key metrics such as mean, median, and correlations are calculated using R.</li>
  <li><strong>Exploratory Data Analysis:</strong> A Tableau dashboard visualizes patterns and insights in the dataset. <a href="https://public.tableau.com/app/profile/jason.rayen/viz/FinalProject-EDA-FifaPlayersDataset/FinalDashboard?publish=yes" target="_blank">View the Tableau Dashboard</a>.</li>
  <li><strong>NoSQL Queries:</strong> MongoDB queries provide advanced insights, including player statistics, contract analysis, and player filtering based on attributes (<code>NoSQL.js</code>).</li>
  <li><strong>Predictive Modeling:</strong> Models such as Polynomial Regression, PySpark, and ANN are used to predict player ratings with high accuracy (<code>Final_Code_File.ipynb</code>).</li>
</ol>

<h2>Readme File</h2>
<p>The repository includes a <code>Readme.txt</code> file that provides step-by-step instructions to run the entire project:</p>
<ul>
  <li><strong>Loading Dataset:</strong> Upload the datasets onto Databricks using <code>File -> Upload Data to DBFS</code>.</li>
  <li><strong>Editing Paths:</strong> Update the file paths in the Jupyter notebook (<code>Final_Code_File.ipynb</code>) as needed in cells 9, 21, 23, 62, and 63. This step may be optional if shared paths are accessible.</li>
  <li><strong>Tableau Dashboard:</strong> Access the EDA visualizations through the provided Tableau link.</li>
  <li><strong>NoSQL Setup:</strong> Follow detailed steps for setting up MongoDB, importing data, and running the queries provided in <code>NoSQL.js</code>.</li>
</ul>

<h2>Key Features</h2>
<ul>
  <li><strong>Data Preprocessing:</strong> Handled in Databricks with data cleaning, feature engineering, and transformation.</li>
  <li><strong>Descriptive Analytics:</strong> R scripts generate statistics for better data understanding.</li>
  <li><strong>Visualization:</strong> Tableau is used to create an interactive EDA dashboard.</li>
  <li><strong>Predictive Modeling:</strong> Algorithms tested include ANN, Polynomial Regression, and PySpark-based models.</li>
  <li><strong>NoSQL Analysis:</strong> MongoDB queries provide detailed player insights, including skill-based filtering and club analysis.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li><strong>Languages:</strong> Python, R, NoSQL</li>
  <li><strong>Tools:</strong> MongoDB, Tableau, Databricks</li>
  <li><strong>Libraries:</strong> pandas, numpy, PySpark, matplotlib, seaborn</li>
</ul>

<h2>How to Use</h2>
<ol>
  <li>Load the datasets onto Databricks. Navigate to <code>File -> Upload Data to DBFS</code>.</li>
  <li>Edit file paths in code cells as necessary, particularly in cells 9, 21, 23, 62, and 63 of the Jupyter notebook (<code>Final_Code_File.ipynb</code>).</li>
  <li>Run the predictive modeling notebook. The runtime is approximately 15 minutes.</li>
  <li>To explore visualizations, open the Tableau dashboard using the link provided.</li>
  <li>For NoSQL queries, set up MongoDB following the detailed instructions in <code>Readme.txt</code>. Import <code>finalfifaplayers.csv</code> to your MongoDB collection and run the queries from <code>NoSQL.js</code>.</li>
</ol>

<h2>Key Insights</h2>
<ul>
  <li>Artificial Neural Network outperformed other models in predicting player ratings.</li>
  <li>Key attributes influencing player ratings include ball control, dribbling, and shooting skills.</li>
  <li>NoSQL queries provided advanced analytics, such as age distribution and contract duration analysis.</li>
</ul>

<h2>Future Enhancements</h2>
<ul>
  <li>Incorporate more advanced machine learning models and ensemble methods.</li>
  <li>Develop a web application integrating the prediction model and visualizations.</li>
  <li>Extend the analysis with real-time data using APIs.</li>
</ul>

<p>This project demonstrates the integration of statistical analysis, data visualization, and predictive modeling to analyze and predict soccer player performance effectively.</p>
