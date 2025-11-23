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
    title: "JFX Developer",
    company_name: "Edir Management System",
    icon: edir,
    iconBg: "#383E56",
    date: "January 2023 - June 2023",
    points: [
      "Developing and maintaining JFX applications using Java and other related technologies.",
      "Collaborating with classmates to create high-quality product.",
      "Helps community members to gather money and save it for future use.",
      "It notifies the members about the upcoming events and the amount of money they have to pay.",
    ],
  },
  {
    title: "Node.js Developer",
    company_name: "Student Teacher Communication",
    icon: studentTeacherCommunication,
    iconBg: "#E6DEDD",
    date: "September 2023 - December 2023",
    points: [
      "Developing and maintaining web applications using Node.js, mongodb, and other related technologies.",
      "Collaborating with classmates to create high-quality product.",
      "Implements a platform where students can communicate with their teachers.",
      "It notifies students about class events and helps students submit their assignments online.",
    ],
  },
  {
    title: "Network and System Adminstrator",
    company_name: "ILRI",
    icon: ilri,
    iconBg: "#E6DEDD",
    date: "July 2024 - September 2024",
    points: [
      "Adminstrating and maintaining the network and system of the organization.",
      "Configuring and managing the network devices. (such as switches, routers, firewalls, etc)",
      "Imaging and deploying the operating system to the organization's computers.",
      "Troubleshooting and resolving the network and system issues.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Travel Agency Project",
    icon: web, // Using web icon as placeholder
    iconBg: "#383E56",
    date: "October 2024 - Present", // Placeholder date
    points: [
      "Designed and developed a comprehensive travel agency management system using React and Tailwind CSS.",
      "Implemented a robust backend using Golang to handle agency operations and bookings.",
      "Created a user-friendly interface for agencies to manage their travel packages and clients.",
    ],
  },
  {
    title: "Mobile App Developer",
    company_name: "Traveler App Project",
    icon: web, // Using web icon as placeholder, or mobile if I had it
    iconBg: "#E6DEDD",
    date: "November 2024 - Present", // Placeholder date
    points: [
      "Developed a fully functional mobile application for travelers using Flutter.",
      "Integrated the app with the Golang backend to ensure real-time data synchronization.",
      "Implemented features for booking, payment, and itinerary management.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tour and Travel",
    description:
      "A comprehensive tour and travel booking platform that allows users to discover popular destinations, book flights and hotels, and manage their dream vacations.",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Travel Agency Management",
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
  },
  {
    name: "Traveler Mobile App",
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
  },
];

const blogs = [
  {
    title: "Building RAG Systems for Car Dealers",
    description: "How I implemented a Retrieval-Augmented Generation system to help car dealers query their inventory using natural language.",
    date: "Nov 2024",
    image: tripguide, // Placeholder
    link: "#",
  },
  {
    title: "Optimizing n8n Workflows",
    description: "Tips and tricks for creating efficient and scalable automation workflows using n8n.",
    date: "Oct 2024",
    image: jobit, // Placeholder
    link: "#",
  },
  {
    title: "Flutter + Golang: A Powerful Combo",
    description: "My experience building a full-stack travel application with Flutter mobile app and Golang backend.",
    date: "Sep 2024",
    image: carrent, // Placeholder
    link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects, blogs };
