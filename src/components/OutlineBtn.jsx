import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FaWhatsapp } from "react-icons/fa";

const OutlineBtn = ({ btnText, linkRef, iconTrue, linkedTo }) => {
  gsap.registerPlugin(ScrollToPlugin);
  const scrollToProjects = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: linkRef,
      ease: "power2.out",
    });
  };

  return (
    <a href={linkedTo} target="_blank">
      <button className="outline-btn" onClick={scrollToProjects}>
        <span className="button_top">
          {btnText} {iconTrue && <FaWhatsapp />}
        </span>
      </button>
    </a>
  );
};

export default OutlineBtn;
