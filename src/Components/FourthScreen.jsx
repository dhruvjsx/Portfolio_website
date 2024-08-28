import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const FourthScreen = () => {
  useEffect(() => {
    const textElement = document.querySelector(".textflow");
    const texts = textElement.textContent.split("");
    let clutter = "";

    texts.forEach((text) => {
      clutter += `<span class="char">${text}</span>`;
    });

    textElement.innerHTML = clutter;

    gsap.from(".char", {
      scrollTrigger: {
        trigger: ".textflow",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
        pin: true, // Pin the textflow element itself
        pinSpacing: false, // Removes additional spacing after pinning
        markers: true,
      },
    //   opacity: 0,
    //   backgroundColor:"white",
    color:"rgb(51 65 85 / var(--tw-text-opacity)) ",
      y: 20,
      stagger: 0.05,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="h-[40vh]  text-white  bg-black flex justify-center items-center">
      <p className="textflow  text-slate-300 text-4xl">Where Coding meets creativity</p>
    </div>
  );
};

export default FourthScreen;
