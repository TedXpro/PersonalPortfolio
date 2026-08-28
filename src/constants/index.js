import {
  dataAnalyst,
  backend,
  machineLearning,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  edir,
  ilri,
  studentTeacherCommunication,
  shopify,
  carrent,
  jobit,
  tripguide,
  travelAgency,
  tourAndTravel,
  birrwise,
  tentsoftlab,
  tentsoftlabSvg,
  tentsoftlabOg,
  softlabTent,
  softlabText,
  birrwiseLogo,
  birrwiseSvg,
} from "../assets";





export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: dataAnalyst,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning Engineer",
    icon: machineLearning,
  },
];

const technologies = [
  {
    name: "machine learning",
    icon: machineLearning,
  },
  {
    name: "data analysis",
    icon: dataAnalyst,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "n8n",
    icon: nodejs,
  },
  {
    name: "RAG Systems",
    icon: backend,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Founder & Lead Full Stack Engineer",
    company_name: "BirrWise",
    company_url: "https://birrwise.com",
    tagline: "Financial Intelligence & Multi-Currency Expense Ledger",
    og_title: "BirrWise — Institutional-Grade Financial Expense Tracker",
    og_description: "Multi-currency ledger engine supporting ETB, USD, and EUR with neural vision OCR and AI cashflow forecasting.",
    employment_type: "Product & Engineering",
    icon: birrwiseSvg,
    logo_svgs: {
      mark: birrwiseSvg,
      name: "BirrWise",
    },
    remote_og_image: "https://birrwise.com/opengraph-image.png",
    fallback_og_image: birrwise,
    iconBg: "#ffffff",
    date: "January 2026 - Present",
    points: [
      "Architected and deployed birrwise.com, an institutional-grade financial expense tracker and multi-currency ledger engine supporting ETB, USD, and EUR.",
      "Engineered full-stack architecture with Next.js, React, and Tailwind CSS, backed by audited PostgreSQL RPCs and Row-Level Security (RLS) tenant isolation.",
      "Integrated neural vision OCR for automated receipt scanning, VAT calculation, and AI-driven 6-month cashflow runway forecasting.",
    ],
    tech_stack: ["Next.js", "React", "TypeScript", "PostgreSQL RLS", "Tailwind CSS", "Vision OCR", "AI Forecasting"],
  },
  {
    title: "Software Engineer & AI Automation Specialist",
    company_name: "TentSoftLab",
    company_url: "https://tentsoftlab.com",
    tagline: "Full-Stack Web Systems & Autonomous AI Automation Workflows",
    og_title: "Tent Softlab — Strategic partner for complex digital systems",
    og_description: "Architecture-first custom software studio designing and modernizing complex digital systems and AI advisory.",
    employment_type: "Full-time",
    icon: tentsoftlabSvg,
    logo_svgs: {
      mark: softlabTent,
      text: softlabText,
    },
    remote_og_image: "https://tentsoftlab.com/og-image.jpg",
    fallback_og_image: tentsoftlabOg,
    iconBg: "#ffffff",
    date: "August 2025 - August 2026",



    points: [
      "Engineered robust full-stack backend solutions using .NET / C# and ASP.NET MVC architecture, seamlessly connecting dynamic frontends with high-throughput backend APIs.",
      "Developed and maintained 'Brand Collab', an end-to-end collaboration and brand management web application using Node.js and React.",
      "Built autonomous workflow automations with n8n, orchestrating LLMs and Retrieval-Augmented Generation (RAG) chatbots for intelligent data processing and customer support.",
      "Engineered automated document intelligence pipelines combining n8n, AI OCR for multi-page PDF extractions, and multi-system webhook synchronizations.",
    ],
    tech_stack: [".NET / C#", "ASP.NET MVC", "Node.js", "React", "n8n Automation", "RAG Chatbots", "LLM Integration", "PDF OCR"],
  },
  {
    title: "Mobile Application Developer",
    company_name: "Traveler App Project",
    tagline: "Cross-Platform Tour Booking & Traveler Navigation",
    employment_type: "Mobile Engineering",
    icon: web,
    iconBg: "#0e1424",
    date: "November 2024 - Present",
    points: [
      "Developed a cross-platform mobile application for travelers and tour bookings using Flutter and Dart.",
      "Integrated real-time booking, payment workflows, and itinerary management with a high-performance Golang backend.",
      "Implemented offline caching, optimistic state updates, and map location tracking.",
    ],
    tech_stack: ["Flutter", "Dart", "Golang", "REST APIs", "Mobile UX"],
  },
  {
    title: "Full Stack Developer",
    company_name: "Travel Agency Management",
    tagline: "High-Concurrency Travel Agency Operations & CRM Portal",
    employment_type: "Full Stack",
    icon: web,
    iconBg: "#111827",
    date: "October 2024 - Present",
    points: [
      "Designed and built a comprehensive travel agency management portal using React and Tailwind CSS.",
      "Implemented a high-concurrency backend in Golang to manage agency packages, client itineraries, and ticket transactions.",
      "Built responsive analytical dashboards for agency administrators to track seasonal revenues.",
    ],
    tech_stack: ["React", "Golang", "Tailwind CSS", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Network & System Administrator",
    company_name: "ILRI (International Livestock Research Institute)",
    tagline: "Enterprise Research Network & IT Infrastructure",
    employment_type: "Infrastructure",
    icon: ilri,
    iconBg: "#1e293b",
    date: "July 2024 - September 2024",
    points: [
      "Managed enterprise network devices, switches, firewalls, and subnets across organizational infrastructure.",
      "Handled OS imaging, secure workstation deployments, and automated hardware maintenance pipelines.",
      "Diagnosed and resolved critical network bottlenecks and infrastructure security policies.",
    ],
    tech_stack: ["Network Admin", "Cisco Hardware", "Firewalls", "System Deployment"],
  },
  {
    title: "Node.js Developer",
    company_name: "Student Teacher Communication Platform",
    tagline: "Academic Real-Time Communication & Assignment System",
    employment_type: "Academic Platform",
    icon: studentTeacherCommunication,
    iconBg: "#0f172a",
    date: "September 2023 - December 2023",
    points: [
      "Developed a communication platform connecting students and educators using Node.js, Express, and MongoDB.",
      "Built real-time notification feeds, class assignment portals, and submission audit logs.",
    ],
    tech_stack: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    title: "Java / JavaFX Developer",
    company_name: "Edir Management System",
    tagline: "Community Financial Ledger & Automated Event Notification",
    employment_type: "Desktop Software",
    icon: edir,
    iconBg: "#1e1b4b",
    date: "January 2023 - June 2023",
    points: [
      "Developed a community financial and social management desktop application using JavaFX and MySQL.",
      "Implemented contribution tracking, automated event notification modules, and financial ledger calculations.",
    ],
    tech_stack: ["Java", "JavaFX", "MySQL", "Desktop Architecture"],
  },
];


const testimonials = [
  {
    testimonial:
      "Yohannes brings exceptional attention to detail in full-stack architecture and frontend polish. His work on responsive systems and AI-powered data pipelines is top-notch.",
    name: "Dr. Aster Bekele",
    designation: "Senior Project Lead",
    company: "Tech Innovation Hub",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    testimonial:
      "A talented engineer who understands both design aesthetics and robust backend performance. The Flutter & Golang ecosystem he built streamlined our operations significantly.",
    name: "Michael Chen",
    designation: "Engineering Director",
    company: "Horizon Systems",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    testimonial:
      "His ability to seamlessly blend machine learning models with fluid Apple-grade web experiences sets him apart from most developers. Highly recommended!",
    name: "Sara Tadesse",
    designation: "Product Lead",
    company: "Digital Horizons",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  },
];

const projects = [
  {
    id: "birrwise",
    name: "BirrWise — Financial Expense Tracker",
    category: "Fintech",
    featured: true,
    description:
      "A modern AI-assisted financial management & expense tracking platform empowering individuals and businesses to master budgets, cash flow, and multi-currency analytics.",
    detailed_description:
      "BirrWise (birrwise.com) is a sleek personal and small-business financial tracker designed to streamline daily budgeting, spending visualization, and multi-currency expense management. Built with modern React and Tailwind CSS, it offers real-time cashflow analytics, instant category breakdowns, multi-currency conversion (ETB, USD, EUR), and automated budget alerts.",
    challenges: [
      "Architecting multi-currency conversion with real-time exchange rates and offline sync.",
      "Designing an interactive, low-latency financial dashboard with fluid charts and instant micro-interactions.",
      "Creating automated expense categorization algorithms for smart budgeting recommendations."
    ],
    stack_details: [
      "Frontend: React, Tailwind CSS, Framer Motion, Recharts",
      "Backend & DB: Node.js, Express, PostgreSQL",
      "Features: Live interactive expense calculator, multi-currency switch, real-time analytics"
    ],
    tags: [
      { name: "fintech", color: "emerald-cyan-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "analytics", color: "orange-text-gradient" },
    ],
    image: birrwise,
    live_link: "https://birrwise.com",
    source_code_link: "https://github.com/TedXpro",
  },
  {
    id: "travel-agency",
    name: "Travel Agency Management",
    category: "Full Stack",
    featured: true,
    description:
      "A comprehensive travel agency management system built with React and Tailwind CSS, featuring a robust Golang backend. It streamlines agency operations and booking processes.",
    detailed_description: "This project was born out of a need to modernize the operations of a local travel agency. The system handles everything from package management to customer bookings and payments. It features a responsive dashboard for agents and a seamless booking experience for customers.",
    challenges: ["Handling concurrent bookings and ensuring data consistency.", "Integrating with third-party payment gateways.", "Designing a complex database schema to support various travel packages."],
    stack_details: ["Frontend: React, Tailwind CSS, Redux", "Backend: Golang, Gin Framework", "Database: PostgreSQL", "Deployment: Docker, AWS"],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "golang",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: travelAgency,
    source_code_link: "https://github.com/TedXpro/Travel-Agency-Web-Page",
    live_link: "https://github.com/TedXpro/Travel-Agency-Web-Page",
  },
  {
    id: "traveler-app",
    name: "Traveler Mobile App",
    category: "Mobile",
    featured: true,
    description:
      "A fully functional Flutter mobile application for travelers to book, pay, and manage their trips. Integrated with the Golang backend for real-time data synchronization.",
    detailed_description: "The Traveler App is the companion mobile application for the Travel Agency system. It allows users to browse packages, book trips, and manage their itineraries on the go. The app is built with Flutter for a native-like experience on both iOS and Android.",
    challenges: ["Synchronizing data in real-time with the backend.", "Implementing offline capabilities for itinerary viewing.", "Ensuring a smooth and intuitive user experience on mobile devices."],
    stack_details: ["Mobile: Flutter, Dart", "Backend: Golang", "State Management: Provider", "Maps: Google Maps API"],
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "golang",
        color: "green-text-gradient",
      },
      {
        name: "mobile",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/TedXpro/traveller_app",
    live_link: "https://github.com/TedXpro/traveller_app",
  },
  {
    id: "tour-travel",
    name: "Tour and Travel Platform",
    category: "Full Stack",
    description:
      "A comprehensive tour and travel booking platform that allows users to discover popular destinations, book flights and hotels, and manage their dream vacations.",
    detailed_description: "Full-scale portal for tourists with hotel search, custom travel itinerary planners, interactive destination maps, and localized guide recommendations.",
    challenges: ["Dynamic search indexing", "Responsive itinerary builder"],
    stack_details: ["React, Golang, Tailwind CSS, PostgreSQL"],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "golang",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tourAndTravel,
    source_code_link: "https://github.com/TedXpro",
    live_link: "https://github.com/TedXpro",
  },
  {
    id: "car-rent",
    name: "Car Rent Hub",
    category: "Full Stack",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    detailed_description: "Modern car rental system featuring vehicle filtering by category, live availability calendars, price estimates, and reservation workflows.",
    challenges: ["Real-time availability schedule conflicts", "Geolocation filtering"],
    stack_details: ["React, Node.js, MongoDB, Tailwind CSS"],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/TedXpro",
    live_link: "https://github.com/TedXpro",
  },
  {
    id: "job-it",
    name: "Job IT Portal",
    category: "AI & ML",
    description:
      "Web application that enables users to search for tech job openings, view estimated salary ranges for positions, and match opportunities to candidate skills.",
    detailed_description: "Tech recruitment platform with automated salary insights, resume keyword match scoring, and interactive search filters.",
    challenges: ["Salary data aggregation", "Resume parsing pipelines"],
    stack_details: ["React, REST API, SCSS, Node.js"],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "analytics",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/TedXpro",
    live_link: "https://github.com/TedXpro",
  },
];

const blogs = [
  {
    title: "Building RAG Systems for Enterprise Data",
    description: "How I implemented a Retrieval-Augmented Generation system allowing instant natural language queries across distributed databases and document sets.",
    date: "Dec 2024",
    readTime: "5 min read",
    tag: "AI / ML",
    image: tripguide,
    link: "#",
  },
  {
    title: "Architecting BirrWise: Modern Fintech with React",
    description: "Deep dive into state management, multi-currency conversion mechanics, and liquid glass UI engineering for financial expense tracking.",
    date: "Nov 2024",
    readTime: "7 min read",
    tag: "Fintech",
    image: carrent,
    link: "#",
  },
  {
    title: "Flutter + Golang: The High-Speed Full-Stack Pair",
    description: "My experience creating low-latency native mobile experiences paired with lightning-fast concurrency in Golang backends.",
    date: "Oct 2024",
    readTime: "4 min read",
    tag: "Full Stack",
    image: tourAndTravel,
    link: "#",
  },
];

export const bentoStats = [
  { label: "Years Experience", value: "3+", suffix: "Years", change: "+100% learning rate" },
  { label: "Projects Completed", value: "15+", suffix: "Apps", change: "Full stack & mobile" },
  { label: "Tech Stack", value: "18+", suffix: "Tools", change: "Modern ecosystem" },
  { label: "Client / Code Satisfaction", value: "100%", suffix: "Score", change: "Clean & tested code" },
];

export const skillCategories = {
  frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Flutter", "HTML5/CSS3", "Three.js"],
  backend: ["Golang", "Node.js", "Express", "Spring Boot", ".NET", "RESTful APIs", "Java"],
  aiAndData: ["Machine Learning", "Python", "RAG Systems", "Data Analysis", "n8n Automation", "Pandas/NumPy"],
  databaseAndDevOps: ["PostgreSQL", "MongoDB", "Docker", "Git / GitHub", "Linux", "Figma"],
};

export { services, technologies, experiences, testimonials, projects, blogs };

