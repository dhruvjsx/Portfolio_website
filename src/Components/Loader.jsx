import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { gsap, CSSPlugin, Expo } from "gsap";
import FirstScreen from "./FirstScreen";
gsap.registerPlugin(CSSPlugin);

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
    .to(".hide", { opacity: 0, duration: 0.3 })
    .to(".hide", { display: "none", duration: 0.3 })
    .to(".follow,.Loading", {
        height: "100%",
        ease: Expo.easeInOut,
        backgroundColor:'transparent',
        opacity:0,
        duration: 0.2,
        delay: 0.5,
      },"<")
      .to('.appContainer',{
        opacity:0
      },"<")
      .to(".first-screen", { opacity: 1},"<")
      .to(".loading,.follow,.appContainer", {
        display: "none",
        duration: 0.3,
      },"<")
  };

  return (
    <AppContainer className="appContainer">
      <Loading className="loading">
        <Follow className="follow">
          <div className="h-[100vh] bg-transparent"></div>
        </Follow>
        <ProgressBar
          className="hide"
          id="progress-bar"
          style={{ width: counter + "%" }}
        ></ProgressBar>
        <Count id="count" className="hide">
          {counter}%
        </Count>
      </Loading>

      {/* FirstScreen is positioned below the loader */}
     {/* <FirstScreen1> <FirstScreen className="first-screen" /></FirstScreen1> */}
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  position: fixed; /* Changed from absolute to relative */
  top: 0;
  left:0;
  display:flex;
  align-items: center;
  justify-content: center;
  z-index: 1; 
`;

const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: #121212;
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
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
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
