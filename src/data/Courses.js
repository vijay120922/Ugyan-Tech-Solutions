const courses = [
  {
    title: "Data Science",
    description: "Uncover insights and build models using real-world data.",
    description1:
      "This Data Science course is designed to provide a solid foundation in data-driven decision making. You'll start with Python programming and data types, then move into data collection, cleaning, EDA, and data visualization. You'll apply machine learning techniques like regression, classification, clustering, and dimensionality reduction. The course ends with a capstone project to build a complete machine learning pipeline.",
    image: "/ds.jpg",
    lessons: [
      "Introduction to Data Science",
      "Python Basics for Data Science",
      "Types of Data (Structured & Unstructured)",
      "Data Collection & Cleaning",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization (Matplotlib, Seaborn)",
      "Introduction to Machine Learning",
      "Data Preparation for ML (Feature Engineering, Train-Test Split)",
      "Regression (Linear)",
      "Classification (Logistic)",
      "Clustering (K-Means)",
      "Dimensionality Reduction (PCA)",
      "Model Evaluation (Accuracy, Precision, Recall, F1)",
      "Project Work"
    ],
    extras: [
      "Lifetime Access",
      "Certificate of Completion",
      "Downloadable Notebooks & Datasets"
    ],
    duration: "2 Months (16 sessions, weekends)",
    careers: {
      roles: ["Data Analyst", "Machine Learning Engineer", "Business Intelligence Analyst"],
      package: "₹6–12 LPA (Entry) | ₹15+ LPA (Experienced)"
    }
  },
  {
    title: "Full Stack Web Development",
    description: "Learn to build complete web applications using MERN stack.",
    description1:
      "This MERN Stack course equips you to become a full-stack developer. Start with HTML, CSS, and modern JavaScript. Learn React for frontend development, build REST APIs with Node.js and Express, and integrate MongoDB for database operations. You'll add authentication with JWT, deploy apps using Vercel and Render, and complete the course with a live full-stack project.",
    image: "/web.jpg",
    lessons: [
      "HTML5, CSS3 & JavaScript (ES6+) Basics",
      "DOM Manipulation",
      "React Fundamentals (JSX, State, Props, Hooks)",
      "React Router, Context API, Custom Hooks",
      "Node.js & Express.js Backend",
      "REST API (CRUD, Middleware, Postman)",
      "MongoDB & Mongoose (Schema, Validation, Relationships)",
      "Full-Stack Integration (Axios, CORS, async/await)",
      "Authentication (JWT, Bcrypt, Role-based Access)",
      "Deployment (Vercel, Render, MongoDB Atlas)",
      "Final Project – Full MERN Stack App"
    ],
    extras: [
      "Lifetime Access",
      "Certificate of Completion",
      "Full Stack Projects & Source Code"
    ],
    duration: "8 Weeks",
    careers: {
      roles: ["Full Stack Developer", "Frontend/Backend Engineer"],
      package: "₹5–10 LPA (Entry) | ₹12+ LPA (Experienced)"
    }
  },
  {
    title: "Generative AI & Machine Learning",
    description: "Build intelligent systems using AI models and neural networks.",
    description1:
      "This Generative AI course teaches how to build intelligent tools using modern AI models. You’ll learn about LLMs like GPT, prompt engineering, APIs from OpenAI/Hugging Face, and tools like LangChain. By the end, you’ll be building real GenAI apps like chatbots, content generators, and image generators with a capstone project.",
    image: "/gen_ai.jpg",
    lessons: [
      "Generative AI Overview & Applications",
      "Python Refresher (Data types, loops, OOP, libraries)",
      "Prompt Engineering (Zero-shot, Few-shot, Role Prompting)",
      "Large Language Models (GPT, Claude, Mistral, etc.)",
      "OpenAI / Hugging Face / Gemini APIs",
      "Text-to-Image, Text-to-Audio, Image Captioning",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain & LlamaIndex",
      "Prompt Tuning vs Fine-Tuning",
      "Mini Projects (Chatbots, Resume Screener, Content Generators)",
      "Capstone Project – Functional GenAI App"
    ],
    extras: [
      "Lifetime Access",
      "Certificate of Completion",
      "Colab Notebooks & Model Files"
    ],
    duration: "4 Weeks (Full-Time / Hybrid)",
    careers: {
      roles: ["AI Engineer", "ML Researcher", "Deep Learning Developer"],
      package: "₹8–15 LPA (Entry) | ₹20+ LPA (Experienced)"
    }
  },
  {
    title: "VLSI Design",
    description: "Design high-performance digital circuits and chips.",
    description1:
      "The VLSI Design course is focused on digital system design using Verilog HDL. You'll explore combinational and sequential circuits, FSMs (Mealy & Moore), and real-world projects like traffic light and vending machine controllers. The course also includes testbench modeling and simulation.",
    image: "/vlsi.jpg",
    lessons: [
      "HDL for Digital System Designs",
      "Combinational Circuits (MUX, Encoders, Adders, Multipliers)",
      "Verilog HDL – Blocking & Non-blocking Assignments",
      "Sequential Circuits (Flip-Flops, Counters, Registers)",
      "FSMs (Mealy, Moore, Serial Adders, Parity Detectors)",
      "Sequence Detectors (Overlap/Non-overlap)",
      "Datapath & Control Path Design",
      "System Design Projects (GCD, Traffic Light, Vending Machine)",
      "Verilog Testbench Development"
    ],
    extras: [
      "Lifetime Access",
      "Certificate of Completion",
      "Lab Simulations & Projects"
    ],
    duration: "6–8 Weeks (Flexible Schedule)",
    careers: {
      roles: ["VLSI Design Engineer", "RTL Engineer", "Physical Design Engineer"],
      package: "₹6–10 LPA (Entry) | ₹15+ LPA (Experienced)"
    }
  }
];
export default courses;