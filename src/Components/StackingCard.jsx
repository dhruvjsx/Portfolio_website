import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import RatexMockup from '../assets/RateX/RatexMockup.png';
import RateXDashboard from '../assets/RateX/RateXDashboard.png';
import RatexScreenshot from '../assets/RateX/Screenshot (31).png'
import RatexScreenshot2 from '../assets/RateX/Screenshot (32).png'
import RatexScreenshot3 from '../assets/RateX/Screenshot (33).png'
gsap.registerPlugin(ScrollTrigger);

const StackingCards = () => {
  useGSAP(() => {
    const cards = gsap.utils.toArray('.card');
    const spacer = 20;
    const minScale = 0.8;

    const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

    cards.forEach((card, index) => {
      const scaleVal = distributor(index, cards[index], cards);

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top top`,
          scrub: true,
        //   markers: true,
          invalidateOnRefresh: true,
        },
        ease: 'none',
        scale: scaleVal,
      });

      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer} top`,
        endTrigger: '.cards',
        end: `bottom top+=${200 + cards.length * spacer}`,
        pin: true,
        pinSpacing: false,
        
        id: 'pin',
        invalidateOnRefresh: true,
      });
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center   ">
      <h1 className="text-4xl font-light ">Stacking Cards</h1>
      <div className="container flex ">
        <div className="cards ml-24">
          <div className="card bg-white h-[200px] rouded-lg overflow-hidden w-[400px] mb-12 shadow-md" style={{ top: '40px' }}>
          <img src={RatexMockup} className='w-full h-full object-cover' alt="" />
          </div>
          <div className="card bg-white h-[200px] rouded-lg overflow-hidden w-[400px] mb-12" style={{ top: '45px' }}>
          <img src={RateXDashboard} className='w-full h-full object-cover' alt="" />
          </div>
          <div className="card bg-white h-[200px] rouded-lg overflow-hidden w-[400px] mb-12" style={{ top: '50px' }}>
          <img src={RatexScreenshot} className='w-full h-full object-cover' alt="" />
          </div>
          <div className="card bg-white h-[200px] rouded-lg overflow-hidden w-[400px] mb-12" style={{ top: '55px' }}>
          <img src={RatexScreenshot2} className='w-full h-full object-cover' alt="" />
          </div>
          <div className="card bg-white h-[200px] rouded-lg overflow-hidden w-[400px] mb-12" style={{ top: '60px' }}>
          <img src={RatexScreenshot3} className='w-full h-full object-cover' alt="" />
          </div>
        </div>
      </div>
      {/* <div className="container2 pt-10 w-full h-[150vh] border-t border-red-500"></div> */}
    </div>
  );
};

export default StackingCards;
