"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { motion} from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView("About");

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
        <span className="font-medium">Business and Law</span> and feeling inspired by a friend in the tech industry, I decided to follow my passion for programming. My journey began with a Coursera course on{" "}
        <span className="font-medium">Python</span>,{" "}
        <span className="italic">followed by pursuing a diploma in Computer Systems Technology at BCIT. </span>What captivates me most about programming is the problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          JavaScript, HTML, CSS, React, Next.js, Node.js, and MongoDB
        </span>
        . I am also versed in Java and SQL. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">Co-op position</span> where I can thrive as a software developer, web developer, QA specialist, or DevOps engineer.
      </p>

      {/* Second Paragraph */}
      <p>
        <span className="italic">Having lived in three different countries,  </span> I relish diverse experiences—from delving into reading and cinema to spending quality time with my ragdoll cats. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. My current venture is exploring the  {" "}
        <span className="font-medium">photography</span>. Moreover, I have a keen interest in Political Philosophy, European History, Art, and Psychology, which enrich my perspective and creativity.
      </p>
    </motion.section>
  )
}
