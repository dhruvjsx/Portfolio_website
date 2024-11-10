import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger, Flip } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger, Flip);

const WheelSlider = () => {
  const wheelRef = useRef(null);
  const headerRef = useRef(null);
  const [currentCard, setCurrentCard] = useState(null);

  useGSAP(() => {
    const wheel = wheelRef.current;
    const images = gsap.utils.toArray(".wheel__card");

    let radius, center, slice;
    const DEG2RAD = Math.PI / 180;

    const setup = () => {
      radius = wheel.offsetWidth / 2;
      center = radius;
      slice = 360 / images.length;
      gsap.set(images, {
        x: (i) => center + radius * Math.sin(i * slice * DEG2RAD),
        y: (i) => center - radius * Math.cos(i * slice * DEG2RAD),
        rotation: (i) => i * slice,
        xPercent: -50,
        yPercent: -50,
      });
    };

    setup();
    window.addEventListener("resize", setup);

    gsap.to(".arrow", { y: 5, ease: "power1.inOut", repeat: -1, yoyo: true });

    gsap.to(wheel, {
      rotation: -1080,
      ease: "none",
      duration: images.length,
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 1,
      },
    });
  }, [currentCard]);

  return (
    <div className="bg-gray-900 text-white w-full font-sans overflow-x-hidden">
    <section className="slider-section fixed bottom-0 w-full h-[12vh]">
      <div
        className="wheel absolute top-0 flex items-center justify-center w-[100vw] h-[100vw] max-w-[500px] max-h-[500px] left-1/2 transform -translate-x-1/2"
        ref={wheelRef}
      >
        {[
          <a href="https://github.com/dhruvjsx" key="github">
            <FaGithub size={45} />
          </a>,
          <a href="https://www.linkedin.com/in/dhruvjsx/" key="linkedin">
            <FaLinkedin size={45} />
          </a>,
          <a
            href="mailto:letsconnectdhruv@gmail.com?subject=Your%20Subject&body=Hello,%20I%20would%20like%20to%20discuss%20your%20project."
            className="email-link"
            key="email"
          >
            <MdOutlineMarkEmailUnread size={45} />
          </a>,
          <a href="https://www.leetcode.com/dhruvjsx" key="leetcode">
            <SiLeetcode size={45} />
          </a>,
        ].map((icon, index) => {
            console.log(icon,"icon")
            return(
          <div
            className="wheel__card absolute top-0 left-0 w-[6%] max-w-[200px] aspect-square cursor-pointer"
            key={index}
            style={{
              zIndex: 10, // Ensure it's above other content
              display: 'inline-block', // Ensure the <a> is rendered correctly
            }}
          >
            {icon}
          </div>
        )})}
      </div>
    </section>
  
    <div className="scroll-down fixed flex flex-col justify-center bottom-5 left-1/2 transform -translate-x-1/2 text-white font-medium uppercase text-sm">
      <div className="flex flex-col items-center justify-center">
        <h1> Scroll down</h1>
        <div
          className="arrow mt-2 w-4 h-4 bg-center bg-contain"
          style={{
            backgroundImage:
              "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHBhdGggZmlsbD0iYmxhY2siIGQ9Ik00ODMuMiwxOTIuMmMtMjAuNS0yMC41LTUzLjUtMjAuOC03My43LTAuNkwyNTcsMzQ0LjFMMTA0LjUsMTkxLjZjLTIwLjItMjAuMi01My4yLTE5LjktNzMuNywwLjYKCWMtMjAuNSwyMC41LTIwLjgsNTMuNS0wLjYsNzMuN2wxOTAsMTkwYzEwLjEsMTAuMSwyMy40LDE1LjEsMzYuOCwxNWMxMy4zLDAuMSwyNi43LTQuOSwzNi44LTE1bDE5MC0xOTAKCUM1MDMuOSwyNDUuNyw1MDMuNywyMTIuNyw0ODMuMiwxOTIuMnoiLz4KPC9zdmc+)",
          }}
        ></div>
      </div>
    </div>
  </div>
  
  );
};

export default WheelSlider;
