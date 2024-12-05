import React from "react";
import { gsap, Expo } from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = () => {
  useGSAP(() => {
    // Animate the progress bar height with GSAP
    gsap.to("#progress-bar", {
      height: "100vh", // Full height of the loading container
      duration: 3,    // Adjust the duration as needed
      ease: Expo.easeInOut,
      onComplete: reveal, // Call reveal() once the animation is complete
    });
  }, []); // Run this effect only once when the component mounts

  const reveal = () => {
    gsap.timeline()
      .to(".follow", {
        height: "100vh",
        ease: Expo.easeInOut,
        duration: 1.2,
        delay: 0.7,
      })
      .to(".hide", { opacity: 0, display: "none", duration: 0.3 })
      .to(
        ".loading, .follow",
        {
          height: "100vh",
          width: "100vw",
          opacity: 0,
          display: "none",
          ease: Expo.easeInOut,
          duration: 0.5,
        },
        "<"
      )
      .to(".appContainer", { opacity: 0,  display: "none", duration: 1 }, "<");
  };

  return (
    <div className="appContainer w-screen h-screen text-black bg-white fixed top-0 left-0 flex items-center justify-center z-[999999]">
      <div className="loading h-full w-full fixed bg-white flex justify-center items-center top-0 z-30">
        <div className="follow fixed bg-[#f48049] h-0 w-[2px] z-20 overflow-hidden">
          <div className="h-[100vh] mx-auto bg-transparent"></div>
        </div>
        <div
          id="progress-bar"
          className="hide absolute bg-black w-[2px]"
        ></div>
      </div>
    </div>
  );
};

export default Loader;
