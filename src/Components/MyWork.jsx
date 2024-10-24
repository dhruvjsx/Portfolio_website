import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import rateXDashboard from "../assets/RateX/rateXDashboard.png";
import rateXicon from "../assets/RateX/rateXicon.svg";
import RWorld from "../assets/RWorld/rWorldLightLogo.svg";
import RJobLogo from "../assets/RJobs/RJobLogo.svg";
import NetflixLogo from "../assets/Netflix/Netflix_Logo.png";
const MyWork = () => {
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const projectImage = document.querySelectorAll(".projectImage");
  // Timeline for animation triggered by scroll
projectImage.forEach((image)=>{
    const t1= gsap.timeline({
        scrollTrigger: {
          trigger: image,  // Element that triggers the animation
          start: "top 85%", 
          // Start when top of boxes hits a bit past center of the viewport
          // end: "bottom+=500 center", // End the animation after scrolling 500px past the bottom
          // scrub: 1, s// Smoothly link the progress of the animation to the scroll
          toggleActions: "play none none none",
          markers:true // Only play when the trigger is hit
         // Optional: Adds visual markers for debugging
        }
      })
  
      t1.from(image,{
          width:0,
          duration:1
      })
})

  
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

//     gsap.set(".cardimg", { y: -600 });

//     gsap.set(".cardtxt", { opacity: 0 });

//     // Create the animation with ScrollTrigger

//     gsap.to(".cardimg", {
//       y: 0,
//       stagger: 0.3,
//       duration: 2,
//       scale: 1.3,
//       ease: "power4.out",
//       delay: 0.5,
//       onComplete: scaleDownAndFadeIn,
//       scrollTrigger: {
//         trigger: ".workContainer", // The element to trigger the animation
//         start: "top 90%", // Start animation when .workContainer is 80% from the top of the viewport
//         toggleActions: "play none none none", // Only play the animation once
//       },
//     });

//     function scaleDownAndFadeIn() {
//       gsap.to(".cardimg", { scale: 1, duration: 2 });
//       gsap.to(".cardtxt", {
//         opacity: 1,
//         y: 50,
//         stagger: 0.3,
//         duration: 2,
//       });
//       gsap.fromTo(
//         ".cardtxt",
//         { y: -50, letterSpacing: ".3em" },
//         {
//           opacity: 1,
//           y: 50,
//           letterSpacing: "0em",
//           stagger: 0.3,
//           duration: 2,
//         }
//       );
//     }
  }, []);
  const projects = [
    { title: "RateX", projectImg: rateXicon },
    { title: "R-World", projectImg: RWorld },
    { title: "R-Jobs", projectImg: RJobLogo },
    { title: "Netflix-GPT", projectImg: NetflixLogo },
    { title: "Netflix-GPT", projectImg: NetflixLogo },
    { title: "Netflix-GPT", projectImg: NetflixLogo },
    { title: "Netflix-GPT", projectImg: NetflixLogo },
  ];
  return (
<div className="w-full h-auto bg-no-repeat" style={{ background: 'linear-gradient(to bottom, #bcb8ad 0%, #FFFFFF 100%)' }}>      <div className="w-[70%]  mx-auto">
        <div className="h-[70vh] py-10 w-full ">
          <div className="flex h-full gap-2 w-full items-end justify-start">
            <div className="w-1/3">
              <h1 className="text-[#CD505A] font-semibold">Heading</h1>
              <p className="text-[#444346] font-SharpGrotesk ">Some description about the project </p>
              <div className="mt-2 text-[16px] ">
                0-to-1 Product Design | SaaS Platform | Web Design | App Design
                | Stakeholder Management
              </div>
            </div>
            <div className="w-1/2 h-full">
            <div className="h-full w-full projectImage border border-black"></div>
            </div>
          </div>
        </div>
        <div className="h-[70vh] py-10 w-full ">
          <div className="flex h-full w-full gap-4 items-end justify-start">
          <div className="w-1/2 h-full">

            <div className="h-full projectImage w-full  border border-black"></div>
            </div>
            <div className="w-1/3">
              <h1 className="text-[#CD505A] font-semibold">Heading</h1>
              <p className="text-[#444346] font-SharpGrotesk ">Some description about the project </p>
              <div className="mt-2 text-[16px] ">
                0-to-1 Product Design | SaaS Platform | Web Design | App Design
                | Stakeholder Management
              </div>
            </div>
          </div>
        </div>
        <div className="h-[70vh] py-10 w-full ">
          <div className="flex h-full gap-2 w-full items-end justify-start">
          <div className="w-1/3">
              <h1 className="text-[#CD505A] font-semibold">Heading</h1>
              <p className="text-[#444346] font-SharpGrotesk ">Some description about the project </p>
              <div className="mt-2 text-[16px] ">
                0-to-1 Product Design | SaaS Platform | Web Design | App Design
                | Stakeholder Management
              </div>
            </div>
            <div className="w-1/2 h-full">

            <div className="h-full w-full projectImage border border-black"></div>
            </div>
          </div>
        </div>
        <div className="h-[70vh] py-10 w-full ">
          <div className="flex h-full w-full gap-4 items-end justify-start">
          <div className="w-1/2 h-full">
            <div className="h-full w-full projectImage border border-black"></div>
            </div>
            <div className="w-1/3">
              <h1 className="text-[#CD505A] font-semibold">Heading</h1>
              <p className="text-[#444346] font-SharpGrotesk ">Some description about the project </p>
              <div className="mt-2 text-[16px] ">
                0-to-1 Product Design | SaaS Platform | Web Design | App Design
                | Stakeholder Management
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
