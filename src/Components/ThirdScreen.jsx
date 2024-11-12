import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

const ThirdScreen = () => {
  useGSAP(() => {
    const sectionHeight = document.querySelector('.projectSection').offsetHeight;
    const totalHeight = sectionHeight * 2; // Adjust multiplier based on need

    const projectTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.projectSection',
        start: 'top 20%',
        end: () => `+=${document.querySelector('.project').offsetHeight }px`,
        scrub: 1,
        pin: true,
       
      },
    });

    projectTimeline
      .from(
        '.project:nth-child(1)',
        { opacity: 0, y: '100vh' }
      )
      .from(
        '.project:nth-child(2)',
        { opacity: 0, y: '100vh' },
        '+=0.5'
      )
      .from(
        '.project:nth-child(3)',
        { opacity: 0, y: '100vh' },
        '+=0.5'
      )
      .from(
        '.project:nth-child(4)',
        { opacity: 0, y: '100vh' },
        '+=0.5'
      )
      .to(
        '.projectSection, body',
        { backgroundColor: 'black', duration: 1 },
        '+=0.5' // Ensure the background color change happens last
      );
  }, []);

  return (
    <div className="projectSection bg-white flex overflow-y-hidden z-10 h-[100vh] relative  overflow-hidden">
      <div className="project border border-black rounded-md w-60 h-60 transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 z-10">a</div>
      <div className="project border border-black rounded-md w-60 h-60 transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 z-20">b</div>
      <div className="project border border-black rounded-md w-60 h-60 transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 z-30">c</div>
      <div className="project border border-black rounded-md w-60 h-60 transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-2 z-40">d</div>
    </div>
  );
};

export default ThirdScreen;
