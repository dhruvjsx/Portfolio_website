import { useState } from 'react'

import './App.css'
import FirstScreen from './Components/FirstScreen'
import SecondScreen from './Components/SecondScreen'
import ThirdScreen from './Components/ThirdScreen'
import FourthScreen from './Components/FourthScreen'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FirstScreen/>
     <SecondScreen/>
     <ThirdScreen/> 
     <FourthScreen/>
     <div className='h-[100vh] bg-black'></div>
     <div className='h-[100vh] bg-white'></div>
     
    </>
  )
}

export default App
