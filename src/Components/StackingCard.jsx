import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import RatexMockup from '../assets/RateX/RatexMockup.png';
import RateXDashboard from '../assets/RateX/RateXDashboard.png';
import RatexScreenshot from '../assets/RateX/Screenshot (31).png';
import RatexScreenshot2 from '../assets/RateX/Screenshot (32).png';
import RatexScreenshot3 from '../assets/RateX/Screenshot (33).png';
gsap.registerPlugin(ScrollTrigger);

const StackingCards = () => {
  useGSAP(() => {
    const cards = gsap.utils.toArray('.card');
    const spacer = 25;
    const minScale = 0.8;

    const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

    cards.forEach((card, index) => {
      const scaleVal = distributor(index, cards[index], cards);

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top top`,
          scrub: true,
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
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '.para',       // The trigger element
      start: 'top top',
      end: 'bottom top',
      pin: '.description',     // The element to pin
      pinSpacing: false,
      invalidateOnRefresh: true,
    });
  }, []);
  
  
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <h1 className="text-4xl font-light">Description</h1> */}
      <div className="container flex gap-4   w-full justify-start items-start">
        <div className="cards">
          <div className="card bg-white h-[250px] rounded-lg overflow-hidden w-[500px] mb-12 shadow-md" style={{ top: '40px' }}>
            <img src={RatexMockup} className="w-full h-full rounded-lg object-cover" alt="" />
          </div>
          <div className="card bg-white h-[250px] rounded-lg overflow-hidden w-[500px] mb-12" style={{ top: '45px' }}>
            <img src={RateXDashboard} className="w-full h-full rounded-lg object-cover" alt="" />
          </div>
          <div className="card bg-white h-[250px] rounded-lg overflow-hidden w-[500px] mb-12" style={{ top: '50px' }}>
            <img src={RatexScreenshot} className="w-full h-full rounded-lg object-cover" alt="" />
          </div>
          <div className="card bg-white h-[250px] rounded-lg overflow-hidden w-[500px] mb-12" style={{ top: '55px' }}>
            <img src={RatexScreenshot2} className="w-full h-full rounded-lg object-cover" alt="" />
          </div>
          <div className="card bg-white h-[250px] rounded-lg overflow-hidden w-[500px] mb-12" style={{ top: '60px' }}>
            <img src={RatexScreenshot3} className="w-full h-full rounded-lg object-cover" alt="" />
          </div>
        </div>
        {/* Sticky description div */}
        <div className="p-4   para h-[1000px] sticky top-0  ">
          <p className='description'>
          <div className="flex flex-col items-center py-12 px-4 bg-gray-100">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
        Revenue Management Software for Hospitality
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl">
        Our platform, built with <span className="text-blue-500 font-medium">React</span> and <span className="text-teal-500 font-medium">Tailwind CSS</span>, offers a sleek, responsive user interface designed to simplify the complex task of revenue management for hospitality businesses.
      </p>

      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6 space-y-6">
        <Feature
          title="Dynamic Pricing with Real-time Updates"
          description="Automatically adjust room rates based on demand, competitor pricing, and seasonal trends, maximizing occupancy and profitability."
        />

        <Feature
          title="Interactive Data Visualization"
          description="Utilizing ApexCharts and Redux, the software provides insightful visualizations for revenue trends, occupancy rates, and booking sources, empowering management with the data they need for informed decision-making."
        />

        <Feature
          title="Customizable, Responsive UI"
          description="The platform delivers a responsive, intuitive user experience. Hospitality teams can quickly access all the key metrics and control panels they need for efficient revenue adjustments."
        />
      </div>
    </div>
          </p>
        </div>
      </div>
      <div className="container2 pt-10 w-full h-[50vh]"></div>
    </div>
  );
};

const Feature = ({ title, description }) => (
    <div className="flex flex-col space-y-2">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

export default StackingCards;
