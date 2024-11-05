import React from 'react';
import { createBrowserRouter,
    RouterProvider, } from "react-router-dom";
import Dashbord from '../Pages/Dashbord';
import NotFound from '../Components/NotFound';
import StackingCards from '../Components/StackingCard';
import Ratex from '../Components/Project/Ratex';
import ScrollToTop from '../Components/ScrollToTop';

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
          path: "*", 
          element: <NotFound/>,
        },
      ]);
      
  return (
    <RouterProvider router={router} />

  );
};

export default AppRouters;
