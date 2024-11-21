import React from 'react'
import SaumitraSirRecommendation from "../../assets/Reviews/1719047805302.jpeg";
import AmanSirRecommendation from "../../assets/Reviews/1622627971114.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  MdOutlineFileDownload,
  MdOutlineMarkEmailUnread,
} from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { Tooltip } from "react-tooltip";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
const ContactMeMobile = ({isDesktop,setCurrentSection}) => {
    useGSAP(() => {
        // Ensure ScrollTrigger registers element correctly
        ScrollTrigger.refresh();
      
        // Apply animation to .contact-me
        gsap.to(".contact-me", {
          backgroundColor: "black",
          color: "white",
          scrollTrigger: {
            trigger: "#contactMe", // Ensure ScrollTrigger watches this element
            start: "top 50%",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
            markers: true, // For debugging scroll positions
            onEnter: () => {
                debugger
              gsap.to("#work", {
                backgroundColor: "black",
                color: "white", // Change #work background color
                duration: 0.5, // Add smooth transition
              });
              setCurrentSection("Contact");
            },
            onEnterBack: () => {
              gsap.to("#work", {
                backgroundColor: "black", // Ensure consistency when scrolling back
                duration: 0.5,
                color: "white",
              });
              setCurrentSection("Contact");
            },
            onLeave: () => {
              gsap.to("#work", {
                backgroundColor: "", // Reset #work background color
                duration: 0.5,
                color: "",
              });
            },
            onLeaveBack: () => {
              gsap.to("#work", {
                backgroundColor: "", // Reset when scrolling back past .contact-me
                duration: 0.5,
                color: "",
              });
            },
          },
        });
      }, []);
      
      
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/resumeV2-2.pdf"; // Replace with the actual path
        link.download = "Dhruv_Parmar_Resume.pdf"; // The file name for download
        link.click();
      };
  return (
    <div id='contactMe' className="h-auto contact-me w-[100vw] ">
    <div className="horizontalText h-[20vh] overflow-hidden text-white text-3xl font-bold leading-snug mx-4">
      <div>How</div>
      <div>can I</div>
      <div>help you?</div>
    </div>
    
    <section className="horizontalSection w-full mt-5 flex flex-wrap gap-2 justify-center items-center text-white ">
      {/* Unified Section */}
      {[
        "Modern UI Design",
        "Deployment",
        "Data Visualization",
        "Frontend",
        "Optimization",
        "Scalability",
        "Innovation",
        "Team Collaboration",
        "Backend",
        "System Design",
        "3D Animation",
        "Customized Solutions",
      ].map((item, index) => (
        <div
          key={index}
          className="blackBox transition-shadow duration-300 hover:shadow-blue-bottom bg-custom-gradient h-16 w-[45%] md:w-[30%] border-2 border-black shadow-lg rounded-md flex items-center justify-center text-center text-sm"
        >
          {item}
        </div>
      ))}
    </section>
    <div className="review-container h-full flex flex-col p-2 mt-8 items-center justify-center gap-4 ">
      <div className="review top border w-full h-auto  bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <img
            src={AmanSirRecommendation} // replace with the profile image if available
            alt="Aman Sharma"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg text-black font-semibold">Aman Sharma</h3>
            <p className="text-sm text-gray-500">
              SIH 2020 Winner | Web & App Dev
            </p>
            <p className="text-xs text-gray-400">November 11, 2024</p>
          </div>
        </div>
        <p className="text-gray-700 mb-2">
          <strong>I am pleased to recommend Dhruv</strong> as a talented
          and dedicated Front-End Developer. His proficiency in React.js
          and exceptional problem-solving skills make him a valuable
          member of our team.
        </p>
        <p className="text-gray-700">
          Throughout his time with us, Dhruv has shown a remarkable
          ability to learn quickly and apply his skills effectively,
          delivering high-quality code with attention to detail and
          efficiency. His enthusiasm for tackling challenges and finding
          innovative solutions is impressive and motivates those around
          him. He consistently approaches tasks positively, proactively
          and is willing to take on new responsibilities.
        </p>
      </div>
      <div className="review top border w-full h-auto  bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <img
            src={SaumitraSirRecommendation} // replace with the profile image if available
            alt="Aman Sharma"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">Saumitra Shukla</h3>
            <p className="text-sm text-gray-500">
              Senior Frontend Developer at Retvens Services | MERN Stack
              Developer
            </p>
            <p className="text-xs text-gray-400">November 11, 2024</p>
          </div>
        </div>
        <p className="text-gray-700 mb-2">
          I had the pleasure of working with Dhruv, and he’s an
          outstanding React developer. His expertise in building
          high-quality, responsive interfaces is impressive, and he
          consistently delivers clean, optimized code. Dhruv’s attention
          to detail, combined with his proactive approach to
          problem-solving, makes him a key asset to any team. He’s also a
          great communicator and team player, always open to feedback and
          eager to contribute. <strong> I highly recommend Dhruv</strong>{" "}
          for any role needing a skilled, reliable, and forward-thinking
          React developer.
        </p>
      </div>
    </div>
    <div id="contact" className="contact-me-section w-full mt-10 bg-black text-white py-6">
      <h2 className="text-center text-2xl font-bold mb-4">Contact Me</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <a
          href="https://github.com/dhruvjsx"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-105 bg-gray-800 rounded-full p-3 flex items-center justify-center"
        >
          <FaGithub color="white" size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/dhruvjsx/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-105 bg-blue-700 rounded-full p-3 flex items-center justify-center"
        >
          <FaLinkedin color="white" size={25} />
        </a>
        <a
          href="mailto:letsconnectdhruv@gmail.com?subject=We%20Have%20An%20Opportunity%20For%20You"
          className="transition-transform transform hover:scale-105 bg-red-500 rounded-full p-3 flex items-center justify-center"
          onClick={() => {
            navigator.clipboard
              .writeText("letsconnectdhruv@gmail.com")
              .then(() => alert("Mail copied to clipboard!"))
              .catch((err) =>
                console.error("Failed to copy text: ", err)
              );
          }}
        >
          <MdOutlineMarkEmailUnread color="white" size={25} />
        </a>
        <a
          href="https://www.leetcode.com/dhruvjs"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-105 bg-yellow-500 rounded-full p-3 flex items-center justify-center"
        >
          <SiLeetcode color="white" size={25} />
        </a>
        <div
          className="transition-transform transform hover:scale-105 bg-green-600 rounded-full p-3 flex items-center justify-center cursor-pointer"
          onClick={handleDownload}
          data-tooltip-id={"download"}
          data-tooltip-content={"Download Resume"}
        >
          <MdOutlineFileDownload color="white" size={25} />
        </div>
      </div>
      <Tooltip
        id={"download"}
        style={{
          borderRadius: "10px",
          maxWidth: "350px",
          fontSize: "12px",
          whiteSpace: "normal",
          wordWrap: "break-word",
          overflow: "hidden",
          zIndex: 20,
        }}
      />
    </div>
    </div>
    
  )
}

export default ContactMeMobile

