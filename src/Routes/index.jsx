import React, { useLayoutEffect, useRef, useState } from 'react';
import { createBrowserRouter,
    RouterProvider, } from "react-router-dom";
import Dashbord from '../Pages/Dashbord';
import NotFound from '../Components/NotFound';
import ScrollToTop from '../Components/ScrollToTop';
import UniversalProject from '../Components/Project/UniversalProject';
import { useSmoothScroll } from '../Hooks/useSmoothScroll';
import { gsap } from 'gsap';

const AppRouters = () => {
    const lenis = useSmoothScroll();
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
    const router = createBrowserRouter([
        {
          path: "/",
          element: <> <ScrollToTop lenis={lenis} /> <Dashbord windowSize={windowSize}x isDesktop={isDesktop}/></>,
        },
        {
            path: "/project/ratex",
            element: <><ScrollToTop lenis={lenis} /><UniversalProject isDesktop={isDesktop} project='RateX'/></>,
          },
          
          {
            path: "/project/R-world",
            element: <><ScrollToTop lenis={lenis} />  <UniversalProject isDesktop={isDesktop}  project='RWorld'/></>,
          },
          {
            path: "/project/R-Job",
            element: <><ScrollToTop lenis={lenis} />  <UniversalProject isDesktop={isDesktop}  project='RJob'/></>,
          },
          {
            path: "/project/Admin-panel",
            element: <><ScrollToTop lenis={lenis} />  <UniversalProject isDesktop={isDesktop}  project='Admin Panel'/></>,
          },
      {
          path: "*", 
          element: <NotFound/>,
        },
      ]);
      
  return (
    <RouterProvider router={router} />

  );
};

export default AppRouters;
