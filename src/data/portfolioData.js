export const personalData = {
  name: "Saad Tamer Saad",
  shortName: "SAAD",
  role: "AI Engineer | Machine Learning · Data Science · Generative AI",
  avatar: "/profile.png",
  tagline: "Building practical Machine Learning, Computer Vision, and Generative AI systems that solve real-world problems.",
  
  // Exact About Me text from Saad's Presentation
  aboutHeadline: "WHO IS SAAD TAMER ?",
  aboutBio: "AI Engineer focused on building practical Machine Learning, Computer Vision, and Generative AI systems that solve real-world problems.",
  aboutSub: "My work combines AI engineering, data science, and software development to build end-to-end intelligent solutions using Python, TensorFlow, Scikit-learn, LangChain, FastAPI, and SQL.",
  
  location: "Menoufia, Egypt",
  phone: "+20 109 656 3130",
  email: "saadt.tamer8181@gmail.com",
  whatsapp: "https://wa.me/201096563130",
  github: "https://github.com/saadtamer",
  githubAlt: "https://github.com/saad1692001",
  linkedin: "https://www.linkedin.com/in/saad-tamer-67585a224/",
  availability: "Open to Full-Time Roles & Relocation",
  buildingSince: "2022",
  gpa: "3.55",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Upper-Intermediate (B2)" }
  ],
  stats: [
    { label: "Engineering GPA", value: "3.55" },
    { label: "Accredited Certs", value: "8+ Verified" },
    { label: "AI & ML Systems", value: "10+ Shipped" },
    { label: "Core Stacks", value: "GenAI & Vision" }
  ]
};

export const technicalPillars = [
  {
    title: "Machine Learning",
    description: "Building predictive models using Scikit-learn, with experience in classification, regression, clustering, data preprocessing, and feature engineering."
  },
  {
    title: "Deep Learning",
    description: "Developing neural network models using TensorFlow and Keras, including CNNs, RNNs, and LSTM architectures for complex pattern recognition."
  },
  {
    title: "AI Engineering",
    description: "Turning AI models into practical systems through Python, APIs, model integration, and production-oriented workflows."
  }
];

export const expertiseAreas = [
  {
    id: "genai",
    number: "01",
    title: "Generative AI & NLP",
    description: "LLMs, RAG, and Prompt Engineering enable intelligent systems to understand context, retrieve relevant knowledge, and generate accurate, useful responses.",
    technologies: ["LangChain", "Hugging Face", "Vector Stores", "Prompt Engineering", "Chatbot Development", "RAG Pipelines"]
  },
  {
    id: "agents",
    number: "02",
    title: "AI Agents & Autonomous Workflows",
    description: "Multi-agent systems using n8n and Google Gemini: conversational memory, dynamic intent delegation, schema validation, and automated notifications.",
    technologies: ["n8n", "AI Agents", "Google Gemini API", "Telegram Bots", "Tool Use", "Workflow Automation"]
  },
  {
    id: "vision",
    number: "03",
    title: "Computer Vision & OCR",
    description: "State-of-the-art vision pipelines: facial recognition, optical character recognition (OCR), and convolutional feature extraction (Score: 95% at NTI).",
    technologies: ["OpenCV", "Tesseract OCR", "Face Recognition", "Image Processing", "CNNs", "Transfer Learning"]
  },
  {
    id: "data",
    number: "04",
    title: "Data Science & Engineering",
    description: "Exploring data with Python & visualization libraries, cleaning and feature engineering for ML, and architecting relational SQL databases for AI integration.",
    technologies: ["Python", "SQL Server", "Pandas", "NumPy", "SciPy", "Scikit-Learn", "EDA", "Data Preprocessing"]
  },
  {
    id: "backend",
    number: "05",
    title: "Full-Stack AI & MLOps",
    description: "Decoupled 5-layer system architectures: FastAPI backend microservices, React web applications, Flutter mobile apps, and Dockerized deployments.",
    technologies: ["FastAPI", "React", "Flutter", "Docker", "REST APIs", "JWT Security", "Git & GitHub"]
  }
];

