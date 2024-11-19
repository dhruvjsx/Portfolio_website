import React from 'react';
import { createBrowserRouter,
    RouterProvider, } from "react-router-dom";
import Dashbord from '../Pages/Dashbord';
import NotFound from '../Components/NotFound';
import ScrollToTop from '../Components/ScrollToTop';
import UniversalProject from '../Components/Project/UniversalProject';
import { useSmoothScroll } from '../Hooks/useSmoothScroll';

const AppRouters = () => {
    const lenis = useSmoothScroll();

    const router = createBrowserRouter([
        {
          path: "/",
          element: <> <ScrollToTop lenis={lenis} /> <Dashbord/></>,
        },
        {
            path: "/project/ratex",
            element: <><ScrollToTop lenis={lenis} /><UniversalProject project='RateX'/></>,
          },
          
          {
            path: "/project/R-world",
            element: <><ScrollToTop lenis={lenis} />  <UniversalProject project='RWorld'/></>,
          },
          {
            path: "/project/R-Job",
            element: <><ScrollToTop lenis={lenis} />  <UniversalProject project='RJob'/></>,
          },
          {
            path: "/project/Admin-panel",
            element: <><ScrollToTop lenis={lenis} />  <UniversalProject project='Admin Panel'/></>,
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
