import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const ImageCarousel = () => {
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    // Dynamically load the InertiaPlugin from the GSAP CDN
    const loadInertiaPlugin = async () => {
      const { InertiaPlugin } = await import("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/InertiaPlugin.min.js");
      gsap.registerPlugin(InertiaPlugin);

      const cardsContainer = cardsContainerRef.current;
      const cards = gsap.utils.toArray(".card", cardsContainer);
      const snapPoints = cards.map((card, i) => -(card.clientWidth + 50) * i);
      const mySnap = gsap.utils.snap(snapPoints);

      // Create the Draggable instance
      Draggable.create(cardsContainer, {
        type: "x",
        bounds: {
          maxX: 0,
          minX: window.innerWidth - cardsContainer.scrollWidth - 50,
        },
        inertia: true,
        snap: {
          x: function (v) {
            return mySnap(v);
          },
        },
      });
    };

    loadInertiaPlugin(); // Load and initialize InertiaPlugin
  }, []);

  return (
    <div className="w-full h-screen bg-black flex items-center">
      <div className="w-[40%] h-[400px] overflow-hidden">
        <div
          ref={cardsContainerRef}
          className="flex gap-[50px] px-[50px] cards"
        >
          {[400, 401, 402, 400, 401, 402, 400, 401].map((imgSize, idx) => (
            <div
              key={idx}
              className="card flex-1 h-full overflow-hidden"
              style={{ flexBasis: "25%" }}
            >
              <img
                src={`https://picsum.photos/400/${imgSize}`}
                className="object-cover h-full w-full"
                alt="Project"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
