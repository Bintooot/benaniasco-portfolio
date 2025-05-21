import RMS from "../assets/RMS.png";
import Radiant from "../assets/Radiant.png";
import AppController from "../assets/App-Controller.png";

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
    github: "https://github.com/project1",
    live: "https://project1.com",
  },
  {
    id: 2,
    name: "Radiant Reception Booking System (Landing Page)",
    description:
      "A visually engaging landing page designed to promote and facilitate bookings for reception events. It highlights keyservices, showcases venue details, and provides an easy-to-use interface for users to make inquiries or reserve dates",
    image: Radiant,
    time: "September 2024 - October 2024",
    techStack: ["HTML", "JavaScript", "React", "Tailwind CSS"],
    github: "https://github.com/project2",
    live: "https://project2.com",
  },
  {
    id: 3,
    name: "IoT Based Mobile Incubator Monitoring & Controller",
    description:
      "It is a mobile application that allows users to monitor and control the incubator. It also allows users to view the status of the incubator and the eggs inside it.",
    image: AppController,
    time: "October 2024 - November 2024",
    techStack: ["React Native", "CSS", "JavaScript", "Expo", "Firebase"],
    github: "https://github.com/project3",
    live: "https://project3.com",
  },
];
