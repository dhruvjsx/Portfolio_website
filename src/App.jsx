import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'
import AppRouters from './Routes';
import Loader from './Components/Loader';

gsap.registerPlugin(ScrollTrigger)

function App() {
 

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
