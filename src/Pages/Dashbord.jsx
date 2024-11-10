import React, { useState } from "react";
import Header from "../Components/header";
import Intro from "../Components/Dashbord/Intro";
import MyWork from "../Components/Dashbord/MyWork";
import Gallery from "../Components/Dashbord/text/Gallary";
import JavascriptParallex from "../Components/Dashbord/JavascriptParallex";
import Skills from "../Components/Dashbord/Skills";
import DeepSeaCreatures from "../Components/HorizontalScroll";
import WheelSlider from "../Components/Dashbord/WheelSlider";
const Dashbord = () => {
    const [currentSection,setCurrentSection]=useState()
    console.log(currentSection,"currentSection")
  return (
    <div className=" ">
      <Header currentSection={currentSection} />
      <Intro />
      <Gallery setCurrentSection={setCurrentSection} />
      <div className="w-full h-[100vh]">
        <JavascriptParallex setCurrentSection={setCurrentSection} />
      </div>
      <div >

      <Skills setCurrentSection={setCurrentSection}  />
      </div>
      <div id='work' className="w-full ">
        <MyWork setCurrentSection={setCurrentSection}  />
      </div>
      <DeepSeaCreatures/>
  
    </div>
  );
};

export default Dashbord;
