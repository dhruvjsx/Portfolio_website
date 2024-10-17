import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

import './App.css'
import FirstScreen from './Components/FirstScreen'
import SecondScreen from './Components/SecondScreen'
import ThirdScreen from './Components/ThirdScreen'
import FourthScreen from './Components/FourthScreen'
import TestPage from './Components/SkillSet'
import Loader from './Components/Loader'
import Header from './Components/header'
import MyWork from './Components/MyWork'
// import SkillSet from './Components/SkillSet'

gsap.registerPlugin(ScrollTrigger)

function App() {
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
      <div className=' App h-auto w-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 '>
        <Loader />
        <Header/>
      <FirstScreen />
      <SecondScreen />
      <div className='w-full h-[100vh]'>

      <MyWork/>
      </div>
      {/* <TestPage/> */}
      {/* <ThirdScreen/>  */}
      {/* <FourthScreen /> */}
      {/* <div className='h-[100vh] makeitblack'></div> */}
      <div className='h-[100vh]'></div>
    </div>
  )
}

export default App
