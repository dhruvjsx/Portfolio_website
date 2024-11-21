import React, { useRef, useState } from "react";
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
import SaumitraSirRecommendation from "../../assets/Reviews/1719047805302.jpeg";
import AmanSirRecommendation from "../../assets/Reviews/1622627971114.jpeg";
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
    const link = document.createElement("a");
    link.href = "/resumeV2-2.pdf"; // Replace with the actual path
    link.download = "Dhruv_Parmar_Resume.pdf"; // The file name for download
    link.click();
  };
  return (
    <div id="contact" className="outer overflow-hidden ">
      <div
        ref={containerRef}
        className="scroll  flex flex-col w-[200vw] h-[100vh] overflow-x-hidden"
      >
        <div className="horizontalText h-[20vh]  overflow-hidden  text-black text-3xl font-bold leading-snug mx-4">
          <div>How</div>
          <div>can I</div>
          <div>help you ?</div>
        </div>
        <section
          ref={scrollerRef}
          className="horizontalSection w-full    mt-5 flex  justify-start "
        >
          <div className="flex flex-col w-[85%]  gap-2 h-[60vh] items-center justify-start text-white">
            <div className="flex h-[60%] justify-center flex-wrap  gap-2 w-[70%]">
            <div className="flex flex-col gap-2 w-[25%]">
              <div   className="blackBox transition-shadow duration-300 hover:shadow-blue-bottom  bg-custom-gradient h-1/2 border-2 border-black shadow-lg rounded-md    w-full flex items-center justify-center text-center">
                Modern UI Design
              </div>
              <div className="flex gap-2 h-1/2">
                <div className="blackBox transition-shadow duration-300 hover:shadow-blue-bottom  bg-custom-gradient border-2 border-black shadow-lg rounded-md w-1/2 flex items-center justify-center text-center">
                  Deployment
                </div>
                <div className="blackBox transition-shadow duration-300 hover:shadow-blue-bottom  bg-custom-gradient border-2 border-black shadow-lg rounded-md w-1/2 flex items-center justify-center text-center">
                  Data Visualization
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-[20%]">
              <div className="blackBox transition-shadow duration-300 hover:shadow-blue-bottom  bg-custom-gradient border-2 border-black shadow-lg rounded-md flex-grow h-1/2  w-full flex items-center justify-center text-center">
                Frontend
              </div>
              <div className="blackBox transition-shadow duration-300 hover:shadow-blue-bottom  bg-custom-gradient border-2 border-black shadow-lg rounded-md flex-grow  w-full h-1/2 flex items-center justify-center text-center">
                Optimization
              </div>
            </div>
            <div className="flex flex-col gap-2  w-[25%]">
              <div className="flex gap-2 h-1/2">
                <div className="blackBox transition-shadow duration-300 hover:shadow-blue-bottom  bg-custom-gradient border-2 border-black shadow-lg rounded-md w-1/2 flex items-center justify-center text-center">
                  Scalablity
                </div>
                <div className="blackBox transition-shadow duration-300 hover:shadow-blue-bottom  bg-custom-gradient border-2 border-black shadow-lg rounded-md w-1/2 flex items-center justify-center text-center">
                  Innovation
                </div>
              </div>
              <div className="blackBox transition-shadow duration-300 hover:shadow-blue-bottom  bg-custom-gradient h-1/2 border-2 border-black shadow-lg rounded-md    w-full flex items-center justify-center text-center">
                Team Collaboration
              </div>
            </div>
            </div>
            <div className="flex gap-2 h-[40%] w-[40%]  justify-start ">
            <div className="blackBox transition-shadow duration-300 hover:shadow-blue-bottom  bg-custom-gradient border-2 border-black shadow-lg rounded-md flex-grow md:w-[25%] h-[100px] md:h-[150px] flex items-center justify-center text-center">
                Backend
              </div>
              <div className="blackBox transition-shadow duration-300 hover:shadow-blue-bottom  bg-custom-gradient border-2 border-black shadow-lg rounded-md flex-grow md:w-[25%] h-[100px] md:h-[150px] flex items-center justify-center text-center">
                System Design
              </div>
              <div className="blackBox transition-shadow duration-300 hover:shadow-blue-bottom  bg-custom-gradient border-2 border-black shadow-lg rounded-md flex-grow md:w-[25%] h-[100px] md:h-[150px] flex items-center justify-center text-center">
                3D Animation
              </div>
              <div className="blackBox transition-shadow duration-300 hover:shadow-blue-bottom  bg-custom-gradient border-2 border-black shadow-lg rounded-md flex-grow md:w-[25%] h-[100px] md:h-[150px] flex items-center justify-center text-center">
                Customized Solutions
              </div>
            </div>
          </div>

          <div className="review-container h-full flex items-center justify-center gap-4  space-x-4 ">
            <div className="review top border w-[700px] h-[350px]  bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={AmanSirRecommendation} // replace with the profile image if available
                  alt="Aman Sharma"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg text-black font-semibold">Aman Sharma</h3>
                  <p className="text-sm text-gray-500">
                    SIH 2020 Winner | Web & App Dev
                  </p>
                  <p className="text-xs text-gray-400">November 11, 2024</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>I am pleased to recommend Dhruv</strong> as a talented
                and dedicated Front-End Developer. His proficiency in React.js
                and exceptional problem-solving skills make him a valuable
                member of our team.
              </p>
              <p className="text-gray-700">
                Throughout his time with us, Dhruv has shown a remarkable
                ability to learn quickly and apply his skills effectively,
                delivering high-quality code with attention to detail and
                efficiency. His enthusiasm for tackling challenges and finding
                innovative solutions is impressive and motivates those around
                him. He consistently approaches tasks positively, proactively
                and is willing to take on new responsibilities.
              </p>
            </div>
            <div className="review border w-[700px] h-[350px]  bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={SaumitraSirRecommendation} // replace with the profile image if available
                  alt="Aman Sharma"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg text-black font-semibold">Saumitra Shukla</h3>
                  <p className="text-sm text-gray-500">
                    Senior Frontend Developer at Retvens Services | MERN Stack
                    Developer
                  </p>
                  <p className="text-xs text-gray-400">November 11, 2024</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                I had the pleasure of working with Dhruv, and he’s an
                outstanding React developer. His expertise in building
                high-quality, responsive interfaces is impressive, and he
                consistently delivers clean, optimized code. Dhruv’s attention
                to detail, combined with his proactive approach to
                problem-solving, makes him a key asset to any team. He’s also a
                great communicator and team player, always open to feedback and
                eager to contribute. <strong> I highly recommend Dhruv</strong>{" "}
                for any role needing a skilled, reliable, and forward-thinking
                React developer.
              </p>
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
              <MdOutlineKeyboardArrowDown />
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
                <div
                  data-tooltip-id={"download"}
                  data-tooltip-content={"Download Resume"}
                  onClick={handleDownload}
                  style={{ cursor: "pointer" }}
                >
                  <MdOutlineFileDownload color="white" size={25} />
                </div>
                <Tooltip
                  id={"download"}
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

