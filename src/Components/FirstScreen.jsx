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
      // markers:true,
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
        markers:true,
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
          markers: true,
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
            markers:true,
            pinnedContainer: ".firstContainer",
          },
        }
      );
  }, []);


  return (
    <section className="firstContainer border bg-gradient-to-b from-gray-200 via-gray-300  w-[100vw] overflow-x-hidden h-screen relative overflow-hidden">
<Header/>
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
      <div className="dhruvoid w-full flex items-center justify-center absolute bottom-0">
        <img src={dhruvoid} width={500} alt="" />
      </div>

      {/* Text Content */}
      <div className="absolute left-1/4 bottom-1/4 text-left">
        <h1 className="text-4xl font-bold">A FRONT END</h1>
        <h1 className="text-4xl font-bold">DEVELOPER</h1>
        <h1 className="text-4xl font-bold">WHO LOVES</h1>
        <h1 className="text-4xl font-bold">DESIGN</h1>
      </div>
    </section>
  );
};
export default FirstScreen;
