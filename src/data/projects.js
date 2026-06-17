import agri from "../assets/agri.png"
import dfruitindia from "../assets/dfruitindia.png";
import smarthome from "../assets/smarthome.png";
import traffic from "../assets/traffic.png";
import InfoHub from "../assets/InfoHub.png"
const projects = [

  {
    title: "Agri-Finance Assistant",
    description:
      "An Android-based application designed to help farmers manage finances, explore government schemes, and make informed crop planning decisions using intelligent recommendations.",

    tech: [
      "Java",
      "Firebase",
      "Android Studio",
      "Machine Learning",
    ],

    image:agri,

    github:
      "https://github.com/Tejaswi-K-J/Agri-Finance-Assistant",

    live:
      "#",
  },

  {
    title: "DFruit-India",
    description: "A full-stack business-level e-commerce web application built using the MERN stack and JavaScript, featuring dedicated User and Admin interfaces for product management, order handling, inventory control, and seamless business operations",

    tech: [
      "MERN Stack",
      "React.js + Vite for FRONTEND",
      "Node.js + Express.js for Backend",
      "MongoDB for Database",
      "JavaScript",
      "REST APIs"
    ],

    image:dfruitindia,

    github:
      "https://github.com/Tejaswi-K-J/d-fruit-india",

    live:
      "https://d-fruit-india.vercel.app",
  },

  {
  title: "Karnataka Info Hub",

  description:
    "A responsive web platform developed to provide comprehensive information about Karnataka, including districts, tourism destinations, culture, history, government resources, and essential public information through an intuitive and user-friendly interface.",

  tech: [
    "React.js",
    "JavaScript",
    "Responsive Design",
    "REST APIs",
    "UI/UX Design",
    "Web Development"
  ],

  image:InfoHub,

  github:
    "https://github.com/Tejaswi-K-J/Karnataka-Info-Hub",

  live:
    "https://karnataka-info-hub.netlify.app",
},

  {
    title: "Bnagalore Traffic Flow Analysis",
    description:
      "An intelligent traffic analysis system built using clustering algorithms to analyze Bengaluru traffic data and predict future traffic flow patterns.",

    tech: [
      "Python",
      "Machine Learning",
      "Fuzzy C Means clustering",
      "Data Visualization",
      "Analytics",
    ],

    image:traffic,

    github:
      "https://github.com/Tejaswi-K-J/Banglore-Traffic-Data-Analysis",

    live:
      "#",
  },

  {
    title: "IoT Smart Home System",
    description:
      "A smart home monitoring network simulation enabling automation, device communication, and remote monitoring using Cisco Packet Tracer.",

    tech: [
      "IoT",
      "Cisco Packet Tracer",
      "Networking",
      "Automation",
    ],

    image:smarthome,

    github:
      "https://github.com/",

    live:
      "#",
  },

];

export default projects;