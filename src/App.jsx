import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import AppRouters from "./Routes";
import Loader from "./Components/Loader";
import { useSmoothScroll } from "./Hooks/useSmoothScroll";
import { useLayoutEffect } from "react";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';
gsap.registerPlugin(ScrollTrigger);

function App() {
 
  // useSmoothScroll();

  return (
    <div className="relative App h-auto w-full bg-[#bcb8ad] ">
      <Loader />
      <AppRouters />
      <Analytics />
      <SpeedInsights/>
      {/* </Router> */}
    </div>
  );
}

export default App;
