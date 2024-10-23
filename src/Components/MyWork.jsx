import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';
import rateXDashboard from '../assets/RateX/rateXDashboard.png';
import rateXicon from '../assets/RateX/rateXicon.svg';
import RWorld from '../assets/RWorld/rWorldLightLogo.svg'
import RJobLogo from '../assets/RJobs/RJobLogo.svg'
import NetflixLogo from '../assets/Netflix/Netflix_Logo.png'
const MyWork = () => {
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const boxes = document.querySelectorAll('.box');

    // Set initial state for the boxes to be fully hidden (opacity: 0)
    // gsap.set('.workContainer', { opacity: 100 });
    // gsap.set('p', {
    //     opacity: 0
    // })

    // Timeline for animation triggered by scroll
    // gsap.timeline({
    // //   scrollTrigger: {
    // //     trigger: ".box",  // Element that triggers the animation
    // //     start: "top bottom-=200", // Start when top of boxes hits a bit past center of the viewport
    // //     end: "bottom+=500 center", // End the animation after scrolling 500px past the bottom
    // //     scrub: 1, // Smoothly link the progress of the animation to the scroll
    // //     toggleActions: "play reverse play reverse", // Only play when the trigger is hit
    // //    // Optional: Adds visual markers for debugging
    // //   }
    // })
    
    // .fromTo(
    //   boxes,               // Target elements
    //   { // FROM: Initial state
    //     opacity: 0,  
    //     visibility: 'visible',  // Start with fully transparent
    //     y: -100          // Start 100px to the left
    //   },
    //   { // TO: Final state
    //     opacity: 1,      // Animate to fully visible
    //     y: 0,    
    //     visibility: 'visible',         // Animate to original position (x: 0)
    //     stagger: 0.1,    // Stagger the animation by 0.3s for each box
    //     duration: 1,     // Animation duration of 1 second for each box
    //     ease: 'power2.out' // Easing for smooth movement
    //   }
    // ).to('.cardtxt', {
    //     yPercent: 0,
    //     stagger: .1,
    //     duration: 2,
    //     scale: 1.3,
    //     ease: "power4.out",
    //     delay: .5,
    //     onComplete: scaleDownAndFadeIn
    // }).to('.workContainer', {
    //   opacity: 100
    // }, "<");

    // function scaleDownAndFadeIn() {
    //     gsap.to('.cardimg', {
    //         scale: 1.5,
    //         duration: 2
    //     })
    //     gsap.to('.cardtxt', {
    //         opacity: 1,
    //         y: 50,
    //         stagger: .3,
    //         duration: 2
    //     })
    //     gsap.fromTo('.cardtxt', {
    //         y:-50,
    //         letterSpacing: '.3em'
    //     }, {
    //         opacity: 1,
    //         y: 50,
    //         letterSpacing: '0em',
    //         stagger: .3,
    //         duration: 2
    //     })
    // }
    // // Apply hover effects to each container
   
    // const container = document.querySelector('.container')

    // let tween = gsap.to(container, {
    //     borderRadius: '2%',
    //     width: '20vw',
    //     height: '28vw',
    //     paused: true
    // })



    // container.addEventListener('mouseenter', () => {
    //     tween.play()
    
    // })
    // container.addEventListener('mouseleave', () => {
    //     tween.reverse()
    
    // })

    gsap.set('.cardimg', { y: -600 });
    
    gsap.set('.cardtxt', { opacity: 0 });

    // Create the animation with ScrollTrigger
    
    gsap.to('.cardimg', {
      y: 0,
      stagger: 0.3,
      duration: 2,
      scale: 1.3,
      ease: 'power4.out',
      delay: 0.5,
      onComplete: scaleDownAndFadeIn,
      scrollTrigger: {
        trigger: '.workContainer', // The element to trigger the animation
        start: 'top 90%', // Start animation when .workContainer is 80% from the top of the viewport
        toggleActions: 'play none none none', // Only play the animation once
      },
    });

    function scaleDownAndFadeIn() {
      gsap.to('.cardimg', { scale: 1, duration: 2 });
      gsap.to('.cardtxt', {
        opacity: 1,
        y: 50,
        stagger: 0.3,
        duration: 2,
      });
      gsap.fromTo(
        '.cardtxt',
        { y: -50, letterSpacing: '.3em' },
        {
          opacity: 1,
          y: 50,
          letterSpacing: '0em',
          stagger: 0.3,
          duration: 2,
        }
      );
    }

    
  }, []); 
const projects =[{title:'RateX',projectImg:rateXicon}, {title:'R-World', projectImg:RWorld},{title:'R-Jobs', projectImg:RJobLogo},{title:'Netflix-GPT', projectImg:NetflixLogo},{title:'Netflix-GPT', projectImg:NetflixLogo},{title:'Netflix-GPT', projectImg:NetflixLogo},{title:'Netflix-GPT', projectImg:NetflixLogo}]
  return (
    <div className="w-full h-full">
      <div className="w-full text-4xl text-center">
        <h1>My Work</h1>
      </div>
      <div className="w-full my-4 mt-40 mx-auto overflow-hidden">
        {/* Parent container with overflow hidden */}
        <div className="flex w-[70%]  overflow-x-auto mx-auto gap-4 justify-between items-center  workContainer  relative">
        {projects.map((project, idx) => (
            <div key={idx}  className="box h-[52vh] border  cursor-pointer flex items-center justify-center border-slate-400 drop-shadow-lg rounded-md overflow-hidden min-w-[25%] relative group">
              <img src={project.projectImg} className="cardimg object-fill h-[40%] w-[40%] " alt="Project " />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-20  opacity-100 transition-opacity duration-300 ease-in-out text-white">
              <p class="absolute w-full text-center cardtxt top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-3xl italic m-0">
  {project?.title}
</p>
                {/* <p className="text-sm mb-4">A short description of the project.</p>
                <button className="px-4 py-2 bg-white text-black rounded-md">
                  See Full Description
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
