import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef ,useState} from 'react'

import './App.css'
import { BrowserRouter as Router, useLocation } from "react-router-dom";

import Dashbord from './Pages/Dashbord'
import AppRouters from './Routes';
import ScrollToTop from './Components/ScrollToTop';
import Loader from './Components/Loader';

gsap.registerPlugin(ScrollTrigger)

function App() {
    // const cursorRef = useRef(null);
    // const [cursorWidth, setCursorWidth] = useState(0);
    // const [cursorHeight, setCursorHeight] = useState(0);
  
    // const settings = {
    //   mouseX: 0,
    //   mouseY: 0,
    //   xPos: 0,
    //   yPos: 0,
    //   speed: 15, // speed factor
    // };
  
    // // Set cursor dimensions once the component is mounted
    // useEffect(() => {
    //   const cursor = cursorRef.current;
    //   setCursorWidth(cursor.offsetWidth);
    //   setCursorHeight(cursor.offsetHeight);
  
    //   const handleMouseMove = (e) => {
    //     settings.mouseX = e.pageX;
    //     settings.mouseY = e.pageY;
    //   };
  
    //   document.addEventListener('mousemove', handleMouseMove);
  
    //   return () => {
    //     document.removeEventListener('mousemove', handleMouseMove);
    //   };
    // }, []);
  
    // // Smooth cursor animation
    // useEffect(() => {
    //   const animate = () => {
    //     settings.xPos += (settings.mouseX - settings.xPos) / settings.speed;
    //     settings.yPos += (settings.mouseY - settings.yPos) / settings.speed;
  
    //     cursorRef.current.style.transform = `translate(${settings.xPos - cursorWidth / 2}px, ${settings.yPos - cursorHeight / 2}px)`;
  
    //     requestAnimationFrame(animate);
    //   };
  
    //   animate();
    // }, [cursorWidth, cursorHeight]);

//   useEffect(() => {
//     gsap.to('.makeitblack', {
//       backgroundColor: 'black',
//       duration: 1,
//       ease: 'power3.inOut',
//       scrollTrigger: {
//         trigger: '.makeitblack',
//         start: 'top top',
//         onEnter: () => {
//           gsap.to('.makeitblack', {
//             backgroundColor: 'black',
//             duration: 1,
//             ease: 'power3.inOut'
//           });
//         },
//         once: true // Ensure the animation only runs once
//       }
//     })
//   }, [])

  return (

      <div className=' App h-auto w-full bg-[#bcb8ad] '>
              {/* <Router> */}
            <Loader/>
       <AppRouters/>
              {/* </Router> */}
    </div>
  )
}

export default App
