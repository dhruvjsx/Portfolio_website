import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { gsap, CSSPlugin, Expo } from "gsap";
import FirstScreen from "./Dashbord/Intro";
gsap.registerPlugin(CSSPlugin);

const Loader=()=> {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter < 30) {
            return prevCounter + 1;
          } else if (prevCounter === 30) {
            // Pause for 1 second
            clearInterval(count);
            setTimeout(() => {
              const newCount = setInterval(() => {
                setCounter((counter) => {
                  if (counter < 100) {
                    return counter + 1;
                  } else {
                    clearInterval(newCount);
                    setCounter(100);
                    reveal();
                    return 100; // Ensure the counter doesn't go above 100
                  }
                });
              }, 25);
            }, 1000); // 1 second delay
            return prevCounter; // Return the current counter value while waiting
          } else {
            return prevCounter + 1; // Continue incrementing after the pause
          }
        });
      }, 25);
      
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".follow", {
      height: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
    .to(".hide", { opacity: 0, duration: 0.3 })
    .to(".hide", { display: "none", duration: 0.3 })
    .to(".loading , .follow", {
        height: "100%",
        ease: Expo.easeInOut,
        // backgroundColor:'transparent',
        // opacity:0,
        duration: 0.2,
        delay: 0.5,
      },"<")
      .to('.follow',{
          width: "100%",
          ease: Expo.easeInOut,
          // backgroundColor:'transparent',
          opacity:0,
          duration: 0.5 ,
          delay: 0.5,
        },"<")
        .to('.appContainer',{
          opacity:0,
          duration:1,
        },'<')
      .to(".first-screen", { opacity: 1},"<")
      .to(".loading,.follow,.appContainer", {
        display: "none",
        duration: 0.3,
      },)
  };

  return (
    <div className="appContainer w-screen h-screen text-black bg-white fixed top-0 left-0 flex items-center justify-center z-[999999]">
     <div className="h-full loading w-full bg-white flex justify-center items-center absolute top-0 z-30">

     <div className="follow absolute bg-[#f48049] h-0 w-[2px] z-20 overflow-hidden">
          <div className="h-[100vh] mx-auto bg-transparent"></div>
        </div>
        <ProgressBar
          className="hide"
          id="progress-bar"
          style={{ height: counter + "%" }}
        ></ProgressBar>
        <Count id="count" className="hide">
          {/* {counter}% */}
        </Count>
      </div>

      {/* FirstScreen is positioned below the loader */}
     {/* <FirstScreen1> <FirstScreen className="first-screen" /></FirstScreen1> */}
    </div>
  );
}

export default Loader;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  background-color: #ffffff;
  position: fixed; /* Changed from absolute to relative */
  top: 0;
  left:0;
  display:flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; 
`;

const Loading = styled.div`
  height: 100%;
  width: 100%;
  
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 3; /* Ensure loader overlaps everything else */
`;

const Follow = styled.div`
  position: absolute;
  background-color: #f48049;
  height: 0px;
  width: 2px;
//   left: 0;
  z-index: 2;

  overflow: hidden;
`;

const ProgressBar = styled.div`
  position: absolute;
//   left: 0;
  background-color: black;
  height: 0px;
  width: 2px;
  transition: 0.4s ease-in-out;
`;

const Count = styled.p`
  position: absolute;
  font-size: 130px;
  color: #fff;
  transform: translateY(-15px);
  font-weight: 500;
`;

const FirstScreen1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffcc00; /* Example background color */
  z-index: 1; /* Make sure it stays behind the loader */
  opacity: 0;
  transition: opacity 0.6s ease;
`;

// You can adjust the content inside FirstScreen and add whatever styling you like.
