import HTMLIcon from "../assets/HTML5.png";
import CSSIcon from "../assets/CSS3.png";
import JavaScriptIcon from "../assets/JavaScript.png";
import TailwindIcon from "../assets/TailwindCss.png";
import NodeIcon from "../assets/Node.js.png";
import ReactIcon from "../assets/React.png";
import MongoDbIcon from "../assets/MongoDB.png";
import FirebaseIcon from "../assets/Firebase.png";
import FigmaIcon from "../assets/Figma.png";
import CanvaIcon from "../assets/Canva.png";
import ExpressIcon from "../assets/Express.png";
import GitIcon from "../assets/Git.png";
import GitHubIcon from "../assets/GitHub.png";
import MySQLCIcon from "../assets/MySQL.png";

export const all_skills = [
  {
    name: "HTML5",
    icon: HTMLIcon,
  },
  {
    name: "CSS3",
    icon: CSSIcon,
  },
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  {
    name: "Node.js",
    icon: NodeIcon,
  },
  {
    name: "React.js",
    icon: ReactIcon,
  },
  {
    name: "MongoDB",
    icon: MongoDbIcon,
  },
  {
    name: "Firebase",
    icon: FirebaseIcon,
  },
  {
    name: "Figma",
    icon: FigmaIcon,
  },
  {
    name: "Canva",
    icon: CanvaIcon,
  },
  {
    name: "Express.js",
    icon: ExpressIcon,
  },
  {
    name: "Git",
    icon: GitIcon,
  },
  {
    name: "GitHub",
    icon: GitHubIcon,
  },
  {
    name: "MySQL",
    icon: MySQLCIcon,
  },
];

export const frontend_skills = all_skills.filter(
  (skill) =>
    skill.name !== "Node.js" &&
    skill.name !== "MongoDB" &&
    skill.name !== "Firebase" &&
    skill.name !== "Figma" &&
    skill.name !== "Express.js" &&
    skill.name !== "GitHub" &&
    skill.name !== "MySQL" &&
    skill.name !== "Git" &&
    skill.name !== "Canva"
);

export const backend_skills = all_skills.filter(
  (skill) =>
    skill.name !== "HTML5" &&
    skill.name !== "CSS3" &&
    skill.name !== "JavaScript" &&
    skill.name !== "Tailwind CSS" &&
    skill.name !== "React.js" &&
    skill.name !== "Figma" &&
    skill.name !== "MongoDB" &&
    skill.name !== "Firebase" &&
    skill.name !== "Canva" &&
    skill.name !== "Git" &&
    skill.name !== "GitHub" &&
    skill.name !== "MySQL"
);

export const database_skills = all_skills.filter(
  (skill) =>
    skill.name !== "HTML5" &&
    skill.name !== "CSS3" &&
    skill.name !== "JavaScript" &&
    skill.name !== "Tailwind CSS" &&
    skill.name !== "React.js" &&
    skill.name !== "GitHub" &&
    skill.name !== "Git" &&
    skill.name !== "Node.js" &&
    skill.name !== "Canva" &&
    skill.name !== "Express.js" &&
    skill.name !== "Figma"
);

export const tools_skills = all_skills.filter(
  (skill) =>
    skill.name !== "HTML5" &&
    skill.name !== "CSS3" &&
    skill.name !== "JavaScript" &&
    skill.name !== "Tailwind CSS" &&
    skill.name !== "React.js" &&
    skill.name !== "Node.js" &&
    skill.name !== "Express.js" &&
    skill.name !== "MongoDB" &&
    skill.name !== "MySQL" &&
    skill.name !== "Firebase"
);
