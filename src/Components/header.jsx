import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useState } from 'react';

const Header = () => {
  const [contentVisible, setContentVisible] = useState();
  
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setContentVisible(true);
      },
    });

    tl.from(".notch", {
      width: 0,
      delay:5.3,
      duration: 1.8,
      ease: "power2.out",
    })
    .from(".opi", {
      opacity: 0,
      x: -20,
      duration: 1,
      stagger: 0.3,
      ease: "expo.inOut",
    })
    .from(".innernotch", {
      width: 0,
      duration: 0.5,
      ease: "expo.in",
    }, "-=150%");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 h-[7vh] flex justify-center items-center px-3 py-1 pointer-events-none">
      <div className="w-[40%] flex items-center px-4 justify-evenly h-[90%] text-white bg-white rounded-2xl notch pointer-events-auto">
        {contentVisible && (
          <div className="flex w-full items-center px-4 justify-between h-[90%] text-black bg-white rounded-2xl">
            <div className="overflow-hidden opi">
              <img src="" alt="" />
              <h1 className="text-sm">DHRUVJS</h1>
            </div>
            <div className="flex gap-4 opi items-center justify-center">
              <div>Skill</div>
              <div>Work</div>
              <div>Achievement</div>
              <div>Contact</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
