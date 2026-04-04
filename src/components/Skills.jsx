import React from "react";
import "../css/Skills.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import OutlineBtn from "./OutlineBtn";

const Skills = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const titleSplit = new SplitText(".skillWrapper .left h2", {
      type: "lines, chars",
    });

    const paraSplit = new SplitText(".skillWrapper .left p", {
      type: "lines",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skillWrapper",
        start: "top top",
        end: "+=800", // ✅ FIXED SCROLL LENGTH
        pin: true,
        scrub: 1,
        anticipatePin: 1, // ✅ smoother pin
      },
    });

    tl.from(titleSplit.chars, {
      x: -80,
      opacity: 0,
      stagger: 0.05,
    }).from(paraSplit.lines, {
      x: -80,
      opacity: 0,
      stagger: 0.08,
    });

    gsap.utils.toArray(".brutalist-button").forEach((btn) => {
      tl.from(btn, {
        y: 27,
        x: 42,
        opacity: 0,
        stagger: 0.15,
        ease: "power3.out",
      });
    });
  });

  return (
    <div className="skillWrapper">
      <div className="container">
        <div className="left">
          <h2>My Skills</h2>
          <p>
            I am a passionate Frontend Developer and Web Designer focused on
            building clean, responsive, and user-friendly websites. I work with
            technologies like HTML, CSS, JavaScript, React, and WordPress to
            create modern interfaces with strong attention to design,
            performance, and usability. I enjoy turning ideas into interactive
            digital experiences and continuously improving my skills through
            real-world projects.
          </p>
        </div>
        <div className="right">
          {/* BASE LEVEL SKILLS */}
          <div className="base-level">
            <div className="html">
              <button className="brutalist-button button-1">
                <span className="button-text">HTML</span>
              </button>
            </div>
            <div className="css">
              <button className="brutalist-button button-1">
                <span className="button-text">CSS</span>
              </button>
            </div>
            <div className="js">
              <button className="brutalist-button button-1">
                <span className="button-text">JavaScript</span>
              </button>
            </div>
            <div className="tailwind">
              <button className="brutalist-button button-1">
                <span className="button-text">Tailwind CSS</span>
              </button>
            </div>
          </div>

          {/* MID LEVEL SKILLS */}
          <div className="mid-level">
            <div className="react">
              <button className="brutalist-button button-1">
                <span className="button-text">ReactJS / ViteJS</span>
              </button>
            </div>
            <div className="css">
              <button className="brutalist-button button-1">
                <span className="button-text">GSAP</span>
              </button>
            </div>
            <div className="js">
              <button className="brutalist-button button-1">
                <span className="button-text">Material UI</span>
              </button>
            </div>
          </div>

          {/* TOP LEVEL SKILLS */}
          <div className="top-level">
            <div className="wordpress">
              <button className="brutalist-button button-1">
                <span className="button-text">Wordpress</span>
              </button>
            </div>
            <div className="css">
              <button className="brutalist-button button-1">
                <span className="button-text">Wix</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
