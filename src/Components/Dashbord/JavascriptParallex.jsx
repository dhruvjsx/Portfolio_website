import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reactLogo from '../../assets/react.png';
import reduxLogo from '../../assets/redux.png';
import tailwindLogo from '../../assets/tailwind.png';
import nextjsLogo from '../../assets/nextjs.png';
import expressLogo from '../../assets/express.png';
import nodeLogo from '../../assets/node.png';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const JavascriptParallex = ({setCurrentSection,isDesktop}) => {
  useGSAP(() => {
    const textElement = document.querySelector('.textanime');
    const texts = textElement.textContent.split('');
    const imgs = gsap.utils.toArray('img');

    let clutter = '';
    gsap.set('.Reacticon', { position: 'absolute', bottom: 0 });
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
        onEnter:()=>{
            // setCurrentSection('javascript')
        },
                onEnterBack:()=>{
            // setCurrentSection('javascript')
          }
      }
    });
    tl.set('.Reacticon', { position: 'absolute', bottom: 0 });

    tl.fromTo('.even', 
      { opacity: 0, y: -50, rotation: 360, scale: 0.5,   color: "#000000",  duration: 5,  }, 
      { 
        opacity: 1, 
        y: 0, 
        rotation: 0, 
        scale: 1, 
        color: "#852121",
        duration: 5, 
        stagger: 0.1 
        
      }
    );

    tl.fromTo('.odd', 
      { opacity: 0, y: 50, rotation: -360, scale: 0.5,  color: "#000000",duration: 5}, 
      { 
        opacity: 1, 
        y: 0, 
        rotation: 0, 
        scale: 1, 
        color: "#1a1aa3" ,
        
        duration: 5, 
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
          trigger: '.javascriptContainer',
          start: 'top bottom',
          toggleActions: "play reverse play reset",
          end: 'bottom top', // Ensure the animation continues smoothly until the element scrolls out of view
          scrub: 2,
        
        //   onLeave: () => gsap.set(img, { clearProps: 'all' }) // Clear the properties when the animation is done to avoid resetting
        }
      });
    });

  }, []);

  return (
    <div className='flex z-10 overflow-y-hidden javascriptContainer justify-center items-center h-screen relative overflow-hidden'>
      <h1 className='text-lg md:text-4xl textanime space-x-5 md:space-x-20'>JAVASCRIPT</h1>
      <div className="  space">
        <img className='absolute bottom-[0%] w-8 md:w-auto left-[40%] Reacticon' src={reactLogo} data-speed={`${isDesktop?'-18':'-25'}`} alt="React"/>
        <img className='absolute bottom-[0%] w-8 md:w-auto left-[48%] ' src={reduxLogo} data-speed={`${isDesktop?'-14':'-21'}`} alt="Redux"/>
        <img className='absolute bottom-[0%] w-8 md:w-auto left-[10%] ' src={tailwindLogo} data-speed={`${isDesktop?'-10':'-17'}`} alt="Tailwind"/>
        <img className='absolute bottom-[0%] w-8 md:w-auto left-[90%] ' src={nextjsLogo} data-speed={`${isDesktop?'-12':'-27'}`}   alt="Next.js"/>
        <img className='absolute bottom-[0%] w-8  left-[30%] md:w-20 ' src={nodeLogo} data-speed="-14" alt="Node.js"/>
        <img className='absolute bottom-[0%] w-8 md:w-auto left-[80%] ' src={expressLogo} data-speed="-16" alt="Express"/>
      </div>
    </div>
  );
}

export default JavascriptParallex;
