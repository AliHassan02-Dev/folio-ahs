import React from "react";
import { FaDownload } from "react-icons/fa";
import "../css/Hero.css";
import OutlineBtn from "./OutlineBtn";
import FullBtn from "./FullBtn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText.js";

const Home = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".heroWrapper",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    });

    const hdgSplit1 = new SplitText(".heroWrapper .container h2", {
      type: "lines, chars",
    });

    gsap.from(hdgSplit1.chars, {
      y: 80,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
    });

    const hdgSplit2 = new SplitText(".heroWrapper .container h4", {
      type: "lines, chars",
    });

    gsap.from(hdgSplit2.lines, {
      y: 80,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      delay: 1,
    });

    gsap.from(".btns-row", {
      y: "60px",
      opacity: 0,
      duration: 0.8,
      ease: "elastic.out",
      delay: 2,
    });
  });
  return (
    <div className="heroWrapper">
      <div className="container">
        <h2>Ali Hassan</h2>
        <h4>Web Developer & Designer</h4>
        <div className="btns-row">
          <OutlineBtn linkRef={"#projectScroll"} btnText={"View My Work"} />
          <FullBtn/>
        </div>
      </div>
    </div>
  );
};

export default Home;
