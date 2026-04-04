import React from "react";
import FullBtn from "./FullBtn";
import OutlineBtn from "./OutlineBtn";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="container">
        <h2>Hire Me</h2>
        <h4>Let's Connect With Me</h4>
        <div className="row">
          <OutlineBtn
            btnText={"Call Me"}
            iconTrue={true}
            linkedTo={"https://wa.me/923140341251"}
          />
          <FullBtn />
        </div>
      </div>
    </div>
  );
};

export default Footer;
