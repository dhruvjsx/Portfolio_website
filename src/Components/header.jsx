import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ currentSection, nodelay = false ,dynamicIsland}) => {
  const currentSectionTimeline = useRef(null);
  const previousSection = useRef(currentSection);
  const mm = useRef(gsap.matchMedia());
  const navigate = useNavigate();

  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial animation for content visibility when component mounts
    tl.from(".notch", {
      width: 0,
      delay: nodelay ? 0 : 5.2,
      duration: 1.8,
      ease: "power2.out",
    })
      .from(".contentVisible", {
        opacity: 0,
        display: "flex",
        duration: 1,
        ease: "expo.inOut",
      })
      .from(".headerContent", {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.2,
        ease: "expo.inOut",
      });

    return () => {
      tl.kill();
    };
  }, []);

  useGSAP(() => {
    if (!currentSection || previousSection.current === currentSection) return;

    // Kill any existing timeline to reset the animation
    if (currentSectionTimeline.current) {
      currentSectionTimeline.current.kill();
    }

    mm.current.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;
        const tl = gsap.timeline();

        tl.to(".contentVisible", {
          opacity: 0,
          display: "none",
          duration: 0.3,
        })
          .to(".currentSection", {
            display: "flex",
            opacity: 1,
            duration: 0.5,
            ease: "expo.inOut",
          })
          .to(
            ".notch",
            {
              width: isDesktop ? (nodelay ? "fit-content" : "15%") : "25%",
              duration: 1.8,
              ease: "power2.out",
            },
            "<"
          )
          .to(".currentSection", {
            opacity: 0,
            display: "none",
            delay: 0.8,
            duration: 0.1,
            ease: "expo.inOut",
          })
          .to(".notch", {
            width: isDesktop ? (nodelay ? "fit-content" : "40%") : "60%",
            duration: 1.5,
            ease: "power2.out",
          })
          .to(".contentVisible", {
            display: "flex",
            opacity: 1,
            duration: 0.3,
          });

        currentSectionTimeline.current = tl;
        previousSection.current = currentSection;

        return () => {
          tl.kill();
        };
      }
    );

    return () => {
      mm.current.revert(); // Clean up match media context
    };
  }, [currentSection]);

  const scrollToSection = (e, id) => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(id);
    if (element) {
      // Scroll to the element's top position minus the offset
      const offsetPosition = element.offsetTop + 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div  className="fixed top-0 left-0 w-full z-50 h-[7vh] flex justify-center items-center px-3 py-1 pointer-events-none">
      <div
      ref={dynamicIsland}
        className={`${
          nodelay ? "md:w-fit" : " md:w-[35%]"
        } w-[60%] flex items-center px-4 justify-evenly dynamic-island h-[90%] text-white bg-black rounded-2xl notch pointer-events-auto`}
      >
        <div className="currentSection hidden flex w-full items-center justify-center text-center text-xs md:text-lg font-semibold">
          {currentSection}
        </div>

        {nodelay ? (
          <div className="contentVisible flex w-fit items-center md:px-4 justify-center h-[90%]  rounded-2xl">
            <div
              className="flex whitespace-nowrap cursor-pointer"
              onClick={() => {
                navigate("/");
                window.location.reload();
              }}
            >
              View Dashboard
            </div>
          </div>
        ) : (
          <div className="contentVisible flex w-full items-center md:px-4 justify-between h-[90%]  rounded-2xl">
            <div className="hidden  md:flex overflow-hidden opi">
              <img src="" alt="" />
              <div className="text-sm">
                <a href="/">Dhruvjs</a>
              </div>
            </div>
            <div className="flex gap-2 md:gap-4 text-xs w-full md:w-auto md:text-base items-center justify-center">
              <div className="headerContent">
                <div onClick={(e) => scrollToSection(e, "Specialties")}>
                  Specialties
                </div>
              </div>
              <div className="headerContent cursor-pointer">
                <div onClick={(e) => scrollToSection(e, "skills")}>Skill</div>
              </div>
              <div className="headerContent cursor-pointer">
                <div onClick={(e) => scrollToSection(e, "work")}>Work</div>
              </div>
              <div className="headerContent cursor-pointer">
                <div onClick={(e) => scrollToSection(e, "contact")}>
                  Contact
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
