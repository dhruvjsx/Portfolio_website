import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';
import rateXDashboard from '../assets/RateX/rateXDashboard.png'
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
        <div className="flex w-[900px] flex-wrap mx-auto opacity-0 workContainer gap-8 relative">
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="box h-[225px] drop-shadow-lg rounded-md overflow-hidden w-[400px] relative group">
              <img src={rateXDashboard} className="object-fit" alt="Project" />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-white">
                <h2 className="text-xl mb-2">Project Title</h2>
                <p className="text-sm mb-4">A short description of the project.</p>
                <button className="px-4 py-2 bg-white text-black rounded-md">
                  See Full Description
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
