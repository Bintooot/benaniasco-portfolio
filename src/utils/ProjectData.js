import RMS from "../assets/RMS.png";
import Radiant from "../assets/Radiant.png";
import AppController from "../assets/App-Controller.png";
import Velienne from "../assets/Velienne.png";

export const projectData = [
  {
    id: 1,
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
  {
    id: 2,
    name: "Velienne - Landing Page",
    description:
      "A visually appealing landing page designed to showcase the Velienne Restaurant. It features a modern design, highlights the restaurant's offerings, and provides an easy-to-navigate interface for users to explore the menu and make reservations.",
    image: Velienne,
    time: "May 30, 2025 - Present",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/Bintooot/velienne",
    live: "#",
  },
  {
    id: 3,
    name: "IoT Based Mobile Incubator Monitoring & Controller",
    description:
      "It is a mobile application that allows users to monitor and control the incubator. It also allows users to view the status of the incubator and the eggs inside it.",
    image: AppController,
    time: "October 2024 - November 2024",
    techStack: ["React Native", "CSS", "JavaScript", "Expo", "Firebase"],
    github: "https://github.com/Bintooot/incubator-app-controller",
    live: "#",
  },
];
