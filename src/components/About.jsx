import React from "react";
import "../css/About.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const About = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

  useGSAP(() => {
    // gsap.from(".aboutWrapper .text-overlay h4", {
    //   y: 150,
    //   skewY: 10,
    //   duration: 1.5,
    //   ease: "sine.in",
    //   scrollTrigger: {
    //     trigger: ".aboutWrapper",
    //     start: "top 30%",
    //     end: "bottom bottom",
    //     scrub: 1,
    //   },
    // });

    SplitText.create(".aboutWrapper .container h4", {
      type: "line, chars",
      onSplit(self) {
        gsap.set(self.chars, {
          opacity: 0.25,
        });

        gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".aboutWrapper",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      },
    });
  });

  return (
    <div className="aboutWrapper">
      <div className="container">
        {/* <div className="text-overlay"> */}
        <h4>
          <span className="aboutHighlight">Hey, I’m Ali Hassan 👋</span>
          <br />
          I am a passionate Web Developer and Designer with a strong focus on WordPress development and modern UI design. I have experience designing websites in Photoshop and Figma and converting designs into responsive, user-friendly websites. Along with WordPress, I also work with custom front-end development using HTML, CSS, JavaScript, and React (Vite). Currently, I am expanding my skill set by learning backend technologies including Node.js, Express.js, and MongoDB. I enjoy creating clean, functional, and visually appealing web experiences.
        </h4>
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;
