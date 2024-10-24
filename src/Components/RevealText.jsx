import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import "./Global.css";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const RevealText = () => {
  useGSAP(() => {
    const textElements = document.querySelectorAll(".reveal");

    textElements.forEach((text) => {
      // Split the text into words
      const splitText = new SplitType(text, { type: "words" });

      // Animation for the text reveal
      const section = text.closest("section");
      gsap.to("body", {
        backgroundColor: "black",
        scrollTrigger: {
            trigger:'.revealText',
          start: "top top",
          end: `bottom top`,
        //   scrub: true,
        //   pin: true,
          toggleActions: "play reverse resume reset",
          // Uncomment for debugging markers
      
        },
      });
      gsap.from([splitText.words,".reveal > span"], {
        opacity: 0,
        ease: "none",
        stagger: 1,
        duration: 5,
        scrollTrigger: {
          trigger: section,
          start: "top 50%",

          end: () => `+=${window.innerHeight * 2}px`,
          scrub: true,
          pin: true,

        },
      });
    });
  }, []);

  return (
    <div class="revealText items-center ">
      <section className=" h-[100vh]  flex   items-start justify-center">
        <div class="container">
            
          <p class="reveal font-serif ">
           Javascript, Reactjs, StoryBook, Redux, RTK, Nextjs, Nodejs,Expressjs, Tailwind CSS, ApexChart,Bootstrap, Hosting, AntD, HTML, CSS, SASS, Git, Github, C/C++, AWS, JQuery,Typescript,Threejs
           </p>
        </div>
      </section>
    </div>
  );
};

export default RevealText;
