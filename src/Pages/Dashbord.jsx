import { gsap } from "gsap";
import React, {
  useState,
  lazy,
  Suspense,
  useLayoutEffect,
  useRef,
} from "react";
import ContactMeMobile from "../Components/Dashbord/ContactMeMobile";

// Dynamically import components using React.lazy
const Header = lazy(() => import("../Components/header"));
const Intro = lazy(() => import("../Components/Dashbord/Intro"));
const MyWork = lazy(() => import("../Components/Dashbord/MyWork"));
const Gallery = lazy(() => import("../Components/Dashbord/text/Gallary"));
const JavascriptParallex = lazy(() =>
  import("../Components/Dashbord/JavascriptParallex")
);
const Skills = lazy(() => import("../Components/Dashbord/Skills"));
const HorizontalScroll = lazy(() =>
  import("../Components/Dashbord/HorizontalScroll")
);

const Dashbord = () => {
  const [currentSection, setCurrentSection] = useState();
  const [isDesktop, setIsDesktop] = useState();
  const windowSize = useRef(null);
  useLayoutEffect(() => {
    let mm = gsap.matchMedia(windowSize);
    mm.add("(min-width: 600px)", () => {
      setIsDesktop(true);
      return () => {
        // console.log("mobile");
      };
    });
  });
 

  return (
    <div ref={windowSize} className=" ">
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

      {isDesktop ? (
        <Suspense fallback={<div>Loading Horizontal Scroll...</div>}>
          <HorizontalScroll />
        </Suspense>
      ) : (
        <ContactMeMobile setCurrentSection={setCurrentSection} isDesktop={isDesktop}/>
      )}
    </div>
  );
};

export default Dashbord;
