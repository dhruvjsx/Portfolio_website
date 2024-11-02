import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const Header = ({ currentSection }) => {
  const currentSectionTimeline = useRef(null);
  const previousSection = useRef(currentSection);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial animation for content visibility when component mounts
    tl.from(".notch", {
      width: 0,
      duration: 1.8,
      ease: "power2.out",
    })
      .from(
        ".innernotch",
        {
          width: 0,
          duration: 0.5,
          ease: "expo.in",
        },
        "-=150%"
      )
      .from(".contentVisible", {
        opacity: 0,
        display: "flex",
        duration: 1,
        ease: "expo.inOut",
      })
      .from(".opi", {
        opacity: 0,
        x: -20,
        duration: 1,
        stagger: 0.3,
        ease: "expo.inOut",
      })
      .from(".headerContent", {
        opacity: 0,
        x: -20,
        duration: 1,
        stagger: 0.2,
        ease: "expo.inOut",
      });

    return () => {
      tl.kill();
    };
  }, []);

  useGSAP(() => {

    if(currentSection){

    
    const mm = gsap.matchMedia();

    if (previousSection.current === currentSection || !currentSection) return;

    // Kill any existing timeline to reset the animation
    if (currentSectionTimeline.current) {
      currentSectionTimeline.current.kill();
    }

    // Media queries for different screen sizes
    mm.add(
      {
        isDesktop: "(min-width: 768px)", // Adjust breakpoints as needed
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;

        // Create a new timeline for showing and hiding currentSection
        const tl = gsap.timeline();

        tl.to(".contentVisible", {
          opacity: 0,
          display: "none",
          duration: 0.3, // Adjusted duration for quick response
        })
          .to(
            ".currentSection",
            {
              display: "flex",
              opacity: 1,
              duration: 0.5,
              ease: "expo.inOut",
            },
          )
          .to(".notch", {
            width: isDesktop ? "15%" : "25%", // Set to 15% on desktop, 25% on mobile
            duration: 1.8,
            ease: "power2.out",
          }, "<")
          .to(".currentSection", {
            opacity: 0,
            display: "none",
            delay: 1, // Show for 1 second
            duration: 0.5,
            ease: "expo.inOut",
          })
          .to(".notch", {
            width: isDesktop ? "40%" : "60%", // 40% on desktop, 60% on mobile
            duration: 1.8,
            ease: "power2.out",
          })
          .to(".contentVisible", {
            display: "flex",
            opacity: 1,
            duration: 0.3,
          });

        // Save the timeline in the ref and update the previous section
        currentSectionTimeline.current = tl;
        previousSection.current = currentSection;

        return () => {
          tl.kill();
          mm.revert();
        };
      }
    );
}
  }, [currentSection])

  return (
    <div className="fixed top-0 left-0 w-full z-50 h-[7vh] flex justify-center items-center px-3 py-1 pointer-events-none">
      <div className="w-[60%] md:w-[40%] flex items-center px-4 justify-evenly h-[90%] text-white bg-white rounded-2xl notch pointer-events-auto">
        <div className="currentSection hidden flex w-full items-center justify-center text-center text-black text-xs md:text-lg font-semibold ">
          {currentSection}
        </div>

        <div className="contentVisible flex w-full items-center px-4 justify-between h-[90%] text-black bg-white rounded-2xl">
          <div className="overflow-hidden opi">
            <img src="" alt="" />
            <h1 className="text-sm">DHRUVJS</h1>
          </div>
          <div className="flex gap-2 md:gap-4 text-xs md:text-base items-center justify-center">
            <div className="headerContent">Skill</div>
            <div className="headerContent">Work</div>
            <div className="headerContent">Achievement</div>
            <div className="headerContent">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
