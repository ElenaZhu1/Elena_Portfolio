import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import snowgoImg from "@/public/snowgo.png";
import wellquestImg from "@/public/wellquest.png";
import portfolioImg from "@/public/portfolio.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BCIT CST Diploma",
    location: "Burnaby, BC",
    description:
      "I am currently seeking a co-op position and will be obtaining my diploma in Computer Systems Technology within the next year.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2025",
  },
  {
    title: "Assistant Manager",
    location: "Wuhan, China",
    description:
      "Led the onboarding and training of new team members; Organized sales events to increase sales and customer engagement",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2019",
  },
  {
    title: "Academic Assistant (Political Philosophy)",
    location: "Beijing, China",
    description:
      "Collaborated with a 7-person team to develop reading guidelines for complex philosophical concepts; Tailored learning strategies for over 50 students based on their needs",
    icon: React.createElement(FaReact),
    date: "2016 - 2017",
  },
] as const;

export const projectsData = [
  {
    title: "ElenaPortfolio",
    description:
      "Created a professional portfolio which includes introduction, finished projects, skills, work experience, and contact info.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: portfolioImg,
  },
  {
    title: "WellQuest",
    description:
      "A 40-hour hackathon project focuses on students' health and well-being using technologies such as JavaScript, React Native, Node.js, Express.js, and MongoDB.",
    tags: ["React Native", "Node.js", "Express.js", "MongoDB", "Expo", "Postman"],
    imageUrl: wellquestImg,
  },
  {
    title: "SnowGo",
    description:
      "SnowGo is a web application to help Metro Vancouver commuters commute efficiently during the winter by submitting and viewing reviews on road conditions before starting their commute.",
    tags: ["HTML", "CSS", "Bootstrap", "Firebase","JavaScript"],
    imageUrl: snowgoImg,
  },
] as const;

export const skillsData = [
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "Framer Motion",
  "Expo",
  "Postman",
] as const;