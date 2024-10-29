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

const AppRouters = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <><ScrollToTop/> <Dashbord/></>,
        },
        {
            path: "/project/ratex",
            element: <><ScrollToTop/> <Ratex/></>,
          },
          
        {
            path: "/project/R-world",
            element: <div className=' bg-[#f8f9fa]'><ScrollToTop/>  <RWorld/></div>,
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
