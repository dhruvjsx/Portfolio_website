import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import rateXicon from '../../assets/RateX/rateXicon.svg';
import "./example.css";
import Gallary1 from '../../assets/gallary/gallary1.jpg'
import Gallary2 from '../../assets/gallary/gallary2.jpg'
import Gallary3 from '../../assets/gallary/gallary3.jpg'
import Gallary4 from '../../assets/gallary/gallary4.jpg'
gsap.registerPlugin(ScrollTrigger);

const   Example = () => {
  const comp = useRef(null);
  const galleryRef = useRef(null);

  useLayoutEffect(() => {
    const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");
    const firstChild = gsap.utils.toArray(".firstChild");
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    
    gsap.set(photos, { yPercent: 101 });

    let mm = gsap.matchMedia(comp);
    mm.add("(min-width: 600px)", () => {
      

      ScrollTrigger.create({
        trigger: galleryRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
        scrub: true,
      });
      firstChild.forEach((detail, index) => {
        let headline = detail.querySelector("h1");

        // let animation = gsap
        //   .timeline()
        //   .to(photos[index], { yPercent: 0 })
        //   .set(allPhotos[index], { autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 30%",
        //   animation: animation,
          scrub: true,
       
          onEnter: () => changeGalleryBackground(allPhotos[index]),
        //   onLeave: () => resetGalleryBackground(allPhotos[index-1]),
          onEnterBack: () => changeGalleryBackground(allPhotos[index]),
        //   onLeaveBack:() => resetGalleryBackground(allPhotos[index-1]),
        });
      });


      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1");

        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
        
          onEnter: () => changeGalleryBackground(photos[index]),
          onLeave: () => resetGalleryBackground(photos[index-1]),
          onEnterBack: () => changeGalleryBackground(photos[index]),
          onLeaveBack:() => resetGalleryBackground(photos[index-1])
          
        });
      });

      ScrollTrigger.create({
        trigger: ".endSpacer",
        start: "top 80%", // When the top of .endSpacer hits 80% of the viewport
        onEnter: () => {
            gsap.to(".gallery", { backgroundColor: "transparent", duration: 0.3 });
            gsap.to(".endSpacer", { backgroundColor: "transparent", duration: 0.3 });
        },
        onLeaveBack: () => {
            gsap.to(".gallery", { backgroundColor: "#D3D6F0", duration: 0.3 }); // Reset to original color
            gsap.to(".endSpacer", { backgroundColor: "#D3D6F0", duration: 0.3 });
        }
    });

      return () => {
        // console.log("mobile");
      };
    });

    const changeGalleryBackground = (photo) => {
      
      const color = getComputedStyle(photo).backgroundColor;
      console.log(color,'color')
      gsap.to(galleryRef.current, { backgroundColor: color || 'transparent'});
    };

    const resetGalleryBackground = (photo) => {
        const color= getcomputedStyle(photo).backgroundColor;
        
      gsap.to(galleryRef.current, { backgroundColor: color || 'transparent'});
    };

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={comp}>
      <div ref={galleryRef} className="gallery">
        <div className="flex mx-auto w-[60%]">
        <div className="left">
          <div className="desktopContent ">
            <div data-color='transparent' className="desktopContentSection firstChild">
              <h1>Speed Typer</h1>
              <p className="text-sm"> 
              Speed typist at 110 words per minute, always ready to code and communicate at lightning pace.
              </p>
            </div>
            <div data-color='#E0F0FF' className="desktopContentSection">
              <h1>Full Stack Development:</h1>
              <p>
              Full stack developer experienced in MERN stack, delivering end-to-end web solutions
              </p>
            </div>
            <div data-color=' #FFEDE0' className="desktopContentSection">
              <h1>Problem Solving</h1>
              <p>
              Strong foundation in algorithms and data structures, optimizing solutions for performance
              </p>
            </div>
            <div data-color='#D3D6F0' className="desktopContentSection">
              <h1>Blue</h1>
              <p>
                Blue is a color that is often associated with calmness, trust, and reliability...
              </p>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="mobileContent">
            <div className="mobilePhoto red"></div>
            <h1>Red</h1>
            <p>
              Red is a color often associated with strong emotions...
            </p>

            <div className="mobilePhoto green"></div>
            <h1>Green</h1>
            <p>
              Green is a color that is often associated with nature...
            </p>

            <div className="mobilePhoto pink"></div>
            <h1>Pink</h1>
            <p>
              Pink is a color that is often associated with femininity...
            </p>

            <div className="mobilePhoto blue"></div>
            <h1>Blue</h1>
            <p>
              Blue is a color that is often associated with calmness...
            </p>
          </div>

          <div className="desktopPhotos bg-[#FAE1EE]">
            <div data-color='transparent' className="desktopPhoto flex items-center justify-center transparent">
              <img src={Gallary1} className="object-fill h-full w-full" alt="Project " />
            </div>
            <div data-color='#E0F0FF'  className="desktopPhoto flex items-center justify-center bg-[#E0F0FF]">
              <img src={Gallary2} className="object-fill h-full w-full" alt="Project " />
            </div> 
            <div data-color='#FFEDE0' className="desktopPhoto flex items-center justify-center bg-[#FFEDE0]">
              <img src={Gallary3} className="object-fill h-full w-full" alt="Project " />
            </div>
            <div   data-color='#D3D6F0' className="desktopPhoto flex items-center justify-center bg-[#D3D6F0]">
              <img src={Gallary4} className="object-fill h-full w-full" alt="Project " />
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="endSpacer bg-[#D3D6F0] spacer"></div>
      {/* <div className=" spacer"></div> */}
    </div>
  );
}

export default Example;
