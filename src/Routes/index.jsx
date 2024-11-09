import React from 'react';
import { createBrowserRouter,
    RouterProvider, } from "react-router-dom";
import Dashbord from '../Pages/Dashbord';
import NotFound from '../Components/NotFound';
import StackingCards from '../Components/StackingCard';
import Ratex from '../Components/Project/Ratex';
import ScrollToTop from '../Components/ScrollToTop';
import RWorld from '../Components/Project/RWorld';
import Header from '../Components/header';
import UniversalProject from '../Components/Project/UniversalProject';

const AppRouters = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <><ScrollToTop/> <Dashbord/></>,
        },
        {
            path: "/project/ratex",
            element: <><ScrollToTop/><UniversalProject project='RateX'/></>,
          },
          
          {
            path: "/project/R-world",
            element: <div className=' '><ScrollToTop/>  <UniversalProject project='RWorld'/></div>,
          },
          {
            path: "/project/R-Job",
            element: <div className=' '><ScrollToTop/>  <UniversalProject project='RJob'/></div>,
          },
          {
            path: "/project/Admin-panel",
            element: <div className=' '><ScrollToTop/>  <UniversalProject project='Admin Panel'/></div>,
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
