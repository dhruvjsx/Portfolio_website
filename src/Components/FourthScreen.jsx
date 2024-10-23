import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FourthScreen = () => {
  const textRoundRef = useRef(null);

  useEffect(() => {
    const textElement = document.querySelector(".textflow");
    const texts = textElement.textContent.split("");
    let clutter = "";

    texts.forEach((text) => {
      clutter += `<span class="char">${text}</span>`;
    });

    textElement.innerHTML = clutter;

    const textRoundAnimation = gsap.timeline({
      // ... other timeline options
    });

    // First animation (triggered immediately): Text animation
    textRoundAnimation.from(".char", {
      // y: 20, // Uncomment if you want to re-enable the y-axis movement
      color: "rgb(51 65 85 / var(--tw-text-opacity))",
      stagger: 0.05,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".textflow",
        start: "top 60%",
        end: "bottom 50%",
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    })
      .to(textRoundRef.current, {
        height: "80%",
        width: "80%",
        borderRadius: "0.5rem",
        duration: 3,
        delay: 5,
        ease: "power3.inOut",
        baackgroundColor:'black',
        scrollTrigger: {
          trigger: ".roundAnimation", // Target the roundAnimation element
          start: "top 50%",
          end: "bottom 50%",
          scrub: 2,
        //   onEnter: () => {
        //     textRoundAnimation.play(); // Play the text animation when roundAnimation enters
        //   },
        },
      });

  }, []);

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-white">
      <div
        ref={textRoundRef} // Store reference to the roundAnimation element
        className="h-full w-full text-white roundAnimation bg-white flex justify-center items-center"
      >
        <p className="textflow text-slate-300 text-4xl">Where Coding meets creativity</p>
      </div>
    </div>
  );
};

export default FourthScreen;
