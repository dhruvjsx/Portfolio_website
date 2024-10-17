import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function TestPage() {
  gsap.registerPlugin(ScrollTrigger);
  const elementRef = useRef(null);

//   useEffect(() => {
//     let sections = gsap.utils.toArray(".panel");

//     let scrollTween = gsap.to(sections, {
//       xPercent: -60 * sections.length,
//       startAt: { xPercent: 0 },
//       scrollTrigger: {
//         trigger: ".scroll",
//         start: "top top",
//         pin: true,
//         scrub: true,
//         markers: false,
//       },
//     });

//     gsap.to(".box0", {
//       duration: 1,
//       opacity: 1,
//       y: 12,
//       x: 30,
//       scrollTrigger: {
//         containerAnimation: scrollTween,
//         trigger: ".box0",
//         start: "left center",
//         markers: false,
//         scrub: true,
//         toggleClass: "active",
//       },
//     });
//     gsap.to(".box1", {
//       duration: 1,
//       opacity: 1,
//       x: 30,
//       y: -12,
//       yoyo: true,
//       scrollTrigger: {
//         containerAnimation: scrollTween,
//         trigger: ".box1",
//         start: "left center",
//         markers: false,
//         scrub: true,
//         toggleClass: "active",
//       },
//     });
//     gsap.to(".box2", {
//       duration: 4,
//       opacity: 1,
//       x: 30,
//       y: 12,
//       rotate: 50,
//       scrollTrigger: {
//         containerAnimation: scrollTween,
//         trigger: ".box2",
//         start: "left center",
//         toggleActions: "play none none reverse",
//         markers: false,
//         scrub: true,
//         toggleClass: "active",
//       },
//     });

//     ScrollTrigger.refresh();
//   }, []);

  return (
    <div className="scroll h-screen w-screen text-black">
      <div className="introduction text-8xl h-24">IM A</div>
      <div className="container h-screen w-[500%] flex">
        <div className="space w-5"></div>
        <div className="panel w-1/5 h-screen">
          <div className="firstBlock h-full w-full">
            <div ref={elementRef} className="box0 text-8xl bg-orange-600 text-pink-500 font-lato">
              FRONTEND DEVELOPER
            </div>
            <div className="about-text0 text-xl bg-gray-700 text-pink-500 font-lato"></div>
          </div>
        </div>
        <div className="space1 w-24"></div>
        <div className="panel w-1/5 h-screen">
          <div className="firstBlock h-full w-full">
            <div className="box1 text-8xl bg-cyan-300 text-pink-500 font-lato mr-52">
              BACKEND DEVELOPER
            </div>
            <div className="about-text1 text-xl bg-gray-700 text-pink-500 font-lato"></div>
          </div>
        </div>
        <div className="panel w-1/5 h-screen">
          <div className="firstBlock h-full w-full">
            <div className="box2 text-8xl bg-green-700 text-pink-500 font-lato">
              DESIGNER
            </div>
            <div className="about-text2 text-xl bg-gray-700 text-pink-500 font-lato"></div>
          </div>
        </div>
        <div className="panel w-1/5 h-screen">
          <div className="firstBlock h-full w-full">
            <div className="box3"></div>
            <div className="about-text2 text-xl bg-gray-700 text-pink-500 font-lato"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
