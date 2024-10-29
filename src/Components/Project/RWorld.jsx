import React from "react";
import RatexMockup from "../../assets/RateX/RatexMockup.png";
import StackingCards from "../StackingCard";
import HorizontalScroll from "../HorizontalScroll";

const RWorld = () => {
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen px-8 md:px-16 w-full bg-[#f8f9fa] relative z-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 w-full max-w-6xl">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
          <h1 className="text-[#CD505A] font-semibold text-2xl md:text-3xl mb-2">RWorld</h1>
          <p className="text-[#444346] font-SharpGrotesk text-lg md:text-xl">
          Task Management / Employee management 
          </p>
          <div className="mt-3 text-sm md:text-base text-[#444346] font-medium leading-relaxed">
            0-to-1 Product Design | SaaS Platform | Web Design | App Design |
            Stakeholder Management
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] mt-8 ">
          <img
            src={RatexMockup}
            alt="Ratex Mockup"
            className="h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* StackingCards Section */}
      <div className="mt-16 w-full h-full  bg-[#f8f9fa] oveflow-hidden">
        <StackingCards project='RWorld' />
      </div>
     
    </div>
  );
};

export default RWorld;
