import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./example.css";
import Gallary1 from '../../../assets/gallary/Gallary1.png'
import Gallary2 from '../../../assets/gallary/Gallary2.png'
import Gallary3 from '../../../assets/gallary/Gallary3.png'
import Gallary4 from '../../../assets/gallary/gallary4.jpg'
gsap.registerPlugin(ScrollTrigger);

const   Gallery = ({setCurrentSection}) => {
  const comp = useRef(null);
  const galleryRef = useRef(null);

  const changeGalleryBackground = (photo) => {
      
    const color = (photo && window.getComputedStyle(photo)?.backgroundColor) ;
    console.log(photo,'color')
    color && gsap.to(galleryRef.current, { backgroundColor: color});
  };

  const resetGalleryBackground = (photo) => {
    //   const color= (photo && getComputedStyle(photo)?.backgroundColor)  ;
      
    // color && gsap.to(galleryRef.current, { backgroundColor: color });
  };

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
        onEnter:()=>{
            setCurrentSection('Achievements')
        },
        onEnterBack:()=>{
            setCurrentSection('Achievements')
          }
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
          onLeave: () => resetGalleryBackground(allPhotos[index-1]),
          onEnterBack: () => changeGalleryBackground(allPhotos[index]),
          onLeaveBack:() => resetGalleryBackground(allPhotos[index-1]),
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
              <h1>Curiosity-Driven Developer</h1>
              <p>
                I constantly explore emerging technologies and best practices to stay ahead in the ever-evolving world.For me, the process of learning is never complete—every project, every bug, and every new tool is a step on the path of discovery.
              </p>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="mobileContent">
            <div className="mobilePhoto red">
              <img src={Gallary1} className="object-fill h-full w-full " alt="Project " />
            </div>
            <h1 className="font-semibold">Speed Typer</h1>
            <p className="text-sm"> 
              Speed typist at 110 words per minute, always ready to code and communicate at lightning pace.
              </p>

            <div className="mobilePhoto green">
            <img src={Gallary2} className="object-fill h-full w-full" alt="Project " />
            </div>
            <h1  className="font-semibold">Full Stack Development:</h1>
            <p>
              Full stack developer experienced in MERN stack, delivering end-to-end web solutions
              </p>

            <div className="mobilePhoto pink">
            <img src={Gallary3} className="object-fill h-full w-full" alt="Project " />
            </div>
            <h1  className="font-semibold">Problem Solving</h1>
            <p>
              Strong foundation in algorithms and data structures, optimizing solutions for performance
              </p>
            <div className="mobilePhoto blue">
            <img src={Gallary4} className="object-fill h-full w-full" alt="Project " />
            </div>
            <h1  className="font-semibold">Curiosity-Driven Developer</h1>
            <p>
            I constantly explore emerging technologies and best practices to stay ahead in the ever-evolving world.For me, the process of learning is never complete—every project, every bug, and every new tool is a step on the path of discovery.
            </p>
          </div>

          <div className="desktopPhotos bg-[#FAE1EE]">
            <div data-color='transparent' className="desktopPhoto flex items-center justify-center transparent">
              <img src={Gallary1} className="object-fill h-full w-full " alt="Project " />
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

      <div className="endSpacer md:bg-[#D3D6F0] spacer"></div>
      {/* <div className=" spacer"></div> */}
    </div>
  );
}

export default Gallery;