export const projects = [
  {
    id: "mediverse",
    title: "MediVerse — AI-Powered Healthcare",
    badge: "Graduation Project · Top Honors",
    category: "Full-Stack AI & Healthcare",
    year: "2025 – 2026",
    image: "/projects/mediverse-poster-hd.jpg",
    secondaryImage: "/projects/presentation_slide_9.png",
    tertiaryImage: "/projects/mediverse-mobile-mockup.jpg",
    quaternaryImage: "/projects/mediverse-rx-ocr.png",
    summary: "An intelligent hospital management platform combining AI consultation, face recognition, drug interaction analysis, and healthcare workflows.",
    description: "MediVerse integrates clinical AI with enterprise healthcare operations. Tested in university labs and defended with distinction (GPA 3.55), it provides 10 connected modules spanning clinical consultation, doctors management, and laboratory diagnostics.",
    highlights: [
      "AI Medical Assistant & RAG-driven clinical consultation with multi-LLM support (GPT-4o, Gemini 1.5 Pro, Claude 3 Haiku, Llama 3.1 70B, DeepSeek).",
      "Facial Recognition patient identification and automated queue management.",
      "Automated drug-to-drug interaction analysis to prevent hazardous prescription collisions.",
      "Comprehensive 5-layer decoupled architecture: FastAPI backend, React web management, Flutter mobile client, and SQL Server."
    ],
    stack: ["FastAPI", "React", "Flutter", "SQL Server", "AI Models", "Computer Vision", "OCR", "JWT Authentication", "Role-Based Access"],
    github: "https://github.com/saadtamer",
    demo: null,
    metrics: "Defended with Top Honors (GPA 3.55)"
  },
  {
    id: "ai-chatbot-rag",
    title: "AI Chatbot & RAG — Generative AI System",
    badge: "Production GenAI Platform",
    category: "Generative AI & RAG",
    year: "2025 – 2026",
    image: "/projects/deep-learning-rag-ui.jpg",
    secondaryImage: "/projects/saad-ai-chatbot-ui.jpg",
    tertiaryImage: "/projects/saad-chatbot-voice.png",
    quaternaryImage: "/projects/presentation_slide_10.png",
    summary: "Intelligent LLM chatbot combining context-aware RAG, vector search, prompt engineering, Computer Vision, and OCR.",
    description: "A dual-core generative system: (1) An enterprise RAG pipeline that chunks, embeds, and indexes documents into vector stores with 0.8689 similarity score and sub-2.5s response latency. (2) A multimodal task-based assistant powered by OpenRouter and Nemotron with dynamic audio transcription and image analysis.",
    highlights: [
      "Context-aware RAG pipeline: document chunking, semantic embedding, vector retrieval, and grounded citation generation.",
      "Multimodal input handling: audio recording transcription and OpenCV/OCR document reading.",
      "Dynamic prompt engineering and memory buffer tracking the last 12 conversational turns."
    ],
    stack: ["LangChain", "FastAPI", "OpenRouter", "Vector Stores", "OpenCV", "Tesseract OCR", "Python", "Streamlit"],
    github: "https://github.com/saadtamer/saad_chat_bot_v1",
    demo: null,
    metrics: "95.2% Answer Relevance · 850+ Chunks"
  },
  {
    id: "n8n-customer-support",
    title: "AI Customer Support Automation",
    badge: "Autonomous Agent Workflow",
    category: "AI Agents & Automation",
    year: "2026",
    image: "/projects/n8n-customer-support-live.png",
    secondaryImage: "/projects/rag-pinecone-architecture.png",
    summary: "End-to-end intelligent customer support pipeline with n8n and Google Gemini with conversation memory and automated CRM logging.",
    description: "Developed an autonomous agent that converses with customers on Telegram, progressively extracts support details (name, email, order ID, complaint), updates corporate Google Sheets in real-time, and dispatches styled HTML confirmation emails via Gmail.",
    highlights: [
      "Google Gemini AI Agent with persistent conversation memory.",
      "Zero schema violation guarantee using structured output parsing.",
      "Orchestrated multi-service integration: Telegram, Google Sheets CRM, and Gmail API."
    ],
    stack: ["n8n", "Google Gemini API", "Telegram Bot API", "Google Sheets", "Gmail API", "Workflow Automation"],
    github: "https://github.com/saadtamer/AI-Customer-Support-Automation",
    demo: null,
    metrics: "100% Automated Intake & Dispatch"
  },
  {
    id: "enterprise-rag-assistant",
    title: "Enterprise RAG Customer Service Assistant",
    badge: "Vector Search Architecture",
    category: "Generative AI & RAG",
    year: "2026",
    image: "/projects/rag-pinecone-architecture.png",
    secondaryImage: "/projects/deep-learning-rag-ui.jpg",
    summary: "RAG-powered conversational assistant querying internal corporate PDF policies and documentation with grounded citations.",
    description: "Vector search platform over unstructured enterprise documents stored in Google Drive, enabling accurate customer Q&A with strict hallucination controls.",
    highlights: [
      "Vector search over unstructured PDF policies in Google Drive.",
      "Strict context injection and source attribution.",
      "Telegram bot interface with sub-second response times."
    ],
    stack: ["n8n", "Pinecone Vector DB", "Google Gemini", "Google Drive API", "Vector Embeddings"],
    github: "https://github.com/saadtamer/RAG-Customer-Service-Assistant",
    demo: null,
    metrics: "Grounded Real-time Document Q&A"
  },
  {
    id: "multi-llm-workflow",
    title: "Multi-LLM Intelligent Workflow Engine",
    badge: "Multi-Agent System",
    category: "AI Agents & Automation",
    year: "2026",
    image: "/projects/multi-llm-workflow-canvas.png",
    secondaryImage: "/projects/n8n-customer-support-live.png",
    summary: "Multi-agent system routing complex queries across specialized Gemini agents for intent summarization, strategic analysis, and auto-dispatch.",
    description: "Dynamic prompt decomposition pipeline that splits incoming requests between specialized sub-agents to minimize hallucinations and accelerate turnaround.",
    highlights: [
      "Dynamic prompt decomposition and multi-agent coordination.",
      "Zero-latency webhook triggers and asynchronous routing.",
      "Specialized sub-agent delegation for high accuracy."
    ],
    stack: ["n8n", "Google Gemini", "Multi-Agent Systems", "Telegram API", "Webhook Automation"],
    github: "https://github.com/saadtamer/Multi-LLM-Intelligent-Workflow",
    demo: null,
    metrics: "Dynamic Sub-agent Delegation"
  },
  {
    id: "customer-offer-acceptance",
    title: "Customer Offer Acceptance Prediction",
    badge: "NTI AI/ML Graduation Project",
    category: "Machine Learning & Data Science",
    year: "2024 – 2025",
    image: "/projects/customer-offer-acceptance-slide.png",
    secondaryImage: "/projects/nti-xgboost-roc-curve.png",
    tertiaryImage: "/projects/nti-bank-correlation-matrix.png",
    summary: "Machine learning model predicting banking customer offer acceptance based on financial and personal behavioral data.",
    description: "Built as the capstone graduation project for the NTI AI & Machine Learning Program. Handled full preprocessing, SMOTE imbalanced data handling, PCA dimensionality reduction, and evaluated Logistic Regression, Random Forest, and XGBoost models.",
    highlights: [
      "Achieved 0.80 AUC ROC score using fine-tuned XGBoost with PCA dimensionality reduction.",
      "Analyzed key demographic and financial risk drivers via comprehensive correlation matrix analysis.",
      "Engineered automated preprocessing pipeline for real-world banking dataset."
    ],
    stack: ["Python", "Scikit-Learn", "XGBoost", "Random Forest", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/saadtamer",
    demo: null,
    metrics: "0.80 AUC-ROC · NTI Capstone Project"
  },
  {
    id: "kaggle-ml-project",
    title: "Kaggle Machine Learning & Model Evaluation",
    badge: "Competitive ML & EDA",
    category: "Machine Learning & Data Science",
    year: "2024 – 2025",
    image: "/projects/kaggle-ml-presentation-slide.png",
    secondaryImage: "/projects/ml-evaluation-matrix.jpg",
    summary: "Classification and regression models on real-world datasets with rigorous cross-validation and visual error diagnostics.",
    description: "Applied end-to-end data science workflows on Kaggle benchmark datasets: deep exploratory data analysis (EDA), feature selection, hyperparameter tuning with GridSearchCV, and evaluating Confusion Matrices, Precision-Recall curves, and ROC AUC.",
    highlights: [
      "Rigorous diagnostic evaluation using Confusion Matrices and Precision-Recall tradeoffs.",
      "Iterative hyperparameter tuning across ensemble architectures.",
      "Clear, insight-driven data visualization dashboards."
    ],
    stack: ["Python", "Kaggle", "Scikit-Learn", "Matplotlib", "Seaborn", "Pandas", "NumPy"],
    github: "https://github.com/saadtamer",
    demo: null,
    metrics: "High-Rank Kaggle Notebooks"
  },
  {
    id: "pytorch-neural-networks",
    title: "Deep Learning & PyTorch Architectures",
    badge: "Model Research & Architectures",
    category: "Machine Learning & Data Science",
    year: "2024 – 2025",
    image: "/projects/pytorch-training-loss-curves.png",
    secondaryImage: "/projects/pytorch-cnn-accuracy-loss.png",
    tertiaryImage: "/projects/customer-churn-eda-matrix.png",
    summary: "Neural network topologies in PyTorch and TensorFlow: CNN image classifiers, ANN regression models, and customer churn predictors.",
    description: "Designed, trained, and fine-tuned custom deep learning models. Implemented custom PyTorch training loops, learning rate schedulers, early stopping, and batch normalization, achieving 99.8% validation accuracy on benchmark CNN vision tasks.",
    highlights: [
      "Custom PyTorch CNN achieving 99.8% accuracy on computer vision classification.",
      "Sequential and Functional API implementations with early stopping and dropout regularizers.",
      "Extensive Exploratory Data Analysis (EDA) on 20+ feature multi-channel datasets."
    ],
    stack: ["PyTorch", "TensorFlow", "Keras", "Python", "Computer Vision", "ANN", "CNN"],
    github: "https://github.com/saadtamer/ANN-PY_TORCH-sequential-funchinal_API-",
    demo: null,
    metrics: "99.8% CNN Benchmark Accuracy"
  },
  {
    id: "database-erd-solution",
    title: "Relational Database Design & Schema Engineering",
    badge: "Database Architecture",
    category: "Data Science & Engineering",
    year: "2024",
    image: "/projects/database-erd-solution.png",
    summary: "Conceptual schema design, entity-relationship modeling (ERD), key constraints, and SQL Server persistence.",
    description: "Architected complete relational database schemas resolving complex many-to-many cardinality constraints, entity keys, normalization forms (3NF), and bridging relational storage with backend AI microservices.",
    highlights: [
      "Comprehensive ERD diagram modeling entity relationships, composite keys, and foreign constraints.",
      "Strict data normalization preventing data anomalies and redundancy.",
      "Seamless integration with FastAPI backend and ORM data layers."
    ],
    stack: ["SQL Server", "Database Design", "ERD Modeling", "Relational Schema", "Data Normalization"],
    github: "https://github.com/saadtamer",
    demo: null,
    metrics: "3NF Normalized Relational Architecture"
  }
];

export const experience = [
  {
    role: "AI Engineer & Machine Learning Engineering Intern",
    company: "ZAWOLF.AI — SEG Investment Holding",
    companyNote: "UAE · Turkey · Egypt",
    period: "Aug 2026 – Oct 2026",
    location: "Egypt",
    highlights: [
      "Contributed to enterprise AI and machine learning initiatives at an investment holding company overseeing cross-border subsidiaries.",
      "Executed data preprocessing, feature engineering, and predictive model evaluation workflows on real-world financial and operational datasets.",
      "Prototyped AI-driven solutions supporting strategic operational decision-making."
    ]
  },
  {
    role: "AI Automation Trainee — N8N Professional Track",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    companyNote: "Ministry of Communications & Information Technology",
    period: "Jul 2026 – Present",
    location: "Egypt",
    highlights: [
      "Undergoing intensive practical training in building agentic AI automation workflows using n8n.",
      "Orchestrating autonomous AI agents, conversation memory engines, and API-driven enterprise pipelines.",
      "Deployed automated customer intelligence, document retrieval, and multi-LLM routing systems."
    ]
  },
  {
    role: "Programming & AI Instructor",
    company: "iSchool — Ministry of Communications (MCIT)",
    companyNote: "National Technology Education Initiative",
    period: "2026 – Present",
    location: "Menoufia, Egypt",
    highlights: [
      "Delivered in-person programming and artificial intelligence curricula across cohorts averaging 20 trainees.",
      "Instructed foundational and applied Python, machine learning workflows, and computational thinking.",
      "Mentored student teams participating in regional algorithmic and coding competitions."
    ]
  },
  {
    role: "AI Systems Developer",
    company: "Freelance / Self-Employed",
    companyNote: "Independent Solutions",
    period: "2025 – Present",
    location: "Menoufia, Egypt",
    highlights: [
      "Designed and deployed end-to-end custom AI platforms for independent clients.",
      "Integrated RAG pipelines, computer vision, OCR, and multi-agent automations into unified FastAPI microservices.",
      "Managed software lifecycle from client requirements discovery through production deployment."
    ]
  },
  {
    role: "AI & Machine Learning Training — Huawei Program (180h)",
    company: "National Telecommunication Institute (NTI)",
    companyNote: "180-Hour Intensive Program",
    period: "2024",
    location: "Menoufia, Egypt",
    highlights: [
      "Graduated from an intensive 180-hour advanced track covering Deep Learning, NLP, and predictive modeling.",
      "Implemented supervised and unsupervised algorithms with TensorFlow, Keras, and Scikit-learn on complex datasets."
    ]
  }
];

export const certifications = [
  {
    id: "cert-nti-cv",
    title: "Deep Learning for Computer Vision",
    issuer: "National Telecommunication Institute (NTI) & MCIT",
    issuerBadge: "72 Hours · Score: 95%",
    category: "AI & Machine Learning",
    date: "Dec 2025",
    skills: ["Deep Learning", "Computer Vision", "CNNs", "Transfer Learning", "Image Processing"],
    description: "Completed the Evening Digital Egypt Youth program with top score (95%). Covers state-of-the-art computer vision architectures, convolutional neural networks, and real-time inference.",
    credentialUrl: "https://nti.sci.eg",
    image: "/certificates/nti-deep-learning-cv.jpeg",
    verified: true,
    studentId: "180810"
  },
  {
    id: "cert-nti-ml",
    title: "Machine Learning for Data Analysis",
    issuer: "NTI & CREATIVA Innovation Hubs",
    issuerBadge: "120 Hours · Score: 97%",
    category: "AI & Machine Learning",
    date: "Sep 2025",
    skills: ["Supervised ML", "Unsupervised ML", "Data Analysis", "Feature Engineering", "Freelancing Coaching"],
    description: "Completed 90 Technical Hours + 30 Freelancing Coaching Hours with distinction (Score: 97%). Focused on end-to-end machine learning algorithms and practical market deliverables.",
    credentialUrl: "https://nti.sci.eg",
    image: "/certificates/nti-ml-data-analysis.jpeg",
    verified: true,
    studentId: "180810"
  },
  {
    id: "cert-huawei-hcia",
    title: "HCIA-AI V3.5 Course Certification",
    issuer: "Huawei Talent Online",
    issuerBadge: "Huawei Global Certified",
    category: "AI & Machine Learning",
    date: "Feb 2025",
    skills: ["Huawei AI Solutions", "Deep Learning", "TensorFlow & PyTorch", "AI Infrastructure"],
    description: "Official global course certificate from Huawei Talent Online validating passing grade in HCIA-AI V3.5 covering comprehensive modern AI architectures.",
    credentialUrl: "https://e.huawei.com/en/talent",
    image: "/certificates/huawei-hcia-ai.jpeg",
    verified: true
  },
  {
    id: "cert-nti-huawei-eta",
    title: "Artificial Intelligence (AI) Track",
    issuer: "NTI / Huawei Egyptian Talent Academy (ETA)",
    issuerBadge: "80 Hours · Score: 96%",
    category: "AI & Machine Learning",
    date: "Feb 2025",
    skills: ["Machine Learning", "Neural Computation", "Algorithm Design", "Model Evaluation"],
    description: "80 hours of intensive training within the prestigious NTI/Huawei Egyptian Talent Academy track, achieving an exceptional score of 96%.",
    credentialUrl: "https://nti.sci.eg",
    image: "/certificates/nti-huawei-ai-eta.jpeg",
    verified: true
  },
  {
    id: "cert-dubai-prompter",
    title: "1 Million Prompters — AI Prompt Engineering",
    issuer: "Dubai Future Foundation & Dubai Centre for AI",
    issuerBadge: "UAE Royal Initiative",
    category: "Generative AI & LLMs",
    date: "2024",
    skills: ["Prompt Engineering", "LLM Steering", "Few-Shot Learning", "Chain-of-Thought", "AI Systems"],
    description: "Completed the One Million Prompters initiative launched by H.H. Sheikh Hamdan bin Mohammed bin Rashid Al Maktoum, Crown Prince of Dubai, developing high-impact generative AI capabilities.",
    credentialUrl: "https://www.dubaifuture.ae",
    image: "/certificates/dubai-1m-prompters.jpeg",
    verified: true
  },
  {
    id: "cert-deeplearning-ai",
    title: "AI for Everyone (by Andrew Ng)",
    issuer: "DeepLearning.AI & Coursera",
    issuerBadge: "Andrew Ng Certified",
    category: "Generative AI & LLMs",
    date: "Dec 2024",
    skills: ["AI Strategy", "Machine Learning Workflows", "Data Engineering", "Enterprise AI"],
    description: "Foundational executive and technical certification on modern AI systems, machine learning workflows, and data strategy taught by AI pioneer Andrew Ng.",
    credentialUrl: "https://coursera.org/verify/WCR2CQVXQGA",
    image: "/certificates/deeplearning-ai-everyone.jpeg",
    verified: true
  },
  {
    id: "cert-ibm-python",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM & Coursera",
    issuerBadge: "IBM Certified",
    category: "AI & Machine Learning",
    date: "May 2025",
    skills: ["Python", "Pandas", "NumPy", "REST APIs", "Data Pipelines"],
    description: "Authorized course by IBM verifying mastery of Python data science stacks, asynchronous data pipelines, and RESTful API development for AI services.",
    credentialUrl: "https://coursera.org/verify/WP8F6UCRZZH0",
    image: "/certificates/ibm-python-ai.jpeg",
    verified: true
  },
  {
    id: "cert-eyouth-data",
    title: "EYouth Data Analytics Bootcamp",
    issuer: "EYouth",
    issuerBadge: "Distinction Award (21h)",
    category: "Data Science & Analytics",
    date: "2024",
    skills: ["Exploratory Data Analysis", "Data Cleaning", "Visualization", "Data Storytelling"],
    description: "Graduated with distinction from the 21-hour intensive bootcamp focusing on exploratory data analysis, dashboarding, and actionable business intelligence.",
    credentialUrl: "https://eyouthlearning.com",
    image: "/certificates/eyouth-data-analytics.jpeg",
    verified: true
  }
];

export const education = {
  degree: "Bachelor’s Degree in Communications & Computer Engineering",
  institution: "Tanta Higher Institute of Engineering",
  location: "Egypt",
  gpa: "3.55 / 4.00",
  graduationDate: "Graduated: July 2026",
  description: "Specialized in computer systems engineering, digital signal processing, communication networks, and artificial intelligence, culminating in the MediVerse Smart Hospital System graduation thesis."
};

export const testimonials = [
  {
    quote: "Saad exhibits an exceptional ability to turn complex research and agentic architectures into clean, deployable production pipelines. His work on n8n workflows and Google Gemini integration was disciplined and highly effective.",
    author: "AI Solution Architect",
    role: "Senior Engineering Colleague",
    context: "Collaborated on Agentic Automation Workflows"
  },
  {
    quote: "During our graduation project, Saad's deep grasp of machine learning, system design, and API architectures was the backbone of our success. He writes clean, structured code and consistently solves tough engineering bottlenecks.",
    author: "Engineering Colleague",
    role: "Graduation Project Team Lead",
    context: "MediVerse Hospital Management System"
  },
  {
    quote: "Saad brings rare dual strength: deep mathematical intuition for AI/ML alongside rigorous electronic and embedded engineering foundations. A dedicated engineer who delivers with excellence.",
    author: "Academic Mentor",
    role: "Communications & Computer Engineering Dept.",
    context: "Tanta Higher Institute of Engineering"
  }
];
