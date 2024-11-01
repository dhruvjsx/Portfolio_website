import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef ,useState} from 'react'

import './App.css'
import SecondScreen from './Components/SecondScreen'

import Loader from './Components/Loader'
import Header from './Components/header'
import MyWork from './Components/MyWork'
import Gallery from './Components/text/Gallary'
import RevealText from './Components/RevealText'
import Intro from './Components/Intro'

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
        {/* <Loader /> */}
        {/* <div
        ref={cursorRef}
        id="cursor"
        className="w-16 h-16 z-50 rounded-full bg-orange-500 pointer-events-none absolute mix-blend-darken"
      ></div> */}
        <Header/>
      <Intro />
  
      
      
      {/* <TestPage/> */}
      {/* <FourthScreen /> */
      }
      {/* <div className='h-[100vh] makeitblack'></div> */}
      {/* <div className='w-full  h-auto'>

      <StackingCards/>
      </div> */}
      <Gallery/>
      <div className='w-full h-[100vh]'>
      <SecondScreen />
      </div>
 <RevealText/>
      <div className='w-full '>

      <MyWork/>
      </div>
      {/* <div className='h-[100vh] border'></div> */}
      {/* <ThirdScreen/>  */}
    </div>
  )
}

export default App
