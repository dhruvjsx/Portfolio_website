import React, {  useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/all";
import { useGSAP } from "@gsap/react";
import {
  MdOutlineFileDownload,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { Tooltip } from "react-tooltip";
import SaumitraSirRecommendation from '../../assets/Reviews/SaumitraSirRecommendation.png'
import AmanSirRecommendation from '../../assets/Reviews/AmanSirRecommendation.png'
gsap.registerPlugin(ScrollTrigger, Flip);

const HorizontalScroll = () => {
  const wheelRef = useRef(null);
  const headerRef = useRef(null);
  const [currentCard, setCurrentCard] = useState(null);
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const arrowRef = useRef(null);
  const [text, setText] = useState("Scroll Down");

  useGSAP(() => {
    const arrowDirection = arrowRef.current;
    const scroller = containerRef.current;
    const horizontalScroll = scrollerRef.current;
    const sections = gsap.utils.toArray(".horizontalSection");
    const scrollTween = gsap.to(sections, {
      xPercent: -60,
      ease: "none",

      scrollTrigger: {
        trigger: scroller,
        pin: true,
        scrub: 1,
        // snap: 1 / (sections.length - 1),
        end: () => `+=${horizontalScroll.offsetWidth}`,
      },
    });
    gsap.to(scroller, {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: scroller,
        start: "top top",
        end: () => `+=${horizontalScroll.offsetWidth + 700}`,
        toggleActions: "play reverse play reverse",
        // scrub: true,
        onEnter: () => {
          gsap.to(".arrow", { color: "white" });
        },
        onLeaveBack: () => {
          gsap.to(".arrow", { color: "black" });
        },
      },
    });

    gsap.to(".horizontalText", {
      color: "white",
      scrollTrigger: {
        trigger: scroller,
        start: "top top",
        end: () => `+=${horizontalScroll.offsetWidth + 100}`,
        toggleActions: "play reverse play reverse",
        //   scrub: true,
      },
    });

    gsap.to(".blackBox", {
      color: "white",
      border: "1px solid white",
      scrollTrigger: {
        trigger: scroller,
        start: "top top",
        end: () => `+=${horizontalScroll.offsetWidth + 100}`,
        toggleActions: "play reverse play reverse",
        //   scrub: true,
      },
    });

    gsap.from(".review", {
      opacity: 0,
      y: 100,
      stagger: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: ".review",
        containerAnimation: scrollTween,
        start: "-40% left",
        end: "right right",
        toggleActions: "play none none reverse",
        id: "1",
      },
    });

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
      rotation: -360,
      ease: "none",
      duration: images.length,
      scrollTrigger: {
        trigger: scroller,
        start: "top top",
        end: () => `+=${horizontalScroll.offsetWidth}`,
        scrub: 1,
        onUpdate: (self) => {
          if (self.direction === -1) {
            // Scrolling up
            setText("Scroll Up");
            gsap.to(arrowDirection, {
              rotation: 180,
              duration: 0.2,
              ease: "power2.inOut",
            });
          } else if (self.direction === 1) {
            // Scrolling down
            setText("Scroll Down");
            gsap.to(arrowDirection, {
              rotation: 0,
              duration: 0.2,
              ease: "power2.inOut",
            });
          }
        },
      },
    });
  }, []);
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resumeV2-2.pdf'; // Replace with the actual path
    link.download = 'Dhruv_Parmar_Resume.pdf'; // The file name for download
    link.click();
  };
  return (
    <div id="contact" className="outer overflow-hidden ">
      <div
        ref={containerRef}
        className="scroll  flex flex-col w-[220vw] h-[100vh] overflow-x-hidden"
      >
        <div className="horizontalText w-[500px] text-black text-6xl font-bold leading-snug mx-4">
          <div>How</div>
          <div>can I</div>
          <div>help you ?</div>
        </div>
        <section
          ref={scrollerRef}
          className="horizontalSection mt-5 flex  justify-start px-10 "
        >
          <div className="grid  w-full grid-cols-3 md:grid-cols-6 gap-4 text-black ">
            <div className="blackBox bg-transparent  border-2 border-black shadow-lg rounded-md justify-center p-4 h-[50px] w-[100px] text-xs md:text-base md:h-[200px] md:w-[400px] flex  items-center text-center">
              Responsive UI Design
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 justify-center h-[50px] w-[100px] text-xs md:text-base md:h-[200px] md:w-[400px] flex items-center  text-center">
              Backend
            </div>
            <div className="blackBox bg-transparent  border-2 border-black shadow-lg rounded-md justify-center p-4 h-[50px] w-[100px] text-xs md:text-base md:h-[200px] md:w-[400px] flex  items-center text-center">
              Deployment
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 justify-center   h-[50px] w-[100px] text-xs md:text-base md:h-[200px] md:w-[400px] flex items-center  text-center">
              Data Visualization
            </div>
            <div className="blackBox bg-transparent  border-2 border-black  shadow-lg rounded-md p-4 justify-center  h-[50px] w-[100px] text-xs md:text-base md:h-[200px] md:w-[400px] flex items-center  text-center">
              Frontend
            </div>
            <div className="bg-white shadow-lg rounded-md p-4  justify-center h-[50px] w-[100px] text-xs md:text-base md:h-[200px] md:w-[400px] flex items-center  text-center">
              Optimization
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 justify-center  h-[50px] w-[100px] text-xs md:text-base md:h-[200px] md:w-[400px] flex items-center  text-center">
              Scalability
            </div>
            <div className="blackBox bg-transparent  border-2 border-black shadow-lg rounded-md justify-center p-4 h-[50px] w-[100px] text-xs md:text-base md:h-[200px] md:w-[400px] flex  items-center text-center">
              Innovation
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 justify-center h-[50px] w-[100px] text-xs md:text-base md:h-[200px] md:w-[400px] flex items-center  text-center">
              Team collaboration
            </div>
            <div className="blackBox bg-transparent  border-2 border-black  shadow-lg rounded-md p-4 justify-center  h-[50px] w-[100px] text-xs md:text-base md:h-[200px] md:w-[400px] flex items-center  text-center">
              System Design
            </div>
            <div className=" bg-white shadow-lg rounded-md p-4 justify-center  h-[50px] w-[100px] text-xs md:text-base md:h-[200px] md:w-[400px] flex items-center  text-center">
              Customized Solutions
            </div>
            <div className="blackBox bg-transparent  border-2 border-black  shadow-lg rounded-md p-4 justify-center  h-[50px] w-[100px] text-xs md:text-base md:h-[200px] md:w-[400px] flex items-center  text-center">
              3D Animation
            </div>
          </div>

          <div className="review-container flex items-center justify-center h-full space-x-4 ">
  <div className="review border  w-[700px] h-[200px] bg-white rounded-sm overflow-hidden px-2">
    <img src={AmanSirRecommendation} alt="Recommendation" className="object-fit" />
  </div>
  <div className="review border  w-[700px] h-[200px] bg-white rounded-sm overflow-hidden px-2">
    <img src={SaumitraSirRecommendation} alt="Recommendation" className="h-full w-full object-fit" />
  </div>    
</div>

        </section>
        <div className="scroll-down absolute flex flex-col justify-center bottom-5  w-[100vw]   text-white font-medium uppercase text-sm">
          <div className="flex arrow text-black flex-col items-center justify-center">
            <h1> {text}</h1>
            <div
              ref={arrowRef}
              className=" arrowDown mt-2 w-4 h-4 bg-center bg-contain"
            >
              <MdOutlineKeyboardArrowDown  />
            </div>
          </div>
        </div>

        <section className="slider-section     absolute  bottom-0 w-[100vw] overflow-y-hidden  h-[15vh]">
          <div
            className="wheel absolute  z-50 color-white  top-5 flex items-end justify-center w-[50vw] h-[50vw] max-w-[400px] max-h-[400px]  left-1/2 transform -translate-x-1/2"
            ref={wheelRef}
          >
            {[
              <a
                href="https://github.com/dhruvjsx"
                target="_blank"
                key="github"
              >
                <FaGithub color="white" size={25} />
              </a>,
              <a
                href="https://www.linkedin.com/in/dhruvjsx/"
                target="_blank"
                key="linkedin"
              >
                <FaLinkedin color="white" size={25} />
              </a>,
              <a
                href="mailto:letsconnectdhruv@gmail.com?subject=We%20Have%20An%20Opportunity%20For%20You"
                className="email-link"
                key="email"
                target="_blank"
                onClick={() => {
                  navigator.clipboard
                    .writeText("letsconnectdhruv@gmail.com")
                    .then(() => {
                      alert("Mail copied to clipboard!");
                    })
                    .catch((err) => {
                      console.error("Failed to copy text: ", err);
                    });
                }}
              >
                <MdOutlineMarkEmailUnread color="white" size={25} />
              </a>,
              <a
                href="https://www.leetcode.com/dhruvjs"
                target="_blank"
                key="leetcode"
              >
                <SiLeetcode color="white" size={25} />
              </a>,
      <div>
      <div  data-tooltip-id={'download'}
                        data-tooltip-content={'Download Resume'} onClick={handleDownload} style={{ cursor: 'pointer' }}>
        <MdOutlineFileDownload color="white" size={25} />
      </div>
      <Tooltip
                        id={'download'}
                        style={{
                          borderRadius: "10px",
                          maxWidth: "350px",
                          fontSize: "12px",
                          whiteSpace: "normal",
                          wordWrap: "break-word",
                          overflow: "hidden",
                          zIndex: 20,
                        }}
                      />
    </div>,
            ].map((num) => (
              <div className="wheel__card absolute top-0 left-0 w-[6%] max-w-[100px] aspect-square cursor-pointer">
                {num}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HorizontalScroll;