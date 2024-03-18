import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from '@/context/active-section-context';


export function useSectionInView({
    sectionName,
}) {
    const {ref, inView} = useInView({
        threshold: 0.5,
      });
      const {setActiveSection, timeOfLastClick} =  useActiveSectionContext();
    
      useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection("Home");
        }
      },[inView, setActiveSection, timeOfLastClick]);
    return {
      ref};
}