"use client";
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {
  const {ref, inView} = useInView({
    threshold: 0.75,
  });
  const {setActiveSection, timeOfLastClick} =  useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000){
      setActiveSection("About");
    }
  },[inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref} 
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        After graduating with degrees in{" "}
        <span className="font-medium">Business and Law</span>, inspired by my friend in tech industry, I decided to pursue my
        passion for programming. I enrolled in a Coursea course and learned{" "}
        <span className="font-medium">Python</span>.{" "}
        <span className="italic">Then I went to BCIT to study for Computer Systems Technology diploma. </span>My favorite part of programming is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          JavaScript, HTML, CSS, React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with Java and SQL. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">Co-op position</span> as a software
        developer, web developer, QA, or Devops.
      </p>

      {/* Second Paragraph */}
      <p>
        <span className="italic">I have been living in three countries. </span> I enjoy playing
        reading, watching movies, and playing with my ragdoll cats when I am not coding. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">photography</span>. I also love Political Philosophy, European History,
        Art, and Psychology.
      </p>
    </motion.section>
  )
}
