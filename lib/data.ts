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
    title: "BCIT | CST Diploma",
    location: "Burnaby, BC",
    description:
      "I am actively seeking a co-op position and will be obtaining my diploma in Computer Systems Technology within the next year. I enjoy solving problems and learning new technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2025",
  },
  {
    title: "UCLA Master of Laws (LL.M.)",
    location: "Los Angeles, California",
    description:
      "I was pursuing my master's degree during the pandemic. Life was tough for those from Wuhan but I made it through.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
  {
    title: "Assistant Manager",
    location: "Wuhan, China",
    description:
      "I was self-employeed as a bubble tea shop owner. I led the onboarding and training of new team members and organized sales events to increase sales and customer engagement.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2019",
  },
  {
    title: "Academic Assistant (Political Philosophy)",
    location: "Beijing, China",
    description:
      "I was invited directly by the CEO to work for the start-up education company because of my proactive attitude, motivation to help others, and solid understanding of abstract concepts.",
    icon: React.createElement(FaReact),
    date: "2016 - 2017",
  },
  {
    title: "Wuhan University | Bachelor of Laws (LL.B.)",
    location: "Wuhan, China",
    description:
      "I am proud of my strong legal foundation gained during my studies. My years of digging into the law and liberal arts subjects shaped my values.",
    icon: React.createElement(LuGraduationCap),
    date: "2014 - 2017",
  },
  {
    title: "Wuhan University of Science and Technology | Bachelor of Management",
    location: "Wuhan, China",
    description:
      "As a student leader, I cared about everyone in our class. I managed to hold panel discussions for scholarship evaluation, and helped to reschedule my roommates' final exam.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2017",
  },
] as const;

export const projectsData = [
  {
    title: "ElenaPortfolio",
    description:
      "Created a professional portfolio which includes introduction, projects, skills, experience, and contact form.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Email & Resend", "Vercel"],
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
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Firebase"],
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
  "GitHub",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "Framer Motion",
  "Expo",
  "Postman",
] as const;