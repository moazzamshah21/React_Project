import React, { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";
import Sect2 from "../Assets/Images/pexels-brian-jr-asare-166601141-13221799-removebg-preview.png";
import p1 from "../Assets/Images/Product1.png";
import img1 from "../Assets/Images/Rectangle 17.png";
import img2 from "../Assets/Images/Rectangle 18.png";
import img3 from "../Assets/Images/Rectangle 19.png";
import img4 from "../Assets/Images/Rectangle 20.png";
import img5 from "../Assets/Images/Rectangle 21.png";
import img6 from "../Assets/Images/Rectangle 22.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);



const Home = () => {
  const heroSectionRef = useRef(null);
  const Section2Ref = useRef(null);
  const Section3Ref = useRef(null);
  const h1Ref = useRef([]);
  const h1Ref2 = useRef([]);
  const h1Ref3 = useRef([]);
  const ImgRef = useRef(null);
  const ScndSecRef = useRef(null);
  const lineRef1 = useRef([]);
  const lineRef2 = useRef([]);
  const lineRef3 = useRef([]);
  const lineRef4 = useRef([]);
  const lineRef5 = useRef([]);
  const lineRef6 = useRef([]);
  const linkRef1 = useRef([]);
  const linkRef2 = useRef([]);
  const linkRef3 = useRef([]);
  const linkRef4 = useRef([]);
  const linkRef5 = useRef([]);
  const linkRef6 = useRef([]);
  const CatalougeRef = useRef(null);
  const refh3c = useRef([]);
  const refpc1 = useRef([]);
  const refpc2 = useRef([]);
  const refpc3 = useRef([]);
  const refpc4 = useRef([]);
  const AboutRef = useRef(null);
  const con1Ref = useRef([]);
  const circleRef = useRef([]);
  const AboutcRef = useRef([]);
  const About2Ref = useRef(null);
  const con2Ref = useRef([]);
  const Aboutc2Ref = useRef([]);
  const con3Ref = useRef([]);
  const h1span1 = useRef([]);
  const h1span2 = useRef([]);
  const h1span3 = useRef([]);
  const h1span4 = useRef([]);
  const h1span5 = useRef([]);
  const h1span6 = useRef([]);
  const h1span7 = useRef([]);
  const h1span8 = useRef([]);
  const h1refcon2 = useRef([]);
  const Aboutc3Ref = useRef(null);
  const About3Ref = useRef([]);
  const bgrovr = useRef([]);
  const cntnt3 = useRef([]);
  const Aboutc4Ref = useRef(null);
  const About4Ref = useRef([]);
  const bgrovr1 = useRef([]);
  const cntnt4 = useRef([]);
  const con4Ref = useRef([]);
  const Aboutc5Ref = useRef(null);
  const About5Ref = useRef([]);
  const onlinecRef = useRef(null);
  const onlineRef = useRef([]);
  const div1Ref = useRef([]);
  const div3Ref = useRef([]);
  



  useEffect(() => {
    const sections = gsap.utils.toArray(".section");
    const container = document.querySelector(".horizontal-scroll-container");
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 2,
        snap: 100 / (sections.length - 1),
        end: () => "+=" + container.scrollWidth, // Use scrollWidth instead of offsetWidth
      },
    });

    // Add translateX animation to h1 elements
    h1Ref.current.forEach((heroSectionRef) => {
      gsap.fromTo(heroSectionRef, 
        { y: 100 }, 
        {
          y: 0, 
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top center",
            end: "center center",
            scrub: 5,
          }
        }
      );
    });

    h1Ref2.current.forEach((Section2Ref) => {
      gsap.fromTo(Section2Ref, 
        { y: 100,
          opacity: 0

         }, 
        {
          y: 50, 
          opacity:1,
          scrollTrigger: {
            trigger: Section2Ref.current,
            start: "1700px",
            end: "2000px",
            scrub: 5
          }
        }
      );
    });

    h1Ref3.current.forEach((Section3Ref) => {
      gsap.fromTo(Section3Ref, 
        { y: 100 }, 
        {
          y: 0, 
          scrollTrigger: {
            trigger: Section3Ref.current,
            start: "center center",
            end: "bottom",
            scrub: 2
          }
        }
      );
    });

    gsap.fromTo(ImgRef.current, 
      { scale: 1 }, 
      {
        scale: 1.2, 
        scrollTrigger: {
          trigger: Section2Ref.current,
          start: "200%",
          end: "400%",
          scrub: 2,
        }
      }
    );

    
    gsap.fromTo(lineRef1.current, 
      { x: -550,
        opacity: .6,
       }, 
      {
        x: 75, 
        opacity: 1,
        scrollTrigger: {
          trigger: ScndSecRef.current,
          start: "top",
          end: "top",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(lineRef2.current, 
      { x: -450,
        opacity: .6,
       }, 
      {
        x: 75, 
        opacity: 1,
        scrollTrigger: {
          trigger: ScndSecRef.current,
          start: "top",
          end: "top",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(lineRef3.current, 
      { x: -350,
        opacity: .6,
       }, 
      {
        x: 75, 
        opacity: 1,
        scrollTrigger: {
          trigger: ScndSecRef.current,
          start: "top",
          end: "top",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(lineRef4.current, 
      { x: -250,
        opacity: .6,
       }, 
      {
        x: 65, 
        opacity: 1,
        scrollTrigger: {
          trigger: ScndSecRef.current,
          start: "top",
          end: "top",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(lineRef5.current, 
      { x: -200,
        opacity: .6,
       }, 
      {
        x: 60,  
        opacity: 1,
        scrollTrigger: {
          trigger: ScndSecRef.current,
          start: "top",
          end: "top",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(lineRef6.current, 
      { x: -200,
        opacity: .6,
       }, 
      {
        x: 60, 
        opacity: 1,
        scrollTrigger: {
          trigger: ScndSecRef.current,
          start: "top",
          end: "top",
          scrub: 1,
        }
      }
    );

    gsap.fromTo(linkRef1.current, 
      { x: -550,
        opacity: .6,
       }, 
      {
        x: 75,
        opacity: 1, 
        scrollTrigger: {
          trigger: ScndSecRef.current,
          start: "top",
          end: "top",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(linkRef2.current, 
      { x: -450,
        opacity: .6,
       }, 
      {
        x: 75, 
        opacity: 1,
        scrollTrigger: {
          trigger: ScndSecRef.current,
          start: "top",
          end: "top",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(linkRef3.current, 
      { x: -350,
        opacity: .6,
       }, 
      {
        x: 75, 
        opacity: 1,
        scrollTrigger: {
          trigger: ScndSecRef.current,
          start: "top",
          end: "top",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(linkRef4.current, 
      { x: -250,
        opacity: .6,
       }, 
      {
        x: 65,
        opacity: 1, 
        scrollTrigger: {
          trigger: ScndSecRef.current,
          start: "top",
          end: "top",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(linkRef5.current, 
      { x: -200,
        opacity: .6,
       }, 
      {
        x: 60, 
        opacity: 1, 
        scrollTrigger: {
          trigger: ScndSecRef.current,
          start: "top",
          end: "top",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(linkRef6.current, 
      { x: -200,
        opacity: .6,
       }, 
      {
        x: 60, 
        opacity: 1,
        scrollTrigger: {
          trigger: ScndSecRef.current,
          start: "top",
          end: "top",
          scrub: 1,
        }
      }
    );

    gsap.fromTo(ScndSecRef.current, 
      { 
        opacity: 1.5,
       }, 
      {
        opacity: 0, 

        scrollTrigger: {
          trigger: ScndSecRef.current,
          delay:2,
          start: "0px",
          end: "3000px",
          pin: true,
          scrub: 1,
        }
      }
    );


    // gsap.fromTo(refh3c.current, 
    //   { y: 50,
    //     opacity: 0,
    //    }, 
    //   {
    //     y: 0, 
    //     opacity: 1,
    //     scrollTrigger: {
    //       trigger: CatalougeRef.current,
    //       start: "6000px",
    //       end: "8000px",
    //       scrub: 1,
    //     }
    //   }
    // );

    // gsap.fromTo(refpc1.current, 
    //   { y: 250,
    //     opacity: 0,
    //    }, 
    //   {
    //     y: 0, 
    //     opacity: 1,
    //     scrollTrigger: {
    //       trigger: CatalougeRef.current,
    //       start: "6000px",
    //       end: "8000px",
    //       scrub: 1,
    //     }
    //   }
    // );
    // gsap.fromTo(refpc2.current, 
    //   { y: 150,
    //     opacity: 0,
    //    }, 
    //   {
    //     y: 0, 
    //     opacity: 1,
    //     scrollTrigger: {
    //       trigger: CatalougeRef.current,
    //       start: "6000px",
    //       end: "8000px",
    //       scrub: 1,
    //     }
    //   }
    // );
    // gsap.fromTo(refpc3.current, 
    //   { y: 150,
    //     opacity: 0,
    //    }, 
    //   {
    //     y: 0, 
    //     opacity: 1,
    //     scrollTrigger: {
    //       trigger: CatalougeRef.current,
    //       start: "6000px",
    //       end: "8000px",
    //       scrub: 1,
    //     }
    //   }
    // );
    // gsap.fromTo(refpc4.current, 
    //   { y: 250,
    //     opacity: 0,
    //    }, 
    //   {
    //     y: 0, 
    //     opacity: 1,
    //     scrollTrigger: {
    //       trigger: CatalougeRef.current,
    //       start: "6000px",
    //       end: "8000px",
    //       scrub: 1,
    //     }
    //   }
    // );



    gsap.fromTo(AboutRef.current, 
      { 
        opacity:0,
       }, 
      { 
        opacity: 1,
        scrollTrigger: {
          trigger: AboutcRef.current,
          start: "00px",
          end: "600px",
          scrub: 0,
        }
      }
    );


    gsap.fromTo(AboutRef.current, 
      { 
        opacity:0,
       }, 
      { 
        opacity: 1,
        scrollTrigger: {
          trigger: AboutcRef.current,
          start: "00px",
          end: "600px",
          scrub: 0,
        }
      }
    );

    gsap.fromTo(
      circleRef.current, 
      { 
        strokeDashoffset: 0, 
      }, 
      { 
        strokeDashoffset: -100, 
        scrollTrigger: {
          trigger: AboutcRef.current,
          start: "1200px", 
          end: "3200px", 
          scrub: .5,
        }
      }
    );
    
    gsap.fromTo(About2Ref.current, 
      { 
        opacity:0,
       }, 
      { 
        opacity: 1,
        scrollTrigger: {
          trigger: Aboutc2Ref.current,
          start: "00px",
          end: "600px",
          scrub: 0,
        }
      }
    );
    

    gsap.fromTo(con2Ref.current, 
      { 
        clipPath: 'polygon(10.42% 9.26%, 89.58% 9.26%, 89.58% 90.74%, 10.42% 90.74%)', // Initial state (visible until 300px)
      }, 
      { 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // Transition to full coverage
        scrollTrigger: {
          trigger: Aboutc2Ref.current,
          start: "1000px", // Start animating after scrolling 300px
          end: "1800px", // Complete the animation over the next 300px of scrolling
          scrub: 1, // Smooth transition as the user scrolls
        }
      }
    );
// heading fade-up-in
    gsap.fromTo(h1span1.current, 
      { 
        y: 100,
        opacity: 0,
       }, 
      { 
        y: 0,
        opacity: 1,
        delay: 0,
        scrollTrigger: {
          trigger: About2Ref.current,
          start: "1600vh",
          end: "2300vh",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(h1span2.current, 
      { 
        y: 130,
        opacity: 0,
       }, 
      { 
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: About2Ref.current,
          start: "1600vh",
          end: "2300vh",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(h1span3.current, 
      { 
        y: 150,
        opacity: 0,
       }, 
      { 
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: About2Ref.current,
          start: "1600vh",
          end: "2300vh",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(h1span4.current, 
      { 
        y: 170,
        opacity: 0,
       }, 
      { 
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: About2Ref.current,
          start: "1600vh",
          end: "2300vh",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(h1span5.current, 
      { 
        y: 170,
        opacity: 0,
       }, 
      { 
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: About2Ref.current,
          start: "1600vh",
          end: "2300vh",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(h1span6.current, 
      { 
        y: 150,
        opacity: 0,
       }, 
      { 
        y: 0,
        opacity: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: About2Ref.current,
          start: "1600vh",
          end: "2300vh",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(h1span7.current, 
      { 
        y: 130,
        opacity: 0,
       }, 
      { 
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: About2Ref.current,
          start: "1600vh",
          end: "2300vh",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(h1span8.current, 
      { 
        y: 100,
        opacity: 0,
       }, 
      { 
        y: 0,
        opacity: 1,
        delay: 0,
        scrollTrigger: {
          trigger: About2Ref.current,
          start: "1600vh",
          end: "2300vh",
          scrub: 1,
        }
      }
    );

    // heading-fadedown-out
    gsap.fromTo(h1refcon2.current, 
      { 
        y: 0,
        opacity: 1,
       }, 
      { 
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: About2Ref.current,
          start: "2800vh",
          end: "3800vh",
          scrub: 1,
        }
      }
    );
    gsap.fromTo(con2Ref.current, 
      { 
        clipPath: 'circle(100% at 50% 50%)',
        filter: 'blur(0px)', // Animate to no blur
      }, 
      { 
        clipPath: 'circle(20% at 50% 50%)', // Transition to a smaller circle
        filter: 'blur(3px)',
        scrollTrigger: {
          trigger: Aboutc2Ref.current,
          start: "3000px",
          end: "4000px",
          scrub: 1, // Use scrub to synchronize with the scroll position
        }
      }
    );
    gsap.fromTo(About3Ref.current, 
      { 
        opacity:0,
       }, 
      { 
        opacity: 1,
        duration:5,
        scrollTrigger: {
          trigger: Aboutc3Ref.current,
          start: "500px",
          end: "1000px",
          scrub: 0,
        }
      }
    );

        gsap.fromTo(bgrovr.current, 
      { 
        backgroundColor: '#00000000',
      }, 
      { 
        backgroundColor: '#00000070', // This assumes you want to change the transparency
        duration: 2,
        scrollTrigger: {
          trigger: Aboutc3Ref.current,
          start: "1600px", // Adjust these values as needed
          end: "2400px",
          scrub: 2, // Set scrub to true or a small number for a smooth transition
        }
      }
    );

    gsap.fromTo(cntnt3.current, 
      { 
        y:400,
      }, 
      { 
        y:-400,
        duration:500,
        scrollTrigger: {
          trigger: Aboutc3Ref.current,
          start: "1600px", // Adjust these values as needed
          end: "4800px",
          scrub: 1, // Set scrub to true or a small number for a smooth transition
        }
      }
    );

    // aboutcon4
    gsap.fromTo(About4Ref.current, 
      { 
        clipPath: 'circle(20% at 50% 50%)',
        filter: 'blur(0px)', // Animate to no blur
      }, 
      { 
        clipPath: 'circle(0% at 50% 50%)', // Transition to a smaller circle
        filter: 'blur(3px)',
        scrollTrigger: {
          trigger: Aboutc4Ref.current,
          start: "3000px",
          end: "4300px",
          scrub: 1, // Use scrub to synchronize with the scroll position
        }
      }
    );
    gsap.fromTo(About4Ref.current, 
      { 
        opacity:0,
       }, 
      { 
        opacity: 1,
        duration:5,
        scrollTrigger: {
          trigger: Aboutc4Ref.current,
          start: "500px",
          end: "1000px",
          scrub: 0,
        }
      }
    );

        gsap.fromTo(bgrovr1.current, 
      { 
        backgroundColor: '#00000000',
      }, 
      { 
        backgroundColor: '#00000070', // This assumes you want to change the transparency
        duration: 2,
        scrollTrigger: {
          trigger: Aboutc4Ref.current,
          start: "1600px", // Adjust these values as needed
          end: "2400px",
          scrub: 2, // Set scrub to true or a small number for a smooth transition
        }
      }
    );

    gsap.fromTo(cntnt4.current, 
      { 
        y:400,
      }, 
      { 
        y:-400,
        duration:500,
        scrollTrigger: {
          trigger: Aboutc4Ref.current,
          start: "1600px", // Adjust these values as needed
          end: "4300px",
          scrub: 1, // Set scrub to true or a small number for a smooth transition
        }
      }
    );

     // aboutcon4
    //  gsap.fromTo(con5Ref.current, 
    //   { 
    //     clipPath: 'circle(20% at 50% 50%)',
    //     filter: 'blur(0px)', // Animate to no blur
    //   }, 
    //   { 
    //     clipPath: 'circle(0% at 50% 50%)', // Transition to a smaller circle
    //     filter: 'blur(3px)',
    //     scrollTrigger: {
    //       trigger: Aboutc5Ref.current,
    //       start: "000px",
    //       end: "4300px",
    //       scrub: 1, // Use scrub to synchronize with the scroll position
    //     }
    //   }
    // );
    gsap.fromTo(About5Ref.current, 
      { 
        opacity:0,
       }, 
      { 
        opacity: 1,
        duration:5,
        scrollTrigger: {
          trigger: Aboutc5Ref.current,
          start: "000px",
          end: "1000px",
          scrub: 0,
        }
      }
    );

    // OnlineStore
    gsap.fromTo(onlineRef.current, 
      { 
        clipPath: 'circle(0% at 50% 50%)', // Start with a circle of 0% (not visible)
        filter: 'blur(3px)', // Add an initial blur effect
      }, 
      { 
        clipPath: 'circle(100% at 50% 50%)', // Expand the circle to 150% to fill the entire screen
        filter: 'blur(0px)', // Animate to no blur
        scrollTrigger: {
          trigger: onlinecRef.current, // Element to be triggered
          start: "000px", // Start the animation when the top of the element reaches the center of the viewport
          end: "3000px", // End when the bottom of the element reaches the center of the viewport
          scrub: 1, // Synchronize with the scroll position
        }
      }
    );
    gsap.fromTo(onlineRef.current, 
      { 
        opacity:0,
       }, 
      { 
        opacity: 1,
        duration:5,
        scrollTrigger: {
          trigger: onlinecRef.current,
          start: "000px",
          end: "500px",
          scrub: 0,
        }
      }
    );
    gsap.fromTo(div1Ref.current,
      {
        x:-350,
      },
      {
        x:0,
        duration:5,
        scrollTrigger: {
          trigger: onlineRef.current,
          start: "1000px",
          end: "3000px",
          scrub: 2,
        }
      }
    );
    gsap.fromTo(div3Ref.current,
      {
        x:350,
      },
      {
        x:0,
        duration:5,
        scrollTrigger: {
          trigger: onlineRef.current,
          start: "1000px",
          end: "3000px",
          scrub: 2,
        }
      }
    );

    //Textsec
    gsap.to(".h11", {
      backgroundPosition: "100% 0%", // Move background image from left to right
      ease: "ease-in", // No easing for a linear scroll-based effect
      scrollTrigger: {
        trigger: ".h11", // The element to trigger the animation
        start: "top bottom", // Start the animation when the top of the element hits the bottom of the viewport
        end: "bottom top", // End the animation when the bottom of the element hits the top of the viewport
        scrub: 1, // Link the animation directly to scroll
      }
    });
    gsap.to(".h12", {
      backgroundPosition: "0% 0%", // Move background image from left to right
      ease: "ease-in", // No easing for a linear scroll-based effect
      scrollTrigger: {
        trigger: ".h11", // The element to trigger the animation
        start: "top bottom", // Start the animation when the top of the element hits the bottom of the viewport
        end: "bottom top", // End the animation when the bottom of the element hits the top of the viewport
        scrub: 1, // Link the animation directly to scroll
      }
    });
    gsap.to(".h13", {
      backgroundPosition: "100% 0%", // Move background image from left to right
      ease: "ease-in", // No easing for a linear scroll-based effect
      scrollTrigger: {
        trigger: ".h11", // The element to trigger the animation
        start: "top bottom", // Start the animation when the top of the element hits the bottom of the viewport
        end: "bottom top", // End the animation when the bottom of the element hits the top of the viewport
        scrub: 1, // Link the animation directly to scroll
      }
    });
    gsap.to(".h14", {
      backgroundPosition: "0% 0%", // Start at the left side (0%) and move to the right (100%)
      ease: "ease-in", // Apply easing
      scrollTrigger: {
        trigger: ".h11", // The element to trigger the animation
        start: "top bottom", // Start the animation when the top of the element hits the bottom of the viewport
        end: "bottom top", // End the animation when the bottom of the element hits the top of the viewport
        scrub: 1, // Link the animation directly to scroll
      }
    });
    
    
    
    


  }, []);

  return (
    <>
      <div className="horizontal-scroll-container">
        <section className="Hero-section section section-1 flex" ref={heroSectionRef}>
          <div className="Inner-section1 flex">
            <h1 ref={(el) => h1Ref.current[0] = el}>Lauren</h1>
            <spacer></spacer>
            <h1 ref={(el) => h1Ref.current[1] = el}>Apparel</h1>
          </div>
        </section>
        <section className="section section-2 flex" ref={Section2Ref}>
          <div className="Inner-section1 flex">
            <h1 ref={(el) => h1Ref2.current[0] = el}>Lauren</h1>
            <spacer><img ref={ImgRef} src={Sect2}/></spacer>
            <h1 ref={(el) => h1Ref2.current[1] = el}>Apparel</h1>
          </div>
        </section>
        <section className="section section-3 flex" ref={Section3Ref}>
          <div className="Inner-section1 flex">
            <h1 ref={(el) => h1Ref3.current[0] = el}>Lauren</h1>
            <spacer></spacer>
            <h1 ref={(el) => h1Ref3.current[1] = el}>Apparel</h1>
          </div>
        </section>
      </div>
      <section className="scnd-section" ref={ScndSecRef}>
          <div className="InnerSection flex">
            <div className="Menu-List flex">
                <div className="Menu-Item flex item-1">
                  <div className="Line" ref={lineRef1}></div>
                  <a className="Menu-Link" ref={linkRef1}>Catalouge</a>
                </div>
                <div className="Menu-Item flex item-2">
                  <div className="Line" ref={lineRef2}></div>
                  <a className="Menu-Link" ref={linkRef2}>About</a>
                </div>
                <div className="Menu-Item flex item-3">
                  <div className="Line" ref={lineRef3}></div>
                  <a className="Menu-Link" ref={linkRef3}>Look</a>
                </div>
                <div className="Menu-Item flex item-4">
                  <div className="Line" ref={lineRef4}></div>
                  <a className="Menu-Link" ref={linkRef4}>Collection</a>
                </div>
                <div className="Menu-Item flex item-5">
                  <div className="Line" ref={lineRef5}></div>
                  <a className="Menu-Link" ref={linkRef5}>Story</a>
                </div>
                <div className="Menu-Item flex item-6">
                  <div className="Line" ref={lineRef6}></div>
                  <a className="Menu-Link" ref={linkRef6}>Gallery</a>
                </div>
            </div>
          </div>
          <div className="Innersection1"></div>
      </section>
      <div className="cat"><section className="CatalougeSection d-flex w-100" ref={CatalougeRef}>
          <div class="container-fluid text-center d-flex flex-column justify-content-center align-items-center w-100 gap-4">
            <h3 ref={refh3c}>Catalogue 23/24</h3>
                <div class="products row w-100 gap-4" >
                  <div ref={refpc1} class="col-sm w-100 gap-3 d-flex flex-column justify-content-center align-items-center">
                    <div className="title text-center">4way Stretch</div>
                    <div className="product-img"><img src={p1}/></div>
                    <a href="#" className="buy-product">Buy</a>
                  </div>
                  <div ref={refpc2} class="col-sm w-100 gap-3 d-flex flex-column justify-content-center align-items-center">
                  <div className="title text-center">4way Stretch</div>
                    <div className="product-img"><img src={p1}/></div>
                    <a href="#" className="buy-product">Buy</a>
                  </div>
                  <div ref={refpc3} class="col-sm w-100 gap-3 d-flex flex-column justify-content-center align-items-center">
                  <div className="title text-center">4way Stretch</div>
                    <div className="product-img"><img src={p1}/></div>
                    <a href="#" className="buy-product">Buy</a>
                  </div>
                  <div ref={refpc4} class="col-sm w-100 gap-3 d-flex flex-column justify-content-center align-items-center">
                  <div className="title text-center">4way Stretch</div>
                    <div className="product-img"><img src={p1}/></div>
                    <a href="#" className="buy-product">Buy</a>
                  </div>
                </div>
          </div>
      </section></div>
      <div className="aboutcon" ref={AboutcRef}>
      <section className="About-section" ref={AboutRef}>
        <container className="container1" ref={con1Ref}>
          <h1>About</h1>
          <div className="circle" ref={circleRef}><svg class="about-arrow__circle" viewBox="0 0 64 64">
						<circle cx="50%" cy="50%" r="15.9154" fill="none" stroke="white" stroke-width="32">
						</circle>
					</svg>
          </div>
        </container>
      </section>
      </div>
      <section className="aboutcon2" ref={Aboutc2Ref}>
      <section className="about-section2" ref={About2Ref}>
      <container className="container2" ref={con2Ref}>
      <h1 ref={h1refcon2}>
          <span ref={h1span1}>S</span>
          <span ref={h1span2}>S</span>
          <span ref={h1span3}>2</span>
          <span ref={h1span4}>4</span>
          <span>&nbsp;</span>
          <span ref={h1span5}>M</span>
          <span ref={h1span6}>O</span>
          <span ref={h1span7}>R</span>
          <span ref={h1span8}>E</span>
        </h1>
      </container>
      </section>
      </section>
      <section className="aboutcon3" ref={Aboutc3Ref}>
      <section className="about-section3" ref={About3Ref}>
      <container className="container3" ref={con3Ref}>
        <div className="contentoverlay" ref={bgrovr}>
        <div className="contents" ref={cntnt3}>  
        <p>「skinshell（スキンシェル）」は、その人本来の魅力を引き立てる"美しさ"をベースにしながら、着用時の快適性を追求した商品開発のもとに生まれたUVケアインナートップスです。通気性、薄さ、軽量性など、UVケアとは相反する機能を搭載し、また、テニスをプレーする際の動きに即した設計を採用しています。</p>
        <a href="#">Read More</a>
        </div>
        </div>
      </container>
      <h3>SeaShell</h3>
      </section>
      </section>
      
      
      <section className="aboutcon4" ref={Aboutc4Ref}>
      <section className="about-section4" ref={About4Ref}>
      <container className="container4" ref={con4Ref}>
        <div className="contentoverlay" ref={bgrovr1}>
        <div className="contents" ref={cntnt4}>  
        <p>汗などの濡れよるウエアの変色を軽減してくれる「Color Protection（カラープロテクション）」シリーズ。<br></br>
        汗はすばやく吸収しながら、汗ジミを軽減するという、相反する機能を両立した素材を採用しています。特殊な糸を使用して光の反射率を均一にすることで、吸汗速乾機能は維持しながら、濡れによる色の見え方の変化を軽減しています。</p>
        <a href="#">Read More</a>
        </div>
        </div>
      </container>
      <h3>COLOR PROTECTION</h3>
      </section>
      </section>
      <section className="aboutcon5" ref={Aboutc5Ref}>
      <section className="about-section5" ref={About5Ref}>
      <h3>COLOR PROTECTION</h3>
      </section>
      </section>
      
      <section className="onlinecon" ref={onlinecRef}>
        <section className="onlinestore" ref={onlineRef}>
        <container className="container5">
        <h2 className="txt-marquee"> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span>Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span>Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> Online Store <span>Online Store</span> &nbsp;</h2>
        <div className="innersec">
          <a href=""><div className="div1" ref={div1Ref}>
            <h3>Mens</h3>
          </div></a>
          <a href=""><div className="div2">
          <h3>UNISEX</h3>
          </div></a>
          <a href=""><div className="div3" ref={div3Ref}>
          <h3>WOMENS</h3>
          </div></a>
        </div>
      </container>
        </section>
      </section> 
      <section className="scndlast">
        <h1 className="h11">W.P.D</h1>
        <h1 className="h12">PLAY BEATS</h1>
        <h1 className="h13">SKINSHELL WARM</h1>
        <h1 className="h14">SWEET STYLE</h1>
      </section>

      <section className="footer w-100  p-4">
        <container className="inner container d-flex justify-content-center align-items-center gap-3 flex-column">
            <div className="row d-flex justify-content-center align-items-center w-100 pt-4">
              <div className="col-4"></div>
              <div className="col-4 text-center d-flex justify-content-center align-items-center"><h2>Information</h2></div>
              <div className="col-4 d-flex justify-content-end align-items-center"><a href="#" className="text-dark d-flex justify-content-end align-items-center">View All</a></div>
            </div>
            <div className="row w-100 row1 w-100">
              <div className="col-6 d-flex justify-content-center align-items-center imgcc1"><img src={img1} alt="" className="img-c" /></div>
              <div className="col-6 d-flex justify-content-center align-items-center imgcc2"><img src={img2} alt="" className="img-c" /></div>
            </div>
            <div className="row w-100 c-row">
              <div className="col-12 text-center c-row"><h1>@LaurenApparel</h1></div>
            </div>
            <div className="row w-100 w-100">
              <div className="col-3 d-flex justify-content-center align-items-center"><img src={img3} alt="" /></div>
              <div className="col-3 d-flex justify-content-center align-items-center"><img src={img4} alt="" /></div>
              <div className="col-3 d-flex justify-content-center align-items-center"><img src={img5} alt="" /></div>
              <div className="col-3 d-flex justify-content-center align-items-center"><img src={img3} alt="" /></div>
            </div>
        </container>
      </section>
    </>
  );
}

export default Home;
