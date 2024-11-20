import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import "./Global.css";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Skills = ({setCurrentSection}) => {
  useGSAP(() => {
    const textElements = document.querySelectorAll(".reveal");

    textElements.forEach((text) => {
      const splitText = new SplitType(text, { type: "words" });
      const section = text.closest("section");

      // Use matchMedia for responsive breakpoints
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 768px)",
          isDesktop: "(min-width: 769px)",
        },
        (context) => {
          let scrollStart = context.isMobile ? "top 30%" : "top 50%";

          // Background color animation
          gsap.to("body", {
            backgroundColor: "black",
            scrollTrigger: {
              trigger: ".revealText",
              start: "top top",
              end: `bottom top`,
              toggleActions: "play reverse resume reset",
              onEnter:()=>{
                setCurrentSection('skills')
            },
            onEnterBack:()=>{
                setCurrentSection('skills')
              }
            },
          });

          // Text reveal animation
          gsap.from(splitText.words, {
            opacity: 0,
            ease: "none",
            stagger: 1,
            duration: 5,
            scrollTrigger: {
              trigger: section,
              start: scrollStart,
              end: () => `+=${window.innerHeight * 2}px`,
              scrub: true,
              pin: true,
            },
          });
        }
      );

      return () => mm.revert(); // Clean up matchMedia on component unmount
    });
  }, []);

  return (
    <div id='skills' className="revealText items-center">
      <section   className="h-[100vh] flex items-start justify-center">
        <div className="container">
          <p  className="reveal  text-xs whitespace-nowrap md:text-[ 1.4rem] font-serif">
            Javascript, Reactjs, StoryBook, Redux, RTK, Nextjs, Nodejs,
            Expressjs, Tailwind CSS, ApexChart, Bootstrap, Hosting, AntD, HTML,
            CSS, SASS, Git, Github, C/C++, AWS, JQuery, Typescript, Threejs
          </p>
        </div>
      </section>
    </div>
  );
};

export default Skills;
