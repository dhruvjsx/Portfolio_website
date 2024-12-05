import { gsap } from "gsap";
import React, {
  useState,
  lazy,
  Suspense,
  useLayoutEffect,
  useRef,
} from "react";


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
const ContactMeMobile = lazy(() =>
  import("../Components/Dashbord/ContactMeMobile")
);

const Dashbord = ({isDesktop,windowSize}) => {
  const [currentSection, setCurrentSection] = useState();
 


 

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
          <JavascriptParallex isDesktop={isDesktop} setCurrentSection={setCurrentSection} />
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
        <Suspense fallback={<div>Loading Horizontal Scroll...</div>}>
        <ContactMeMobile setCurrentSection={setCurrentSection} isDesktop={isDesktop}/>
        </Suspense>
      )}
    </div>
  );
};

export default Dashbord;
