import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import rateXicon from "../../assets/RateX/RatexMockup.png";
import RJobMockup from '../../assets/RJobs/RJobMockup.png'
import adminMockup from '../../assets/AdminPanel/adminMockup.png'
import RWorld from "../../assets/RWorld/rWorldLightLogo.svg";
import KanbanVideo from "../../assets/RWorld/kanban.mp4";
import RJobLogo from "../../assets/RJobs/RJobLogo.svg";
import NetflixLogo from "../../assets/Netflix/Netflix_Logo.png";
import { useNavigate } from "react-router-dom";
const MyWork = ({setCurrentSection}) => {
const navigate= useNavigate();
    // const navigate =useNavigate();
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const projectImage = document.querySelectorAll(".projectImage");
  // Timeline for animation triggered by scroll
projectImage.forEach((image)=>{
    const t1= gsap.timeline({
        scrollTrigger: {
          trigger: image,  // Element that triggers the animation
          start: "top 85%", 
          onEnter:()=>{
            setCurrentSection('Work')
          },
          onEnterBack:()=>{
            setCurrentSection('Work')
          },
          // Start when top of boxes hits a bit past center of the viewport
          end: "bottom 95%", // End the animation after scrolling 500px past the bottom
          scrub: 1, // Smoothly link the progress of the animation to the scroll
          toggleActions: "play reverse play reverse",
         // Optional: Adds visual markers for debugging
        }
      })
  
      t1.from(image,{
          width:"5%",
        //   duration:1,
        //   ease: "expo.inOut",
  
      })
})

  
   
  }, []);
  const projects = [
    { title: "RateX", projectImg: rateXicon },
    { title: "R-World", projectImg: RWorld },
    { title: "R-Jobs", projectImg: RJobLogo },
    { title: "Netflix-GPT", projectImg: NetflixLogo },
    { title: "Netflix-GPT", projectImg: NetflixLogo },
    { title: "Netflix-GPT", projectImg: NetflixLogo },
    { title: "Netflix-GPT", projectImg: NetflixLogo },
  ];
  return (
<div
  className="w-full h-auto bg-no-repeat"
  style={{ background: 'linear-gradient(to bottom , #bcb8ad/10 10%, #FFFFFF 20%)' }}
>
  <div className="w-[90%] md:w-[70%] mx-auto">
    {/* Project Section 1 */}
    <div className="h-[70vh] py-10 w-full">
      <div className="flex flex-col-reverse md:flex-row h-full gap-6 md:gap-2 w-full items-end justify-start">
        <div className="w-full md:w-1/3">
          <h1 className="text-[#CD505A] font-semibold">Ratex</h1>
          <p className="text-[#444346] font-SharpGrotesk">
            Revenue Management Software
          </p>
          <div className="mt-2 text-sm md:text-[16px]">
            0-to-1 Product Design | SaaS Platform | Web Design | App Design |
            Stakeholder Management
          </div>
        </div>
        <div onClick={()=>navigate('project/ratex')} className=" cursor-pointer w-full md:w-1/2 h-full">
          <img
            src={rateXicon}
            alt="project"
            className="h-full projectImage w-full"
          />
        </div>
      </div>
    </div>

    {/* Project Section 2 */}
    <div className="h-[70vh] py-10 w-full">
      <div className="flex flex-col md:flex-row h-full gap-4 w-full items-end justify-start">
        <div onClick={()=>navigate('project/R-world')}  className="cursor-pointer w-full md:w-1/2 flex items-end h-full">
        <video
        className="w-full projectImage h-full"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={KanbanVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
        <div className="w-full md:w-1/3">
          <h1 className="text-[#CD505A] font-semibold">RWorld</h1>
          <p className="text-[#444346] font-SharpGrotesk">
            Task Management / Employee management 
          </p>
          <div className="mt-2 text-sm md:text-[16px]">
            React | Redux | Web Design | App Design |
            Stakeholder Management
          </div>
        </div>
      </div>
    </div>

    {/* Project Section 3 */}
    <div className="h-[70vh] py-10 w-full">
      <div className="flex flex-col-reverse md:flex-row h-full gap-2 w-full items-end justify-start">
        <div className="w-full md:w-1/3">
          <h1 className="text-[#CD505A] font-semibold">R-jobs</h1>
          <p className="text-[#444346] font-SharpGrotesk">
            Job Portal for Hospitality
          </p>
          <div className="mt-2 text-sm md:text-[16px]">
            0-to-1 Product Design | SaaS Platform | Web Design | App Design |
            Stakeholder Management
          </div>
        </div>
        <div  onClick={()=>navigate('project/R-job')}  className=" cursor-pointer w-full md:w-1/2 h-full">
        <img
            src={RJobMockup}
            alt="project"
            className="h-full projectImage w-full"
          />
        </div>
      </div>
    </div>

    {/* Project Section 4 */}
    <div className="h-[70vh] py-10 w-full">
      <div className="flex flex-col md:flex-row h-full gap-4 w-full items-end justify-start">
        <div  onClick={()=>navigate('project/admin-panel')}  className="w-full cursor-pointer md:w-1/2 h-full">
        <img
            src={adminMockup}
            alt="project"
            className="h-full projectImage w-[75%"
          />
        </div>
        <div className="w-full md:w-1/3">
          <h1 className="text-[#CD505A] font-semibold">Admin Panel</h1>
          <p className="text-[#444346] font-SharpGrotesk">
            Manage confidentail information
          </p>
          <div className="mt-2 text-sm md:text-[16px]">
            0-to-1 Product Design | SaaS Platform | Web Design | App Design |
            Stakeholder Management
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default MyWork;
