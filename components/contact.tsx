import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
    //const { ref } = useSectionInView("Contact", 0.5);

  return (
    <section id="contact" >
        <SectionHeading>Contact Me</SectionHeading>
        <p>please contact me directly at <a className="underline" href="mailto:wzhu36@my.bcit.ca">wzhu36@my.bcit.ca</a> or through this form.
        </p>
        <form>
            <input type="email"/>
            <textarea/>
        </form>
    </section>
  )
}
