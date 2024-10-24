import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dhruvoid from "../assets/dhruvoid.png";
import keyboard from "../assets/keyboard.png";
import clip from "../assets/clicp.png";
import pin from "../assets/pin.png";
import pins from "../assets/pins.png";
import reactBadge from "../assets/reactBedge.png";
import typeScriptBadge from "../assets/TypeScriptBedge.png";
import fullStackBadge from "../assets/fullStackBade.png";
import quote from "../assets/quote.png";
import { useGSAP } from "@gsap/react";
import Header from "./header";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const FirstScreen = () => {
  useGSAP(() => {

    var tl1 = gsap.timeline({ defaults: { scrollTrigger: {
      trigger: ".firstContainer",

      scrub: 2,
      pin: true,

      // pinnedContainer: ".firstContainer",
    }, } });

    tl1
    .to(".leftSide", {
      x: -200,
      rotate: 45,
      scrollTrigger: {
        trigger: ".firstContainer",
        start: "top top",
        end: "+=100%", // Adjust the end value to overlap with the right element
        scrub: 2,
        // pin: true,
   
        // pinnedContainer: ".firstContainer",
      },
    })
    .to(
      ".rightSide",
      {
        x: 170,
        rotate: 45,
        scrollTrigger: {
          trigger: ".firstContainer",
          start: "top top",
          end: "center top",
          scrub: 2,

          pin: true,
          // pinnedContainer: ".firstContainer",
        },
      },"<"
    )
      .to(
        ".topSide",
        {
          y: -150,
          rotate: 90,
          scrollTrigger: {
            trigger: ".firstContainer",
            start: "top top",
            end: "50% top",
            scrub: 2,
            pin: true,
            pinnedContainer: ".firstContainer",
          },
        }
      );
  }, []);


  return (
    <section className="firstContainer  bg-gradient-to-br from-gray-200 via-[#bcb8ad]  w-[100vw] overflow-x-hidden h-screen relative overflow-hidden">

<img
        src={quote}
        alt="quote"
        className="absolute leftSide top-2 left-4 w-44"
      />
      <img
        src={keyboard}
        alt="keyboard"
        className="absolute leftSide -left-4 top-1/3 w-28 rotate-12"
      />
      <img
        src={clip}
        alt="clip"
        className="absolute leftSide bottom-2 left-4 w-24"
      />
      <img
        src={pin}
        alt="pin"
        className="absolute leftSide top-28 left-32 w-11"
      />

      {/* Right Side Elements */}
      <img
        src={pins}
        alt="pins"
        className="absolute rightSide top-4 right-8 w-44"
      />
      <img
        src={reactBadge}
        alt="React Badge"
        className="absolute top-4 topSide left-1/4 w-12"
      />
      <img
        src={typeScriptBadge}
        alt="TypeScript Badge"
        className="absolute rightSide top-24 right-12 w-12"
      />
      <img
        src={fullStackBadge}
        alt="Full Stack Badge"
        className="absolute bottom-4 rightSide right-8 w-12"
      />
      <p className="absolute rightSide top-1/2 right-8 rotate-12 text-2xl font-serif">
        140+ wpm
      </p>

      {/* Main Image */}
      <div className="dhruvoid w-full flex items-center justify-center ml-28 z-10 absolute bottom-0">
        <img src={dhruvoid} width={500} alt="" />
      </div>

      <div className="transform translate-x-0 translate-y-0 text-[#dfdcff] text-[clamp(2rem,6rem,4vw)] leading-[1.2] mx-auto my-[50px] w-[800px] invisible" id="quote">Deadlines are looming. You've got to deliver something that looks amazing, packed with lots of whiz-bang effects that run smoothly on various machines. No time to reinvent the wheel. You need a reliable tool set that helps you live up to your reputation as a coding Rock Star.</div> 
      {/* Text Content */}
      <div className="absolute left-[20%] bottom-1/4 text-left uppercase text-[5rem] leading-none font-extrabold   break-words hyphens-auto">
      
  <h1>A FRONTEND</h1>
  <h1>Developer</h1>
  <h1>Who Loves </h1>
  <h1>Design</h1>


      </div>
    </section>
  );
};
export default FirstScreen;
