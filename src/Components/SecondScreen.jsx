import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reactLogo from '../assets/react.png';
import reduxLogo from '../assets/redux.png';
import tailwindLogo from '../assets/tailwind.png';
import nextjsLogo from '../assets/nextjs.png';
import expressLogo from '../assets/express.png';
import nodeLogo from '../assets/node.png';

gsap.registerPlugin(ScrollTrigger);

const SecondScreen = () => {
  useEffect(() => {
    const textElement = document.querySelector('.textanime');
    const texts = textElement.textContent.split('');
    const imgs = gsap.utils.toArray('img');

    let clutter = '';

    texts.forEach((text, index) => {
      if (index % 2 === 0) {
        clutter += `<span class="even">${text}</span>`;
      } else {
        clutter += `<span class="odd">${text}</span>`;
      }
    });

    textElement.innerHTML = clutter;

    // GSAP Animations for Text
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textElement,
        start: "top 75%",
        end: "top 25%",
        scrub: true,
      }
    });

    tl.fromTo('.even', 
      { opacity: 0, y: -50, rotation: 360, scale: 0.5, color: "#ff0000" }, 
      { 
        opacity: 1, 
        y: 0, 
        rotation: 0, 
        scale: 1, 
        color: "#000000", 
        duration: 2, 
        stagger: 0.1 
      }
    );

    tl.fromTo('.odd', 
      { opacity: 0, y: 50, rotation: -360, scale: 0.5, color: "#0000ff" }, 
      { 
        opacity: 1, 
        y: 0, 
        rotation: 0, 
        scale: 1, 
        color: "#000000", 
        duration: 2, 
        stagger: 0.1 
      },
      "<" 
    );

    tl.to('.textanime', 
      { 
        scale: 1.2, 
        duration: 0.5, 
        ease: "power1.inOut" 
      }
    ).to('.textanime', 
      { 
        scale: 1, 
        duration: 2, 
        ease: "power1.inOut" 
      }
    );

    // GSAP Animations for Images
    imgs.forEach(img => {
      const speed = img.dataset.speed;
      gsap.to(img, {
        yPercent: speed * 50,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.space',
          start: 'top bottom',
          toggleActions: "none none none none",
          end: 'bottom top', // Ensure the animation continues smoothly until the element scrolls out of view
          scrub: 2,
          markers:false,
        //   onLeave: () => gsap.set(img, { clearProps: 'all' }) // Clear the properties when the animation is done to avoid resetting
        }
      });
    });

  }, []);

  return (
    <div className='flex z-10 overflow-y-hidden justify-center items-center h-screen relative overflow-hidden'>
      <h1 className='text-4xl textanime space-x-20'>JAVASCRIPT</h1>
      <div className=" space">
        <img className='absolute bottom-[0%] left-[40%]' src={reactLogo} data-speed="-12" alt="React"/>
        <img className='absolute bottom-[0%] left-[48%]' src={reduxLogo} data-speed="4" alt="Redux"/>
        <img className='absolute bottom-[0%] left-[10%]' src={tailwindLogo} data-speed="-3" alt="Tailwind"/>
        <img className='absolute bottom-[0%] left-[90%]' src={nextjsLogo} data-speed="-12" alt="Next.js"/>
        <img className='absolute bottom-[0%] left-[30%] w-20' src={nodeLogo} data-speed="-8" alt="Node.js"/>
        <img className='absolute bottom-[0%] left-[80%]' src={expressLogo} data-speed="-14" alt="Express"/>
      </div>
    </div>
  );
}

export default SecondScreen;
