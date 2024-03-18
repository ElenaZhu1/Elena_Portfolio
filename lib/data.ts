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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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