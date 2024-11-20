import { gsap } from "gsap";
import React, { useState,lazy, Suspense, useLayoutEffect, useRef } from "react";
import SaumitraSirRecommendation from "../assets/Reviews/1719047805302.jpeg";
import AmanSirRecommendation from "../assets/Reviews/1622627971114.jpeg";
// Dynamically import components using React.lazy
const Header = lazy(() => import("../Components/header"));
const Intro = lazy(() => import("../Components/Dashbord/Intro"));
const MyWork = lazy(() => import("../Components/Dashbord/MyWork"));
const Gallery = lazy(() => import("../Components/Dashbord/text/Gallary"));
const JavascriptParallex = lazy(() => import("../Components/Dashbord/JavascriptParallex"));
const Skills = lazy(() => import("../Components/Dashbord/Skills"));
const  HorizontalScroll = lazy(() => import("../Components/Dashbord/HorizontalScroll"));

const Dashbord = () => {
  const [currentSection, setCurrentSection] = useState();
const [isDesktop,setIsDesktop]=useState();
const windowSize = useRef(null);
useLayoutEffect(() => {
    let mm = gsap.matchMedia(windowSize);
    mm.add("(min-width: 600px)", () => {
        setIsDesktop(true)
      return () => {
        // console.log("mobile");
      };
    });
  });

  return (
    <div  ref={windowSize} className=" ">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header currentSection={currentSection} />
      </Suspense>

      <Suspense fallback={<div>Loading Intro...</div>}>
        <Intro />
      </Suspense>

      <Suspense fallback={<div>Loading Gallery...</div>}>
        <Gallery setCurrentSection={setCurrentSection} />
      </Suspense>

      <div className="w-full h-[100vh]">
        <Suspense fallback={<div>Loading Javascript Parallex...</div>}>
          <JavascriptParallex setCurrentSection={setCurrentSection} />
        </Suspense>
      </div>

      <div>
        <Suspense fallback={<div>Loading Skills...</div>}>
          <Skills setCurrentSection={setCurrentSection} />
        </Suspense>
      </div>

      <div id="work" className="w-full ">
        <Suspense fallback={<div>Loading My Work...</div>}>
          <MyWork setCurrentSection={setCurrentSection} />
        </Suspense>
      </div>

     {isDesktop? <Suspense fallback={<div>Loading Horizontal Scroll...</div>}>
        <HorizontalScroll />
      </Suspense>:<div className="h-auto w-[100vw] mt-10 bg-black">
  <div className="horizontalText h-[20vh] overflow-hidden text-white text-3xl font-bold leading-snug mx-4">
    <div>How</div>
    <div>can I</div>
    <div>help you?</div>
  </div>

  <section className="horizontalSection w-full mt-5 flex flex-wrap gap-2 justify-center items-center text-white ">
    {/* Unified Section */}
    {[
      "Modern UI Design",
      "Deployment",
      "Data Visualization",
      "Frontend",
      "Optimization",
      "Scalability",
      "Innovation",
      "Team Collaboration",
      "Backend",
      "System Design",
      "3D Animation",
      "Customized Solutions",
    ].map((item, index) => (
      <div
        key={index}
        className="blackBox transition-shadow duration-300 hover:shadow-blue-bottom bg-custom-gradient h-16 w-[45%] md:w-[30%] border-2 border-black shadow-lg rounded-md flex items-center justify-center text-center text-sm"
      >
        {item}
      </div>
    ))}
  </section>
  <div className="review-container h-full flex flex-col p-2 mt-8 items-center justify-center gap-4 ">
            <div className="review top border w-full h-auto  bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={AmanSirRecommendation} // replace with the profile image if available
                  alt="Aman Sharma"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Aman Sharma</h3>
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
            <div className="review top border w-full h-auto  bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={SaumitraSirRecommendation} // replace with the profile image if available
                  alt="Aman Sharma"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Saumitra Shukla</h3>
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
</div>

}
    </div>
  );
};

export default Dashbord;
