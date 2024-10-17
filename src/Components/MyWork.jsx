import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';

const MyWork = () => {
    useGSAP(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        const boxes = document.querySelectorAll('.box');

        // Set initial state for the boxes to be fully hidden (opacity: 0)
        gsap.set('.workContainer', { opacity: 100 });

        // Timeline for animation triggered by scroll
        gsap.timeline({
            scrollTrigger: {
                trigger: ".box",  // Element that triggers the animation
                start: "top bottom-=200", // Start when top of boxes hits a bit past center of the viewport
                end: "bottom+=500 center", // End the animation after scrolling 500px past the bottom
                scrub: 1, // Smoothly link the progress of the animation to the scroll
                toggleActions: "play reverse play reverse", // Only play when the trigger is hit
                markers: true // Optional: Adds visual markers for debugging
            }
        })
        .fromTo(
            boxes,               // Target elements
            { // FROM: Initial state
                opacity: 0,  
                  visibility:'visible',  // Start with fully transparent
                x: -100          // Start 100px to the left
            },
            { // TO: Final state
                opacity: 1,      // Animate to fully visible
                x: 0,    
                visibility:'visible',         // Animate to original position (x: 0)
                stagger: 0.3,    // Stagger the animation by 0.3s for each box
                duration: 1,     // Animation duration of 1 second for each box
                ease: 'power2.out' // Easing for smooth movement
            }
        ).to('.workContainer',{
            opacity:100
        },"<")
    }, []); // Empty dependency array to run animation only on mount

  return (
    <div className="w-full h-full">
      <div className="w-full text-4xl text-center">
        <h1>My Work</h1>
      </div>
      <div className="w-full my-4 mx-auto overflow-hidden">
        {/* Parent container with overflow hidden */}
        <div className="flex w-[900px] flex-wrap mx-auto opacity-0 workContainer gap-4 relative">
          <div className="box h-[400px] w-[400px] border  border-black relative"></div>
          <div className="box h-[400px] w-[400px] border opacity-0  border-black relative"></div>
          <div className="box h-[400px] w-[400px] border  border-black relative"></div>
          <div className="box h-[400px] w-[400px] border   border-black relative"></div>
          <div className="box h-[400px] w-[400px] border  border-black relative"></div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
