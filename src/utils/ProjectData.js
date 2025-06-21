import RMS from "../assets/RMS.png";
import AppController from "../assets/App-Controller.png";
import Velienne from "../assets/Velienne.png";
import DevFinder from "../assets/DevFinder.png";
import PortfolioV2 from "../assets/Portfolio-v2.png";

export const projectData = [
  {
    id: 1,
    name: "Portfolio v.2 | Ben Raymond Aniasco",
    description:
      "This is my second portfolio website, showcasing my skills and projects. It features a modern design, responsive layout, and interactive elements to enhance user experience. The site highlights my work in web development and provides links to my GitHub and live projects.",
    image: PortfolioV2,
    time: "June 2025 - June 2025",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/Bintooot/aniascoben-portfolio",
    live: "https://aniascoben-portfolio.vercel.app",
  },
  {
    id: 2,
    name: "DevFinder",
    description:
      "DevFinder is a responsive web app that allows users to search for GitHub profiles and view key information including avatar, bio, repositories, followers, and more.",
    image: DevFinder,
    time: "June 2025 - June 2025",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Bintooot/DevFinder",
    live: "https://dev-finder-bintooots-projects.vercel.app/",
  },
  {
    id: 3,
    name: "Velienne - Landing Page",
    description:
      "A visually appealing landing page designed to showcase the Velienne Restaurant. It features a modern design, highlights the restaurant's offerings, and provides an easy-to-navigate interface for users to explore the menu and make reservations.",
    image: Velienne,
    time: "May 2025 - June 2025",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/Bintooot/velienne",
    live: "https://velienne.vercel.app",
  },
  {
    id: 4,
    name: "IoT Based Mobile Incubator Monitoring & Controller",
    description:
      "It is a mobile application that allows users to monitor and control the incubator. It also allows users to view the status of the incubator and the eggs inside it.",
    image: AppController,
    time: "October 2024 - November 2024",
    techStack: ["React Native", "CSS", "JavaScript", "Expo", "Firebase"],
    github: "https://github.com/Bintooot/incubator-app-controller",
    live: "#",
  },
  {
    id: 5,
    name: "Request Management System",
    description:
      "This project focuses on managing user requests for chicks, specifically designed for government use. The system allows users to register, submit requests, track the status of their requests, and receive the chicks once approved. This web-based platform streamlines the process for individuals seeking chicks for their farms, helping the government efficiently manage and process these requests.",
    image: RMS,
    time: "November 2024 - February 2025",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/Bintooot/request_management_system.git",
    live: "#",
  },
];
