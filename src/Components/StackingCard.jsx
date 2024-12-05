import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const StackingCards = ({filteredData}) => {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".card");
    const spacer = 25;
    const minScale = 0.8;

    const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

    cards.forEach((card, index) => {
      const scaleVal = distributor(index, cards[index], cards);

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top 40%`,
          scrub: true,
          invalidateOnRefresh: true,
        },
        ease: "none",
        scale: scaleVal,
      });

      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer} 20%`,
        endTrigger: ".cards",
        end: `bottom 20%`,
        pin: true,
        pinSpacing: false,
        id: "pin",
        invalidateOnRefresh: true,
      });
    });
  }, []);
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".para",
      start: "top top",
      end: () => `+=${document.querySelector('.cards')?.offsetHeight -200 || 0}`,
      pin: ".description",
      pinSpacing: true,
    });
  }, []);
  



  return (
    <div className="flex flex-col items-center justify-center">
      {/* <h1 className="text-4xl font-light">Description</h1> */}
      <div className="stackingContainer relative flex flex-col-reverse md:flex-row gap-4   w-full justify-start items-start">
        <div className="cards">
          {/* <div
            className="card  h-[250px] rounded-lg overflow-hidden w-full md:w-[500px] mb-12 shadow-md"
            style={{ top: "40px" }}
          >
            <img
              src={filteredData?.Images?.mockup}
              className="w-full h-full rounded-lg object-cover"
              alt=""
            />
          </div> */}
          <div
            className="card bg-white h-[250px] rounded-lg overflow-hidden w-full md:w-[500px] mb-12"
            style={{ top: "45px" }}
          >
            <img
              src={filteredData?.Images?.Image1}
              className="w-full h-full rounded-lg object-fit"
              alt=""
            />
          </div>
          <div
            className="card bg-white h-[250px] rounded-lg overflow-hidden w-full md:w-[500px] mb-12"
            style={{ top: "50px" }}
          >
            <img
              src={filteredData?.Images?.Image2}
              className="w-full h-full rounded-lg object-cover"
              alt=""
            />
          </div>
          <div
            className="card bg-white h-[250px] rounded-lg overflow-hidden w-[500px] mb-12"
            style={{ top: "55px" }}
          >
            <img
              src={filteredData?.Images?.Image3}
              className="w-full h-full rounded-lg object-cover"
              alt=""
            />
          </div>
          <div
            className="card bg-white h-[250px] rounded-lg overflow-hidden w-[500px] mb-12"
            style={{ top: "60px" }}
          >
            <img
              src={filteredData?.Images?.Image4}
              className="w-full h-full rounded-lg object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Sticky description div */}
        <div className="p-4 w-[45%]  para  sticky top-0  ">
          <div className="description">
            <div className="flex flex-col items-center py-12 px-4 ">
              <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
              {filteredData?.Description.descriptionTitle}
              </h1>
              <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl">
              {filteredData?.Description.descriptionSubtitle}
              </p>

              <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6 space-y-6">
              {filteredData?.Description.descriptionPoints.map((desc)=>(

                  <Feature
                  title={desc?.title}
                  description={desc?.description}
                  />
                ))}

               
              </div>
            </div>
          </div>
        </div>
      </div>
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
