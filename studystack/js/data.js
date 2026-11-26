// data.js - roles, skills, hours, GitHub links, YouTube links and learning resources
const sk = (id, name, category, hours, label, url, how, practice, yt) =>
  ({ id, name, category, hours, res: [label, url], how, practice, yt });

const ROLES = [
  {
    id: 'web',
    name: 'Web Developer',
    github: ['microsoft/Web-Dev-For-Beginners', 'https://github.com/microsoft/Web-Dev-For-Beginners'],
    youtube: ['Traversy Media (Web Dev Courses)', 'https://www.youtube.com/@TraversyMedia'],
    studyFrom: [
      ['MDN Web Docs', 'https://developer.mozilla.org/en-US/docs/Learn'],
      ['The Odin Project', 'https://www.theodinproject.com/'],
      ['freeCodeCamp', 'https://www.freecodecamp.org/']
    ],
    skills: [
      sk('web-html', 'HTML5', 'Foundations', 4, 'MDN: Learn HTML', 'https://developer.mozilla.org/en-US/docs/Learn/HTML', 'Read one topic, then rebuild the example from memory without copying.', 'Build a profile page with headings, lists, a table and a form.', ['Traversy Media: Web Dev', 'https://www.youtube.com/@TraversyMedia']),
      sk('web-css', 'CSS, Flexbox and Grid', 'Foundations', 6, 'MDN: Learn CSS', 'https://developer.mozilla.org/en-US/docs/Learn/CSS', 'Change one property at a time in browser DevTools and watch what happens.', 'Style your profile page into a card layout using Flexbox and Grid.', ['Traversy Media: CSS & Layouts', 'https://www.youtube.com/@TraversyMedia']),
      sk('web-resp', 'Responsive design', 'Foundations', 4, 'web.dev: Learn Responsive Design', 'https://web.dev/learn/design', 'Test every page at phone width first, then widen it.', 'Make your page work on a 360px phone and a laptop.'),
      sk('web-js', 'JavaScript', 'Programming', 8, 'javascript.info', 'https://javascript.info', 'Type every example yourself and solve the tasks at the end of each chapter.', 'Build a to-do list that saves items in localStorage.', ['freeCodeCamp.org JavaScript', 'https://www.youtube.com/@freecodecamp']),
      sk('web-git', 'Git and GitHub', 'Tools', 2, 'Pro Git book', 'https://git-scm.com/book/en/v2', 'Learn only add, commit, push, pull and branch first. Use them daily.', 'Put your to-do app on GitHub with 5 meaningful commits.'),
      sk('web-api', 'HTTP and APIs', 'Programming', 4, 'MDN: HTTP overview', 'https://developer.mozilla.org/en-US/docs/Web/HTTP', 'Call a free public API with fetch() and read the response in the console.', 'Show live data from a public API on a page.'),
      sk('web-react', 'React', 'Frameworks', 10, 'React: Learn', 'https://react.dev/learn', 'Follow the official tutorial, then rebuild the same app without looking.', 'Rebuild your to-do app in React with components.', ['freeCodeCamp.org React', 'https://www.youtube.com/@freecodecamp']),
      sk('web-node', 'Node.js', 'Frameworks', 10, 'Node.js: Learn', 'https://nodejs.org/en/learn', 'Write small scripts first, then a tiny server with 2 routes.', 'Create a simple server that returns JSON.'),
      sk('web-deploy', 'Deploying a site', 'Tools', 2, 'GitHub Pages docs', 'https://docs.github.com/en/pages', 'Deploy early, even a half-finished page, to learn the flow.', 'Publish one of your projects with GitHub Pages.')
    ]
  },
  {
    id: 'data',
    name: 'Data Analyst',
    github: ['ossu/data-science', 'https://github.com/ossu/data-science'],
    youtube: ['freeCodeCamp.org (Data Analysis)', 'https://www.youtube.com/@freecodecamp'],
    studyFrom: [
      ['Kaggle Learn', 'https://www.kaggle.com/learn'],
      ['SQLBolt', 'https://sqlbolt.com/'],
      ['Khan Academy Stats', 'https://www.khanacademy.org/math/statistics-probability']
    ],
    skills: [
      sk('data-excel', 'Excel essentials', 'Foundations', 6, 'Microsoft Excel help and learning', 'https://support.microsoft.com/en-us/excel', 'Use a real dataset (your marks, expenses) instead of dummy sheets.', 'Make a sheet with formulas, a pivot table and a chart.'),
      sk('data-sql', 'SQL queries', 'Foundations', 10, 'SQLBolt', 'https://sqlbolt.com', 'Do one lesson a day and write each query by hand.', 'Answer 10 questions on a sample database using JOIN and GROUP BY.'),
      sk('data-stats', 'Statistics basics', 'Foundations', 10, 'Khan Academy: Statistics', 'https://www.khanacademy.org/math/statistics-probability', 'After each idea, explain it aloud in plain words.', 'Calculate mean, median and spread for a dataset and explain them.', ['StatQuest with Josh Starmer', 'https://www.youtube.com/@StatQuest']),
      sk('data-py', 'Python basics', 'Programming', 8, 'Python Tutorial (docs)', 'https://docs.python.org/3/tutorial/', 'Code along in a notebook and change the examples to break them.', 'Write a script that reads a CSV and prints a summary.', ['CS50 Python', 'https://www.youtube.com/@cs50']),
      sk('data-pandas', 'Pandas', 'Programming', 10, 'Pandas: Getting started', 'https://pandas.pydata.org/docs/getting_started/index.html', 'Pick a Kaggle dataset you care about and ask it 5 questions.', 'Analyse a dataset and report 3 findings.'),
      sk('data-clean', 'Data cleaning', 'Analysis', 4, 'Kaggle Learn: Data Cleaning', 'https://www.kaggle.com/learn/data-cleaning', 'Always inspect missing values and duplicates before any analysis.', 'Clean a messy CSV and document each fix.'),
      sk('data-viz', 'Data visualization', 'Tools', 8, 'Kaggle Learn: Data Visualization', 'https://www.kaggle.com/learn/data-visualization', 'Choose the chart type by the question you want to answer.', 'Create 4 charts and write one sentence insight under each.'),
      sk('data-bi', 'Power BI', 'Tools', 8, 'Microsoft Learn: Power BI', 'https://learn.microsoft.com/en-us/training/powerplatform/power-bi', 'Rebuild a dashboard you like, then change it to your own data.', 'Build a one-page dashboard from your cleaned dataset.'),
      sk('data-story', 'Data storytelling', 'Soft skills', 4, 'Storytelling with Data blog', 'https://www.storytellingwithdata.com/blog', 'Start with the decision the reader must make, then show only supporting charts.', 'Present your dashboard in 2 minutes to a friend.')
    ]
  },
  {
    id: 'backend',
    name: 'Python Backend Developer',
    github: ['practical-tutorials/project-based-learning', 'https://github.com/practical-tutorials/project-based-learning'],
    youtube: ['Harvard CS50 & Python', 'https://www.youtube.com/@cs50'],
    studyFrom: [
      ['Python Official Docs', 'https://docs.python.org/3/tutorial/'],
      ['FastAPI Docs', 'https://fastapi.tiangolo.com/tutorial/'],
      ['Real Python', 'https://realpython.com/']
    ],
    skills: [
      sk('be-py', 'Python basics', 'Foundations', 10, 'Python Tutorial (docs)', 'https://docs.python.org/3/tutorial/', 'Write code daily, even 30 minutes. Small and regular beats long and rare.', 'Build a command-line expense tracker.', ['Harvard CS50', 'https://www.youtube.com/@cs50']),
      sk('be-oop', 'Object-oriented programming', 'Foundations', 6, 'Real Python: OOP in Python', 'https://realpython.com/python3-object-oriented-programming/', 'Model something real (a library, a bank) with classes before reading more.', 'Model a library system with 3 classes.'),
      sk('be-dsa', 'Data structures and algorithms', 'Programming', 20, 'GeeksforGeeks: DSA', 'https://www.geeksforgeeks.org/data-structures/', 'Solve one problem a day. If stuck for 30 minutes, read the idea, then code it yourself.', 'Solve 15 problems on arrays, strings and hash maps.', ['freeCodeCamp.org DSA', 'https://www.youtube.com/@freecodecamp']),
      sk('be-git', 'Git and GitHub', 'Tools', 2, 'Pro Git book', 'https://git-scm.com/book/en/v2', 'Commit after every small working step with a clear message.', 'Push a project with a README and 5 commits.'),
      sk('be-sql', 'SQL and databases', 'Programming', 8, 'SQLBolt', 'https://sqlbolt.com', 'Design the tables on paper before writing any query.', 'Design a 3-table database and query it.'),
      sk('be-rest', 'REST APIs with FastAPI', 'Frameworks', 8, 'FastAPI tutorial', 'https://fastapi.tiangolo.com/tutorial/', 'Build endpoints one by one and test each in the auto-generated docs page.', 'Create a CRUD API for notes with a database.'),
      sk('be-test', 'Testing with pytest', 'Tools', 4, 'pytest: Getting started', 'https://docs.pytest.org/en/stable/getting-started.html', 'Write the test first for one small function, then make it pass.', 'Add 5 tests to your API project.'),
      sk('be-linux', 'Linux command line', 'Tools', 4, 'Linux Journey', 'https://linuxjourney.com', 'Use the terminal for daily tasks instead of the mouse.', 'Create, move and search files only with commands.', ['NetworkChuck Linux', 'https://www.youtube.com/@NetworkChuck'])
    ]
  },
  {
    id: 'fullstack',
    name: 'Full Stack Developer (MERN)',
    github: ['kamranahmedse/developer-roadmap', 'https://github.com/kamranahmedse/developer-roadmap'],
    youtube: ['freeCodeCamp.org (Full Stack)', 'https://www.youtube.com/@freecodecamp'],
    studyFrom: [
      ['Full Stack Open', 'https://fullstackopen.com/en/'],
      ['The Odin Project', 'https://www.theodinproject.com/'],
      ['freeCodeCamp', 'https://www.freecodecamp.org/']
    ],
    skills: [
      sk('fs-js', 'Modern JavaScript (ES6+)', 'Foundations', 8, 'javascript.info', 'https://javascript.info', 'Master promises, async/await, destructuring and array methods before touching frameworks.', 'Write a CLI script that fetches and formats GitHub user repos.', ['Traversy Media JS', 'https://www.youtube.com/@TraversyMedia']),
      sk('fs-ts', 'TypeScript basics', 'Programming', 6, 'TypeScript Handbook', 'https://www.typescriptlang.org/docs/handbook/intro.html', 'Add types to an existing small JS file instead of starting from scratch.', 'Convert a JS utility module to strict TypeScript.'),
      sk('fs-react', 'React & State Management', 'Frontend', 12, 'React: Learn', 'https://react.dev/learn', 'Break the UI into small components and lift state only as high as needed.', 'Build a multi-page notes app with search and filters.'),
      sk('fs-node', 'Node.js & Express APIs', 'Backend', 10, 'MDN: Express/Node intro', 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs', 'Build one route at a time and test it immediately with curl or Postman.', 'Create a REST API for tasks with GET, POST, PUT and DELETE.'),
      sk('fs-mongo', 'MongoDB & Mongoose', 'Database', 8, 'MongoDB University', 'https://learn.mongodb.com/', 'Design your document schema around the queries your app runs most often.', 'Connect your Express API to MongoDB Atlas and persist tasks.'),
      sk('fs-auth', 'Authentication (JWT & Sessions)', 'Security', 6, 'JWT.io Introduction', 'https://jwt.io/introduction', 'Trace the login flow step by step: hash password, issue token, verify middleware.', 'Add signup, login and protected routes to your API.'),
      sk('fs-git', 'Git Branching & PRs', 'Tools', 3, 'Learn Git Branching', 'https://learngitbranching.js.org/', 'Create a new branch for every feature and merge via Pull Request.', 'Open and merge 3 feature PRs on your own GitHub repo.'),
      sk('fs-deploy', 'Full-Stack Deployment', 'Tools', 4, 'Vercel Docs', 'https://vercel.com/docs', 'Keep secrets in environment variables, never commit .env files to GitHub.', 'Deploy your frontend and backend with live database connection.')
    ]
  },
  {
    id: 'java',
    name: 'Java & Spring Boot Developer',
    github: ['EbookFoundation/free-programming-books', 'https://github.com/EbookFoundation/free-programming-books'],
    youtube: ['freeCodeCamp.org (Java & Spring)', 'https://www.youtube.com/@freecodecamp'],
    studyFrom: [
      ['MOOC.fi Java Programming', 'https://java-programming.mooc.fi/'],
      ['Spring.io Guides', 'https://spring.io/guides'],
      ['Baeldung', 'https://www.baeldung.com/']
    ],
    skills: [
      sk('java-core', 'Core Java & OOP', 'Foundations', 14, 'Dev.java: Learn Java', 'https://dev.java/learn/', 'Write classes and interfaces for real entities to understand polymorphism.', 'Build a console banking app with accounts and transactions.'),
      sk('java-col', 'Collections & Streams', 'Programming', 8, 'Dev.java: Collections', 'https://dev.java/learn/api/collections-framework/', 'Replace manual loops with Stream map/filter/collect on small lists.', 'Process a CSV of student grades using Java Streams.'),
      sk('java-dsa', 'Data Structures & Algorithms', 'Programming', 18, 'NeetCode Roadmap', 'https://neetcode.io/roadmap', 'Pick one pattern (two pointers, sliding window) per week and solve 5 problems.', 'Solve 15 array, map and tree problems in Java.'),
      sk('java-sql', 'SQL & PostgreSQL', 'Database', 8, 'PostgreSQL Tutorial', 'https://www.postgresqltutorial.com/', 'Practice joins, indexes and transactions directly in psql.', 'Design an e-commerce schema with users, orders and items.'),
      sk('java-spring', 'Spring Boot & REST APIs', 'Frameworks', 12, 'Spring Boot Guides', 'https://spring.io/guides/gs/rest-service', 'Start with start.spring.io and build Controller -> Service -> Repository layers.', 'Build a REST API for a bookstore with Spring Web.'),
      sk('java-jpa', 'Spring Data JPA & Hibernate', 'Frameworks', 8, 'Spring Data JPA Guide', 'https://spring.io/guides/gs/accessing-data-jpa', 'Inspect the SQL logs Hibernate generates so you catch N+1 queries early.', 'Connect your bookstore API to PostgreSQL using JPA.'),
      sk('java-test', 'Unit Testing (JUnit 5 & Mockito)', 'Tools', 6, 'JUnit 5 User Guide', 'https://junit.org/junit5/docs/current/user-guide/', 'Test service logic with mocked repositories before testing controllers.', 'Write 10 unit tests covering edge cases in your service layer.'),
      sk('java-docker', 'Maven & Docker Basics', 'Tools', 4, 'Docker Java Guide', 'https://docs.docker.com/guides/java/', 'Package the app as a JAR first, then run it inside a container.', 'Containerize your Spring Boot API with a Dockerfile.', ['TechWorld with Nana: Docker', 'https://www.youtube.com/@TechWorldwithNana'])
    ]
  },
  {
    id: 'mobile',
    name: 'Mobile App Developer',
    github: ['hayanisaid/React-Native-developer-roadmap', 'https://github.com/hayanisaid/React-Native-developer-roadmap'],
    youtube: ['freeCodeCamp.org (React Native & Flutter)', 'https://www.youtube.com/@freecodecamp'],
    studyFrom: [
      ['React Native Docs', 'https://reactnative.dev/docs/getting-started'],
      ['Flutter Docs', 'https://docs.flutter.dev/get-started/learn-more'],
      ['Expo Documentation', 'https://docs.expo.dev/']
    ],
    skills: [
      sk('mob-js', 'JavaScript / Dart Basics', 'Foundations', 8, 'javascript.info', 'https://javascript.info', 'Focus on async code, JSON parsing and array transforms used in every screen.', 'Write a small program that filters and groups JSON mock data.'),
      sk('mob-ui', 'Mobile Layouts & Flexbox', 'Foundations', 6, 'React Native Layout', 'https://reactnative.dev/docs/flexbox', 'Test every screen on both small and large phone simulators.', 'Design a clean 3-screen mobile UI (feed, detail, profile).'),
      sk('mob-core', 'React Native & Expo (or Flutter)', 'Frameworks', 14, 'Expo Tutorial', 'https://docs.expo.dev/tutorial/introduction/', 'Run your app on your real phone with Expo Go while editing.', 'Build a habit tracker app with interactive check-ins.'),
      sk('mob-nav', 'Navigation & Routing', 'Frameworks', 5, 'Expo Router Docs', 'https://docs.expo.dev/router/introduction/', 'Map out tabs and stack screens on paper before writing routes.', 'Add bottom tabs and detail screen navigation to your app.'),
      sk('mob-api', 'APIs & Offline Storage', 'Data', 8, 'React Native Networking', 'https://reactnative.dev/docs/network', 'Always handle loading, empty and error states on mobile networks.', 'Fetch live weather or news data and cache it locally.'),
      sk('mob-native', 'Device Features (Camera, Notifications)', 'Platform', 6, 'Expo SDK Docs', 'https://docs.expo.dev/versions/latest/', 'Test permissions gracefully when a user taps "Deny".', 'Add photo upload or local study reminders to your app.'),
      sk('mob-perf', 'Debugging & Performance', 'Tools', 4, 'React Native Debugging', 'https://reactnative.dev/docs/debugging', 'Use FlatList instead of ScrollView for long lists to avoid lag.', 'Profile and optimize a list of 500 items.'),
      sk('mob-pub', 'App Build & Store Release', 'Tools', 4, 'Expo EAS Build Docs', 'https://docs.expo.dev/build/introduction/', 'Generate a preview APK/build early so you know the release pipeline.', 'Create a shareable Android APK build of your project.')
    ]
  },
  {
    id: 'aiml',
    name: 'AI & Machine Learning Engineer',
    github: ['microsoft/ML-For-Beginners', 'https://github.com/microsoft/ML-For-Beginners'],
    youtube: ['Andrej Karpathy (Zero to Hero & LLMs)', 'https://www.youtube.com/@AndrejKarpathy'],
    studyFrom: [
      ['fast.ai Practical Deep Learning', 'https://course.fast.ai/'],
      ['Kaggle Learn', 'https://www.kaggle.com/learn'],
      ['Hugging Face Learn', 'https://huggingface.co/learn']
    ],
    skills: [
      sk('ml-py', 'Python, NumPy & Pandas', 'Foundations', 10, 'NumPy Quickstart', 'https://numpy.org/doc/stable/user/quickstart.html', 'Practice vectorized array operations instead of writing Python for-loops.', 'Load a dataset in Pandas and normalize numeric columns in NumPy.'),
      sk('ml-math', 'Linear Algebra & Calculus Basics', 'Foundations', 12, '3Blue1Brown Essence of Linear Algebra', 'https://www.3blue1brown.com/topics/linear-algebra', 'Focus on intuition (dot products, gradients) before memorizing formulas.', 'Implement gradient descent for a line fit in pure NumPy.', ['3Blue1Brown', 'https://www.youtube.com/@3blue1brown']),
      sk('ml-sklearn', 'Classical ML (Scikit-Learn)', 'Machine Learning', 14, 'Scikit-learn User Guide', 'https://scikit-learn.org/stable/user_guide.html', 'Always split train/test data first to prevent data leakage.', 'Train and evaluate a house price predictor and spam classifier.', ['StatQuest ML', 'https://www.youtube.com/@StatQuest']),
      sk('ml-dl', 'Deep Learning (PyTorch)', 'Deep Learning', 16, 'PyTorch Tutorials', 'https://pytorch.org/tutorials/beginner/basics/intro.html', 'Print tensor shapes at every layer when debugging neural networks.', 'Train a small image classifier on CIFAR-10 or MNIST.', ['Andrej Karpathy: Zero to Hero', 'https://www.youtube.com/@AndrejKarpathy']),
      sk('ml-nlp', 'NLP & Transformers (Hugging Face)', 'AI Specialization', 10, 'Hugging Face NLP Course', 'https://huggingface.co/learn/nlp-course', 'Start with pretrained models and fine-tune before training from scratch.', 'Build a sentiment analyzer or document summarizer script.'),
      sk('ml-llm', 'LLM Apps, Prompting & RAG', 'AI Specialization', 10, 'Prompt Engineering Guide', 'https://www.promptingguide.ai/', 'Evaluate outputs with a small test set instead of guessing prompt quality.', 'Build a Q&A bot over your own PDF notes using embeddings.', ['Andrej Karpathy: Intro to LLMs', 'https://www.youtube.com/watch?v=zjkBMFhNj_g']),
      sk('ml-eval', 'Model Evaluation & Experiment Tracking', 'MLOps', 6, 'Kaggle: Intro to ML', 'https://www.kaggle.com/learn/intro-to-machine-learning', 'Track precision, recall and F1 — accuracy alone misleads on imbalanced data.', 'Compare 3 models and log metrics in a clean report.'),
      sk('ml-deploy', 'Serving Models with FastAPI', 'MLOps', 6, 'FastAPI Tutorial', 'https://fastapi.tiangolo.com/tutorial/', 'Wrap your trained model behind a simple JSON endpoint and test latency.', 'Deploy an ML prediction endpoint with input validation.')
    ]
  },
  {
    id: 'datasci',
    name: 'Data Scientist',
    github: ['microsoft/Data-Science-For-Beginners', 'https://github.com/microsoft/Data-Science-For-Beginners'],
    youtube: ['StatQuest with Josh Starmer', 'https://www.youtube.com/@StatQuest'],
    studyFrom: [
      ['Kaggle Learn', 'https://www.kaggle.com/learn'],
      ['StatQuest (Concepts)', 'https://statquest.org/'],
      ['Harvard CS109 Open Resources', 'https://cs109.github.io/2015/']
    ],
    skills: [
      sk('ds-py', 'Python for Data Science', 'Foundations', 10, 'Python Data Science Handbook', 'https://jakevdp.github.io/PythonDataScienceHandbook/', 'Work inside Jupyter notebooks and narrate each cell with markdown.', 'Explore a public Kaggle dataset and summarize 5 patterns.'),
      sk('ds-sql', 'SQL & Window Functions', 'Foundations', 10, 'Mode SQL Tutorial', 'https://mode.com/sql-tutorial/', 'Master CTEs and window functions (ROW_NUMBER, RANK, LAG).', 'Write cohort retention queries on sample user event data.'),
      sk('ds-stats', 'Probability & Hypothesis Testing', 'Statistics', 14, 'Seeing Theory', 'https://seeing-theory.brown.edu/', 'Simulate coin flips or A/B tests in Python to build intuition for p-values.', 'Run and interpret an A/B test on conversion rate data.', ['StatQuest Statistics', 'https://www.youtube.com/@StatQuest']),
      sk('ds-eda', 'EDA & Feature Engineering', 'Analysis', 10, 'Kaggle: Feature Engineering', 'https://www.kaggle.com/learn/feature-engineering', 'Plot distributions and correlations before choosing any algorithm.', 'Create 5 domain features and measure if model accuracy improves.'),
      sk('ds-ml', 'Supervised & Unsupervised ML', 'Modeling', 14, 'Scikit-learn Tutorials', 'https://scikit-learn.org/stable/tutorial/index.html', 'Start with a simple baseline model (linear/logistic) before complex trees.', 'Predict customer churn and explain the top 3 driving features.'),
      sk('ds-viz', 'Visualization (Matplotlib & Seaborn)', 'Communication', 6, 'Seaborn Tutorial', 'https://seaborn.pydata.org/tutorial.html', 'Remove chart clutter and put the main takeaway in the chart title.', 'Build an executive notebook with 5 clear, titled visuals.'),
      sk('ds-exp', 'Experiment Design & Metrics', 'Product', 6, 'Microsoft ExP Guide', 'https://exp-platform.com/', 'Define success metrics and guardrail metrics before starting any test.', 'Write a 1-page A/B experiment plan for a study app feature.')
    ]
  },
  {
    id: 'dataeng',
    name: 'Data Engineer',
    github: ['DataTalksClub/data-engineering-zoomcamp', 'https://github.com/DataTalksClub/data-engineering-zoomcamp'],
    youtube: ['DataTalksClub (Data Engineering Zoomcamp)', 'https://www.youtube.com/@DataTalksClub'],
    studyFrom: [
      ['DataTalksClub Zoomcamp', 'https://github.com/DataTalksClub/data-engineering-zoomcamp'],
      ['dbt Learn', 'https://courses.getdbt.com/'],
      ['PostgreSQL Docs', 'https://www.postgresql.org/docs/']
    ],
    skills: [
      sk('de-sql', 'Advanced SQL & Data Modeling', 'Foundations', 12, 'Postgres Tutorial', 'https://www.postgresqltutorial.com/', 'Learn star schemas (fact and dimension tables) before writing pipelines.', 'Model a retail analytics warehouse with facts and dimensions.'),
      sk('de-py', 'Python for ETL Scripts', 'Programming', 10, 'Python Docs: CSV & JSON', 'https://docs.python.org/3/library/csv.html', 'Make every script idempotent so running it twice does not duplicate data.', 'Write an ingestion script that loads API JSON into Postgres.'),
      sk('de-docker', 'Docker & Linux Containers', 'Infrastructure', 6, 'Docker Get Started', 'https://docs.docker.com/get-started/', 'Run Postgres and your Python script together with docker-compose.', 'Spin up a local Postgres + pgAdmin stack with Docker Compose.', ['TechWorld with Nana: Docker', 'https://www.youtube.com/@TechWorldwithNana']),
      sk('de-wh', 'Data Warehouses (BigQuery / Snowflake)', 'Storage', 8, 'Google Cloud BigQuery Docs', 'https://cloud.google.com/bigquery/docs/quickstarts', 'Use partitioning and clustering to keep query costs and scan size low.', 'Load public datasets into BigQuery and benchmark partitioned queries.'),
      sk('de-dbt', 'Data Transformation with dbt', 'Pipelines', 8, 'dbt Documentation', 'https://docs.getdbt.com/docs/introduction', 'Add schema tests (not_null, unique) to every core model.', 'Build staging and mart SQL models in dbt with tests.'),
      sk('de-orch', 'Workflow Orchestration (Airflow / Prefect)', 'Pipelines', 8, 'Apache Airflow Tutorial', 'https://airflow.apache.org/docs/apache-airflow/stable/tutorial/index.html', 'Keep tasks small, retry-safe and clearly dependent.', 'Schedule a daily ETL pipeline with retries and logging.'),
      sk('de-spark', 'Distributed Processing (PySpark)', 'Big Data', 10, 'Spark SQL & DataFrames Guide', 'https://spark.apache.org/docs/latest/sql-programming-guide.html', 'Understand partitions and shuffles before tuning Spark jobs.', 'Aggregate a multi-million-row Parquet dataset using PySpark.')
    ]
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud Engineer',
    github: ['bregman-arie/devops-exercises', 'https://github.com/bregman-arie/devops-exercises'],
    youtube: ['TechWorld with Nana (DevOps & K8s)', 'https://www.youtube.com/@TechWorldwithNana'],
    studyFrom: [
      ['roadmap.sh DevOps', 'https://roadmap.sh/devops'],
      ['AWS Skill Builder', 'https://explore.skillbuilder.aws/'],
      ['Kubernetes Docs', 'https://kubernetes.io/docs/tutorials/']
    ],
    skills: [
      sk('do-linux', 'Linux & Shell Scripting', 'Foundations', 10, 'Linux Journey', 'https://linuxjourney.com/', 'Automate repetitive commands in bash scripts with strict error checks.', 'Write a bash script that backs up logs and checks disk usage.', ['NetworkChuck Linux', 'https://www.youtube.com/@NetworkChuck']),
      sk('do-net', 'Networking & DNS Essentials', 'Foundations', 8, 'Cloudflare Learning Center', 'https://www.cloudflare.com/learning/', 'Trace requests using dig, curl -v, ping and ss/netstat.', 'Explain what happens from typing a URL to receiving HTTPS HTML.'),
      sk('do-git', 'Git & CI/CD (GitHub Actions)', 'Automation', 8, 'GitHub Actions Quickstart', 'https://docs.github.com/en/actions/quickstart', 'Automate linting and tests on every pull request first.', 'Create a GitHub Actions workflow that runs tests and builds on push.'),
      sk('do-docker', 'Docker & Containers', 'Containers', 10, 'Docker Curriculum', 'https://docker-curriculum.com/', 'Keep images small using multi-stage builds and .dockerignore.', 'Dockerize a web app and database with Docker Compose.', ['TechWorld with Nana: Docker', 'https://www.youtube.com/@TechWorldwithNana']),
      sk('do-cloud', 'Cloud Fundamentals (AWS / GCP)', 'Cloud', 12, 'AWS Cloud Practitioner Essentials', 'https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/', 'Learn IAM least-privilege permissions before launching compute resources.', 'Host a static site and a small API on a cloud free tier.'),
      sk('do-iac', 'Infrastructure as Code (Terraform)', 'Automation', 10, 'HashiCorp Terraform Tutorials', 'https://developer.hashicorp.com/terraform/tutorials', 'Always run terraform plan and inspect the diff before apply.', 'Provision cloud storage and networking using Terraform.'),
      sk('do-k8s', 'Kubernetes Basics', 'Containers', 12, 'Kubernetes Basics', 'https://kubernetes.io/docs/tutorials/kubernetes-basics/', 'Run Pods, Deployments and Services locally with minikube or kind.', 'Deploy a multi-container app to a local Kubernetes cluster.', ['TechWorld with Nana: Kubernetes', 'https://www.youtube.com/@TechWorldwithNana']),
      sk('do-obs', 'Monitoring & Logging (Prometheus/Grafana)', 'Operations', 6, 'Prometheus Getting Started', 'https://prometheus.io/docs/prometheus/latest/getting_started/', 'Alert on symptoms users feel (latency, error rate), not noisy CPU spikes.', 'Set up a local Prometheus + Grafana dashboard for an app.')
    ]
  },
  {
    id: 'cyber',
    name: 'Cybersecurity Analyst',
    github: ['fabacab/awesome-cybersecurity-blueteam', 'https://github.com/fabacab/awesome-cybersecurity-blueteam'],
    youtube: ['NetworkChuck (Security & Networking)', 'https://www.youtube.com/@NetworkChuck'],
    studyFrom: [
      ['TryHackMe', 'https://tryhackme.com/'],
      ['PortSwigger Web Security Academy', 'https://portswigger.net/web-security'],
      ['OWASP Top 10', 'https://owasp.org/www-project-top-ten/']
    ],
    skills: [
      sk('sec-net', 'Computer Networking & TCP/IP', 'Foundations', 10, 'Professor Messer Network+', 'https://www.professormesser.com/network-plus/n10-008/n10-008-video/n10-008-training-course/', 'Capture traffic in Wireshark to see TCP handshakes, DNS and HTTP.', 'Inspect a packet capture file and identify suspicious requests.', ['NetworkChuck Networking', 'https://www.youtube.com/@NetworkChuck']),
      sk('sec-os', 'Linux & Windows Security Basics', 'Foundations', 8, 'OverTheWire: Bandit', 'https://overthewire.org/wargames/bandit/', 'Learn file permissions, processes, services and system logs.', 'Complete the first 15 levels of OverTheWire Bandit.'),
      sk('sec-core', 'Security Fundamentals (CIA & IAM)', 'Core Security', 6, 'NIST Cybersecurity Framework', 'https://www.nist.gov/cyberframework', 'Map real incidents to Confidentiality, Integrity and Availability.', 'Audit your own accounts and enable MFA + password manager.'),
      sk('sec-web', 'Web Security (OWASP Top 10)', 'AppSec', 12, 'PortSwigger Web Security Academy', 'https://portswigger.net/web-security', 'Practice finding AND fixing SQL injection, XSS and broken auth.', 'Solve 5 beginner labs on PortSwigger Academy.'),
      sk('sec-py', 'Python & Bash for Automation', 'Scripting', 8, 'Automate the Boring Stuff', 'https://automatetheboringstuff.com/', 'Write small scripts to parse log files and flag anomalies.', 'Write a Python script that detects brute-force IPs in an auth log.'),
      sk('sec-siem', 'SIEM, Log Analysis & Incident Response', 'Blue Team', 10, 'TryHackMe SOC Level 1 Path', 'https://tryhackme.com/path/outline/soclevel1', 'Always build a timeline of who, what, when and from which IP.', 'Investigate a simulated phishing alert and write an incident note.'),
      sk('sec-scan', 'Vulnerability Scanning & Threat Intel', 'Blue Team', 6, 'Nmap Official Guide', 'https://nmap.org/book/man.html', 'Only scan systems you own or have explicit lab permission to test.', 'Scan your own local lab VM with Nmap and document open ports.')
    ]
  },
  {
    id: 'uiux',
    name: 'UI/UX Designer',
    github: ['liuchong/awesome-roadmaps', 'https://github.com/liuchong/awesome-roadmaps'],
    youtube: ['Figma Official Tutorials', 'https://www.youtube.com/@Figma'],
    studyFrom: [
      ['Figma Learn Design', 'https://www.figma.com/resource-library/design-basics/'],
      ['Laws of UX', 'https://lawsofux.com/'],
      ['WebAIM Accessibility', 'https://webaim.org/intro/']
    ],
    skills: [
      sk('ux-prin', 'Visual Design & Typography', 'Foundations', 8, 'Material Design 3', 'https://m3.material.io/', 'Study spacing, contrast and type hierarchy on apps you use daily.', 'Redesign a cluttered screen using an 8px spacing grid.'),
      sk('ux-laws', 'UX Principles & Psychology', 'Foundations', 6, 'Laws of UX', 'https://lawsofux.com/', 'Pick 3 UX laws and spot where real websites follow or break them.', 'Write a 5-point UX critique of a college or government site.'),
      sk('ux-res', 'User Research & Personas', 'Research', 8, 'Nielsen Norman Group Articles', 'https://www.nngroup.com/articles/', 'Ask open-ended questions about past behavior, never leading questions.', 'Interview 3 peers about a daily problem and map their pain points.'),
      sk('ux-ia', 'User Flows & Wireframing', 'Design', 6, 'Figma: Wireframing Guide', 'https://www.figma.com/resource-library/what-is-wireframing/', 'Sketch flows with pen and paper first before opening any design tool.', 'Draw low-fidelity wireframes for a 4-screen mobile checkout flow.'),
      sk('ux-figma', 'Figma & Interactive Prototyping', 'Tools', 12, 'Figma Learn', 'https://help.figma.com/hc/en-us/categories/360002051613-Get-started', 'Use Auto Layout and reusable Components from day one.', 'Build a clickable high-fidelity prototype in Figma.', ['Figma Official Channel', 'https://www.youtube.com/@Figma']),
      sk('ux-sys', 'Design Systems & Tokens', 'Systems', 6, 'Design Systems Handbook', 'https://www.designbetter.co/design-systems-handbook', 'Standardize colors, type scales, buttons and form states in one place.', 'Create a mini style guide with buttons, inputs and cards.'),
      sk('ux-a11y', 'Accessibility (WCAG & Contrast)', 'Quality', 4, 'WebAIM Contrast & WCAG', 'https://webaim.org/articles/contrast/', 'Check color contrast ratios and keyboard focus states on every screen.', 'Audit your Figma prototype for AA contrast and readable font sizes.'),
      sk('ux-test', 'Usability Testing & Portfolio', 'Research', 6, 'NNg Usability Testing 101', 'https://www.nngroup.com/articles/usability-testing-101/', 'Watch users try your prototype without helping them — note where they hesitate.', 'Test your prototype with 3 people and publish a 1-page case study.')
    ]
  },
  {
    id: 'qa',
    name: 'QA & Automation Engineer',
    github: ['kamranahmedse/developer-roadmap', 'https://github.com/kamranahmedse/developer-roadmap'],
    youtube: ['freeCodeCamp.org (QA & Playwright)', 'https://www.youtube.com/@freecodecamp'],
    studyFrom: [
      ['Test Automation University', 'https://testautomationu.applitools.com/'],
      ['Playwright Docs', 'https://playwright.dev/docs/intro'],
      ['Ministry of Testing', 'https://www.ministryoftesting.com/']
    ],
    skills: [
      sk('qa-fund', 'Software Testing Fundamentals', 'Foundations', 6, 'ISTQB Syllabus (Free PDF)', 'https://www.istqb.org/certifications/certified-tester-foundation-level', 'Learn boundary values, equivalence partitioning and test pyramid levels.', 'Write 10 test cases (positive and negative) for a login form.'),
      sk('qa-bug', 'Bug Reporting & Test Plans', 'Foundations', 4, 'Atlassian QA Testing Guide', 'https://www.atlassian.com/continuous-delivery/software-testing', 'Every bug report needs clear steps, expected result and actual result.', 'Log 5 reproducible bug reports on an open-source demo app.'),
      sk('qa-js', 'JavaScript or Python for Testing', 'Programming', 8, 'javascript.info', 'https://javascript.info', 'Focus on functions, async/await, assertions and reading stack traces.', 'Write small assertion scripts checking API JSON shapes.'),
      sk('qa-api', 'API Testing (Postman & REST)', 'API Testing', 8, 'Postman Learning Center', 'https://learning.postman.com/docs/getting-started/overview/', 'Test status codes, headers, error payloads and edge inputs.', 'Build a Postman collection with automated assertions for 5 endpoints.'),
      sk('qa-pw', 'End-to-End Automation (Playwright)', 'Automation', 12, 'Playwright Getting Started', 'https://playwright.dev/docs/intro', 'Use resilient user-facing locators (role, text, label) instead of fragile CSS paths.', 'Automate signup, login and checkout flows in Playwright.'),
      sk('qa-sql', 'SQL for Backend Verification', 'Database', 6, 'SQLBolt', 'https://sqlbolt.com', 'Verify database rows directly after UI or API actions.', 'Write SQL checks to confirm order totals and user states.'),
      sk('qa-ci', 'CI/CD Test Pipelines (GitHub Actions)', 'Tools', 4, 'Playwright CI Guide', 'https://playwright.dev/docs/ci-intro', 'Run smoke tests automatically on every pull request.', 'Configure GitHub Actions to run your Playwright suite and upload traces.')
    ]
  },

  // --- FUTURE & EMERGING ROLES (2026-2030) ---
  {
    id: 'genai',
    name: 'AI Agent & Generative AI Engineer',
    future: true,
    github: ['langchain-ai/langgraph', 'https://github.com/langchain-ai/langgraph'],
    youtube: ['Andrej Karpathy: Intro to Large Language Models', 'https://www.youtube.com/watch?v=zjkBMFhNj_g'],
    studyFrom: [
      ['Hugging Face Learn', 'https://huggingface.co/learn'],
      ['Prompt Engineering Guide', 'https://www.promptingguide.ai/'],
      ['LangGraph Docs', 'https://langchain-ai.github.io/langgraph/']
    ],
    skills: [
      sk('gai-py', 'Python, Async & Structured JSON APIs', 'Foundations', 8, 'FastAPI & Pydantic Docs', 'https://fastapi.tiangolo.com/tutorial/', 'Use Pydantic schemas to enforce reliable JSON outputs from LLM calls.', 'Build an async Python script that calls a model and validates its JSON.'),
      sk('gai-llm', 'LLM Internals & Tokenization', 'Foundations', 6, 'Hugging Face LLM Course', 'https://huggingface.co/learn/nlp-course', 'Understand context windows, temperature, embeddings and token pricing.', 'Count tokens and compare latency vs quality across 2 model sizes.', ['Andrej Karpathy: Intro to LLMs', 'https://www.youtube.com/watch?v=zjkBMFhNj_g']),
      sk('gai-prompt', 'Prompt Engineering & Reasoning Patterns', 'Core AI', 6, 'Prompt Engineering Guide', 'https://www.promptingguide.ai/', 'Test few-shot examples and ReAct reasoning on tricky edge cases.', 'Create a reusable prompt template for classifying support tickets.'),
      sk('gai-rag', 'Vector Databases & Production RAG', 'Retrieval', 12, 'Hugging Face RAG Cookbook', 'https://huggingface.co/learn/cookbook/index', 'Tune chunk size, overlap and hybrid search before switching models.', 'Build a Q&A assistant over your own notes with source citations.'),
      sk('gai-mcp', 'Tool Calling & MCP (Model Context Protocol)', 'Agents', 8, 'Model Context Protocol Docs', 'https://modelcontextprotocol.io/introduction', 'Keep tool schemas narrow, well-typed and safe against invalid arguments.', 'Connect an agent to a calculator, web search or local file tool.'),
      sk('gai-agent', 'Multi-Step Agent Loops (LangGraph / CrewAI)', 'Agents', 12, 'LangGraph Tutorials', 'https://langchain-ai.github.io/langgraph/tutorials/introduction/', 'Add max-step limits and human-in-the-loop checkpoints for risky actions.', 'Build a research agent that plans, searches and drafts a summary.'),
      sk('gai-eval', 'Agent Evals, Tracing & Guardrails', 'Quality', 6, 'OpenAI / LangSmith Eval Guides', 'https://docs.smith.langchain.com/', 'Build a 20-case golden test set and score every prompt/model change.', 'Measure accuracy and cost per task on your RAG agent.')
    ]
  },
  {
    id: 'mlops',
    name: 'MLOps & LLMOps Engineer',
    future: true,
    github: ['karpathy/nn-zero-to-hero', 'https://github.com/karpathy/nn-zero-to-hero'],
    youtube: ['DataTalksClub (MLOps & Data)', 'https://www.youtube.com/@DataTalksClub'],
    studyFrom: [
      ['MLflow Documentation', 'https://mlflow.org/docs/latest/index.html'],
      ['Kubernetes Docs', 'https://kubernetes.io/docs/tutorials/'],
      ['Hugging Face Learn', 'https://huggingface.co/learn']
    ],
    skills: [
      sk('mlo-pkg', 'Reproducible Python & Data Versioning', 'Foundations', 6, 'Python Packaging Guide', 'https://packaging.python.org/en/latest/tutorials/packaging-projects/', 'Pin dependency versions and seed random generators for every run.', 'Package a training script cleanly with pyproject.toml and Git.'),
      sk('mlo-docker', 'Docker & GPU Containers', 'Infrastructure', 8, 'Docker Get Started', 'https://docs.docker.com/get-started/', 'Separate base model weights from thin inference code layers.', 'Containerize a PyTorch or Hugging Face inference service.'),
      sk('mlo-track', 'Experiment & Prompt Tracking (MLflow)', 'Pipelines', 8, 'MLflow Tracking Quickstart', 'https://mlflow.org/docs/latest/getting-started/intro-quickstart/index.html', 'Log parameters, dataset hashes, metrics and artifacts on every run.', 'Track 5 training runs in MLflow and register the best model.'),
      sk('mlo-serve', 'High-Throughput Model & LLM Serving', 'Serving', 10, 'FastAPI / vLLM Docs', 'https://docs.vllm.ai/en/latest/', 'Benchmark tokens/sec, batching and quantization (INT8/FP16) tradeoffs.', 'Serve a quantized open-weight model behind a streaming API.'),
      sk('mlo-cicd', 'Automated Training & Eval Pipelines (CI/CD)', 'Automation', 8, 'GitHub Actions Docs', 'https://docs.github.com/en/actions/quickstart', 'Block model promotion automatically if offline eval scores drop.', 'Build a CI workflow that tests data schema and model latency.'),
      sk('mlo-k8s', 'Kubernetes Scaling for AI Workloads', 'Infrastructure', 10, 'Kubernetes Basics', 'https://kubernetes.io/docs/tutorials/kubernetes-basics/', 'Configure readiness probes so traffic waits until model weights finish loading.', 'Deploy a model service with health checks and autoscaling rules.', ['TechWorld with Nana: K8s', 'https://www.youtube.com/@TechWorldwithNana']),
      sk('mlo-mon', 'Drift, Latency & Cost Monitoring', 'Operations', 6, 'Prometheus Docs', 'https://prometheus.io/docs/prometheus/latest/getting_started/', 'Monitor input distribution shift, token spend and p95 latency daily.', 'Create a dashboard tracking inference latency and error rates.')
    ]
  },
  {
    id: 'aisafety',
    name: 'AI Safety & Governance Specialist',
    future: true,
    github: ['fabacab/awesome-cybersecurity-blueteam', 'https://github.com/fabacab/awesome-cybersecurity-blueteam'],
    youtube: ['Andrej Karpathy: LLM Security & Alignment', 'https://www.youtube.com/watch?v=zjkBMFhNj_g'],
    studyFrom: [
      ['NIST AI Risk Management Framework', 'https://www.nist.gov/itl/ai-risk-management-framework'],
      ['OWASP Top 10 for LLMs', 'https://owasp.org/www-project-top-10-for-large-language-model-applications/'],
      ['Hugging Face Ethics & Safety', 'https://huggingface.co/learn']
    ],
    skills: [
      sk('ais-llm', 'LLM Failure Modes (Hallucinations & Bias)', 'Foundations', 6, 'Andrej Karpathy / Prompt Guide', 'https://www.promptingguide.ai/risks/adversarial', 'Catalog real failure patterns: fabrication, sycophancy and demographic bias.', 'Audit an LLM on 15 factual and fairness edge-case prompts.', ['Andrej Karpathy: Intro to LLMs', 'https://www.youtube.com/watch?v=zjkBMFhNj_g']),
      sk('ais-sec', 'OWASP Top 10 for LLM Apps', 'Security', 10, 'OWASP LLM Top 10', 'https://owasp.org/www-project-top-10-for-large-language-model-applications/', 'Understand direct vs indirect prompt injection and insecure tool output handling.', 'Write a checklist defending a RAG app against indirect injection.'),
      sk('ais-red', 'AI Red-Teaming & Adversarial Testing', 'Testing', 10, 'NIST AI RMF Playbook', 'https://airc.nist.gov/AI_RMF_Knowledge_Base/Playbook', 'Test multi-turn jailbreaks, roleplay bypasses and PII leakage systematically.', 'Run a structured 20-prompt red-team test on an open demo chatbot.'),
      sk('ais-eval', 'Automated Safety Evals & Benchmarks', 'Testing', 8, 'Hugging Face Evaluate Docs', 'https://huggingface.co/docs/evaluate/index', 'Automate toxicity, groundedness and refusal accuracy checks in Python.', 'Write a Python eval script scoring groundedness on RAG answers.'),
      sk('ais-guard', 'Guardrails, Filtering & Sandboxing', 'Engineering', 8, 'OWASP Cheat Sheets', 'https://cheatsheetseries.owasp.org/', 'Validate tool arguments and sandbox code execution — never trust raw model text.', 'Add input/output PII redaction and allowlist checks to a script.'),
      sk('ais-gov', 'AI Compliance & Risk Governance', 'Governance', 8, 'NIST AI RMF', 'https://www.nist.gov/itl/ai-risk-management-framework', 'Map every AI feature by risk tier: data provenance, human oversight and audit logs.', 'Draft a 1-page Model Card and risk assessment for a student advisor bot.')
    ]
  },
  {
    id: 'robotics',
    name: 'Robotics & Embodied AI Engineer',
    future: true,
    github: ['ros2/ros2', 'https://github.com/ros2/ros2'],
    youtube: ['freeCodeCamp.org (C++, Python & Robotics)', 'https://www.youtube.com/@freecodecamp'],
    studyFrom: [
      ['ROS 2 Official Docs', 'https://docs.ros.org/en/humble/'],
      ['OpenCV Tutorials', 'https://docs.opencv.org/4.x/d9/df8/tutorial_root.html'],
      ['PyTorch Tutorials', 'https://pytorch.org/tutorials/']
    ],
    skills: [
      sk('rob-cpp', 'Linux, Python & Modern C++', 'Foundations', 14, 'LearnCpp.com', 'https://www.learncpp.com/', 'Practice pointers, references and memory safety for real-time control loops.', 'Write a C++ or Python state machine for a simulated robot.'),
      sk('rob-math', 'Linear Algebra & 3D Kinematics', 'Foundations', 12, '3Blue1Brown Linear Algebra', 'https://www.3blue1brown.com/topics/linear-algebra', 'Visualize rotation matrices and coordinate frame transforms (TF2).', 'Compute 2D forward kinematics for a 2-joint robotic arm in Python.', ['3Blue1Brown', 'https://www.youtube.com/@3blue1brown']),
      sk('rob-ros', 'ROS 2 Architecture (Nodes, Topics, Services)', 'Robotics Core', 14, 'ROS 2 Tutorials', 'https://docs.ros.org/en/humble/Tutorials.html', 'Build a publisher/subscriber pair before touching hardware or simulation.', 'Create a ROS 2 talker/listener package using colcon.'),
      sk('rob-sim', 'URDF Modeling & Gazebo Simulation', 'Simulation', 10, 'Gazebo Docs', 'https://gazebosim.org/docs', 'Test every controller in simulation before deploying to physical motors.', 'Spawn a differential-drive robot model in Gazebo and drive it.'),
      sk('rob-cv', 'Computer Vision & Sensor Fusion (OpenCV)', 'Perception', 10, 'OpenCV Python Tutorials', 'https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html', 'Combine camera frames with LiDAR/IMU readings to handle noisy environments.', 'Write an OpenCV script that tracks colored objects or AprilTags.'),
      sk('rob-nav', 'SLAM & Autonomous Navigation (Nav2)', 'Autonomy', 10, 'Nav2 Documentation', 'https://docs.nav2.org/', 'Understand costmaps, localization and path planners separately.', 'Map a simulated room and navigate between 3 waypoints.'),
      sk('rob-rl', 'Reinforcement Learning & Embodied AI', 'AI Control', 10, 'Gymnasium Docs', 'https://gymnasium.farama.org/', 'Start with simple CartPole reward shaping before complex manipulation.', 'Train an RL policy on a classic control environment in Python.')
    ]
  },
  {
    id: 'quantum',
    name: 'Quantum Computing Developer',
    future: true,
    github: ['Qiskit/qiskit-tutorials', 'https://github.com/Qiskit/qiskit-tutorials'],
    youtube: ['Qiskit Official Channel', 'https://www.youtube.com/@Qiskit'],
    studyFrom: [
      ['IBM Quantum Learning', 'https://learning.quantum.ibm.com/'],
      ['Qiskit Documentation', 'https://docs.quantum.ibm.com/'],
      ['3Blue1Brown Linear Algebra', 'https://www.3blue1brown.com/topics/linear-algebra']
    ],
    skills: [
      sk('qtm-math', 'Linear Algebra & Complex Vector Spaces', 'Foundations', 12, '3Blue1Brown Linear Algebra', 'https://www.3blue1brown.com/topics/linear-algebra', 'Master eigenvectors, unitary matrices and tensor products geometrically.', 'Verify unitary matrix multiplication by hand and in NumPy.', ['3Blue1Brown', 'https://www.youtube.com/@3blue1brown']),
      sk('qtm-py', 'Python & NumPy Scientific Computing', 'Foundations', 6, 'NumPy Quickstart', 'https://numpy.org/doc/stable/user/quickstart.html', 'Represent qubit statevectors and gate matrices directly as NumPy arrays.', 'Simulate a 2-qubit tensor product state in pure NumPy.'),
      sk('qtm-bit', 'Qubits, Superposition & Entanglement', 'Quantum Core', 8, 'IBM Quantum Learning: Basics', 'https://learning.quantum.ibm.com/course/basics-of-quantum-information', 'Trace measurement probabilities on the Bloch sphere after each gate.', 'Explain Bell states and quantum entanglement in plain words.', ['Qiskit Tutorials', 'https://www.youtube.com/@Qiskit']),
      sk('qtm-gate', 'Quantum Gates & Circuit Diagrams', 'Quantum Core', 8, 'Qiskit Circuit Library', 'https://docs.quantum.ibm.com/api/qiskit/circuit_library', 'Practice combining Hadamard, Pauli-X/Z and CNOT gates step by step.', 'Draw and simulate a circuit that creates a 2-qubit Bell state.'),
      sk('qtm-sdk', 'Quantum Programming with Qiskit', 'Frameworks', 10, 'Qiskit Hello World', 'https://docs.quantum.ibm.com/guides/hello-world', 'Run circuits locally with statevector simulators before submitting cloud jobs.', 'Build and visualize measurement histograms for a 3-qubit circuit.'),
      sk('qtm-algo', 'Quantum Algorithms (Grover, VQE, QAOA)', 'Algorithms', 12, 'IBM Quantum Algorithms Course', 'https://learning.quantum.ibm.com/course/fundamentals-of-quantum-algorithms', 'Understand amplitude amplification before diving into variational circuits.', 'Implement Grover search for a 2-qubit target state in Qiskit.'),
      sk('qtm-qec', 'Noise, Error Mitigation & Cloud QPUs', 'Hardware', 6, 'Qiskit Runtime Primitives', 'https://docs.quantum.ibm.com/guides/primitives', 'Compare ideal simulator counts with noisy hardware backend results.', 'Transpile a circuit for a real quantum backend and inspect gate depth.')
    ]
  },
  {
    id: 'xr',
    name: 'Spatial Computing (AR/VR) Developer',
    future: true,
    github: ['kamranahmedse/developer-roadmap', 'https://github.com/kamranahmedse/developer-roadmap'],
    youtube: ['freeCodeCamp.org (3D, Unity & WebXR)', 'https://www.youtube.com/@freecodecamp'],
    studyFrom: [
      ['Three.js Documentation', 'https://threejs.org/docs/'],
      ['Unity Learn', 'https://learn.unity.com/'],
      ['MDN WebXR Device API', 'https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API']
    ],
    skills: [
      sk('xr-math', '3D Math (Vectors, Matrices, Quaternions)', 'Foundations', 8, 'Immersive Linear Algebra', 'https://immersivemath.com/ila/index.html', 'Learn why quaternions avoid gimbal lock when rotating 3D objects.', 'Write a small script that orbits a camera around a 3D cube.'),
      sk('xr-code', 'C# (Unity) or TypeScript (WebXR)', 'Programming', 10, 'Unity Learn: Junior Programmer', 'https://learn.unity.com/pathway/junior-programmer', 'Keep frame-update logic clean and avoid heavy allocations inside render loops.', 'Build an interactive 3D object selector in Unity or Three.js.'),
      sk('xr-3d', '3D Scenes, Lighting & Shaders', 'Graphics', 10, 'Three.js Manual', 'https://threejs.org/manual/', 'Start with PBR materials and basic directional + ambient lights.', 'Create an interactive 3D product viewer in the browser.'),
      sk('xr-ux', 'Spatial UX & Ergonomic Design', 'Design', 6, 'MDN WebXR Fundamentals', 'https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Fundamentals', 'Keep UI panels comfortable at 1.5m–2m distance and avoid sudden camera motion.', 'Prototype a comfortable floating HUD menu in 3D space.'),
      sk('xr-track', 'Hand Tracking, Spatial Anchors & Audio', 'XR SDKs', 8, 'OpenXR / WebXR Input', 'https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API/Inputs', 'Design interactions that work smoothly with both controllers and bare hands.', 'Add grab-and-place interaction to a 3D scene.'),
      sk('xr-perf', 'Performance & 90 FPS Optimization', 'Optimization', 6, 'Unity / WebGL Performance', 'https://threejs.org/manual/#en/optimize-lots-of-objects', 'Measure draw calls and frame time early so headsets never drop frames.', 'Optimize a 3D scene with instancing and compressed textures.')
    ]
  },
  {
    id: 'sre',
    name: 'Platform & Site Reliability Engineer (SRE)',
    future: true,
    github: ['bregman-arie/devops-exercises', 'https://github.com/bregman-arie/devops-exercises'],
    youtube: ['TechWorld with Nana (DevOps & SRE)', 'https://www.youtube.com/@TechWorldwithNana'],
    studyFrom: [
      ['Google SRE Book (Free)', 'https://sre.google/sre-book/table-of-contents/'],
      ['OpenTelemetry Docs', 'https://opentelemetry.io/docs/'],
      ['Kubernetes Docs', 'https://kubernetes.io/docs/tutorials/']
    ],
    skills: [
      sk('sre-linux', 'Linux Internals, Networking & Triage', 'Foundations', 10, 'Linux Journey', 'https://linuxjourney.com/', 'Practice diagnosing CPU, memory, disk I/O and socket bottlenecks from CLI.', 'Debug a simulated slow server using top/htop, iostat and curl.'),
      sk('sre-slo', 'SLIs, SLOs & Error Budgets', 'Reliability', 6, 'Google SRE Workbook: SLOs', 'https://sre.google/workbook/implementing-slos/', 'Tie alerts to error-budget burn rate instead of paging on minor blips.', 'Define 3 SLIs and SLOs for a web API with an error budget policy.'),
      sk('sre-k8s', 'Kubernetes Operations & Helm', 'Platform', 12, 'Kubernetes Documentation', 'https://kubernetes.io/docs/tutorials/kubernetes-basics/', 'Practice rolling updates, rollbacks and pod disruption budgets.', 'Package and upgrade a service on local Kubernetes with Helm.', ['TechWorld with Nana: K8s', 'https://www.youtube.com/@TechWorldwithNana']),
      sk('sre-iac', 'GitOps & Terraform Automation', 'Automation', 8, 'HashiCorp Terraform Tutorials', 'https://developer.hashicorp.com/terraform/tutorials', 'Treat infrastructure and platform config as versioned, reviewable code.', 'Provision repeatable staging and prod environments with Terraform.'),
      sk('sre-obs', 'Observability & OpenTelemetry', 'Observability', 8, 'OpenTelemetry Docs', 'https://opentelemetry.io/docs/getting-started/dev/', 'Correlate logs, metrics and distributed traces using a single trace ID.', 'Instrument a Node or Python API with OpenTelemetry traces.'),
      sk('sre-inc', 'Incident Response, Postmortems & Chaos', 'Operations', 6, 'Google SRE: Postmortem Culture', 'https://sre.google/sre-book/postmortem-culture/', 'Write blameless postmortems focused on system fixes, not human blame.', 'Run a game-day failure drill (kill a pod) and write a blameless postmortem.')
    ]
  },
  {
    id: 'web3',
    name: 'Web3 & Smart Contract Engineer',
    future: true,
    github: ['kamranahmedse/developer-roadmap', 'https://github.com/kamranahmedse/developer-roadmap'],
    youtube: ['freeCodeCamp.org (Blockchain & Solidity)', 'https://www.youtube.com/@freecodecamp'],
    studyFrom: [
      ['Ethereum.org Developer Docs', 'https://ethereum.org/en/developers/docs/'],
      ['Solidity Docs', 'https://docs.soliditylang.org/'],
      ['Foundry Book', 'https://book.getfoundry.sh/']
    ],
    skills: [
      sk('w3-crypto', 'Cryptography, Hashing & Signatures', 'Foundations', 6, 'Ethereum.org Intro', 'https://ethereum.org/en/developers/docs/intro-to-ethereum/', 'Understand public/private keys, Keccak-256 hashing and digital signatures.', 'Sign and verify a message with a keypair in JavaScript.'),
      sk('w3-evm', 'Blockchain & EVM Architecture', 'Foundations', 6, 'Ethereum.org EVM Docs', 'https://ethereum.org/en/developers/docs/evm/', 'Trace how gas, storage slots and state transitions work inside a block.', 'Inspect a real testnet transaction on a block explorer.'),
      sk('w3-sol', 'Solidity & Token Standards (ERC-20/721)', 'Smart Contracts', 12, 'Solidity by Example', 'https://solidity-by-example.org/', 'Write minimal, explicit contracts — every storage write costs real gas.', 'Write a voting or crowdfunding smart contract in Solidity.'),
      sk('w3-test', 'Testing & Deployment (Foundry / Hardhat)', 'Tools', 8, 'Foundry Book', 'https://book.getfoundry.sh/', 'Write fuzz tests and invariant tests for every financial state transition.', 'Write 10 unit + fuzz tests for your contract using Foundry.'),
      sk('w3-sec', 'Smart Contract Security & Audits', 'Security', 8, 'SWC Registry / Consensys Best Practices', 'https://consensys.github.io/smart-contract-best-practices/', 'Check for reentrancy, integer edge cases and missing access control.', 'Audit a sample vulnerable contract and fix a reentrancy bug.'),
      sk('w3-dapp', 'dApp Frontend Integration (viem / wagmi)', 'Frontend', 6, 'viem Documentation', 'https://viem.sh/docs/getting-started', 'Always show clear transaction pending, confirmed and reverted states in UI.', 'Build a minimal React UI that reads and writes to your testnet contract.')
    ]
  }
];

const METHOD = [
  'Learn one small topic (30-45 min) from the linked source.',
  'Build something with it straight away. Aim for 70% building, 30% watching.',
  'Write 3 lines of notes in your own words.',
  'Test yourself the next day, then tick the skill.'
];
