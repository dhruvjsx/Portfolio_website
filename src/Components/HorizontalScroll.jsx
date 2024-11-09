import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null)

  useGSAP(() => {
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
        end: () => `+=${horizontalScroll.offsetWidth }`,
      },
    });
    gsap.to(scroller, {
      backgroundColor: "black",

      scrollTrigger: {
        trigger: scroller,
        start: "top top",
        end: () => `+=${horizontalScroll.offsetWidth +100}`,
        toggleActions: "play reverse play reverse",
        //   scrub: true,
       
      },
    });
    gsap.to(".horizontalText", {
        color:'white',
        scrollTrigger: {
          trigger: scroller,
          start: "top top",
          end: () => `+=${horizontalScroll.offsetWidth +100}`,
          toggleActions: "play reverse play reverse",
          //   scrub: true,
    
        },
      });

      gsap.to(".blackBox", {
        color:'white',
        border:'1px solid white',
        scrollTrigger: {
          trigger: scroller,
          start: "top top",
          end: () => `+=${horizontalScroll.offsetWidth +100}`,
          toggleActions: "play reverse play reverse",
          //   scrub: true,
        },
        
      });

      gsap.from(".review", {
        opacity:0,
        y:100,
 stagger:0.7,
 duration:1,
        scrollTrigger: {
            trigger: ".review",
            containerAnimation: scrollTween,
            markers:true,
            start: "left left",
            toggleActions: "play none none none",
            id: "1",
          }
        
      });
  }, []);
console.log(scrollerRef?.current?.offsetWidth, window?.innerWidth,"scroller ref")
  return (
    <div className="outer overflow-hidden ">
      <div
        ref={containerRef}
        className="scroll  flex flex-col w-[220vw] h-[100vh] overflow-x-hidden"
      >
        <div className="horizontalText w-[500px] text-black text-6xl font-bold leading-snug mx-4">
          <div>How</div>
          <div>can I</div>
          <div>help you ?</div>
        </div>
        <section ref={scrollerRef} className="horizontalSection mt-10 flex  justify-start p-10 ">
          <div className="grid  grid-cols-6 gap-4 text-black ">
            <div className="blackBox bg-transparent  border-2 border-black shadow-lg rounded-md justify-center p-4 h-[200px] w-[400px] flex  items-center text-center">
              Responsive UI Design
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 justify-center  h-[200px] w-[400px] flex items-center  text-center">
              Backend
            </div>
            <div className="blackBox bg-transparent  border-2 border-black shadow-lg rounded-md justify-center p-4 h-[200px] w-[400px] flex  items-center text-center">
              Deployment
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 justify-center   h-[200px] w-[400px] flex items-center  text-center">
              Data Visualization
            </div>
            <div className="blackBox bg-transparent  border-2 border-black  shadow-lg rounded-md p-4 justify-center   h-[200px] w-[400px] flex items-center  text-center">
              Frontend
            </div>
            <div className="bg-white shadow-lg rounded-md p-4  justify-center h-[200px] w-[400px] flex items-center  text-center">
              Optimization
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 justify-center  h-[200px] w-[400px] flex items-center  text-center">
              Scalability
            </div>
            <div className="blackBox bg-transparent  border-2 border-black shadow-lg rounded-md justify-center p-4 h-[200px] w-[400px] flex  items-center text-center">
              Innovation
            </div>
            <div className="bg-white shadow-lg rounded-md p-4 justify-center  h-[200px] w-[400px] flex items-center  text-center">
              Team collaboration
            </div>
            <div className="blackBox bg-transparent  border-2 border-black  shadow-lg rounded-md p-4 justify-center  h-[200px] w-[400px] flex items-center  text-center">
              System Design
            </div>
            <div className=" bg-white shadow-lg rounded-md p-4 justify-center  h-[200px] w-[400px] flex items-center  text-center">
            Customized Solutions
            </div>
            <div className="blackBox bg-transparent  border-2 border-black  shadow-lg rounded-md p-4 justify-center  h-[200px] w-[400px] flex items-center  text-center">
            3D Animation
            </div>
           
          </div>

<div className=" review flex items-center justify-center h-full ">

          <div className="review mx-20 border h-1/2 w-[500px]">hello</div>
          <div className="review mx-20 border h-1/2 w-[500px]">hello</div>
</div>
        </section>
      </div>
    </div>
  );
};

export default HorizontalScroll;
