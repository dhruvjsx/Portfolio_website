import React from 'react';
import { createBrowserRouter,
    RouterProvider, } from "react-router-dom";
import Dashbord from '../Pages/Dashbord';
import NotFound from '../Components/NotFound';
import StackingCards from '../Components/StackingCard';
import Ratex from '../Components/Project/Ratex';

const AppRouters = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Dashbord/>,
        },
        {
            path: "/project/ratex",
            element: <Ratex/>,
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
