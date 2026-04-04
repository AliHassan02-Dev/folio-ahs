import React from "react";
import { FaDownload } from "react-icons/fa";

const FullBtn = () => {
  return (
    <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
      <button type="button" class="full-btn">
        <span className="button__text">Download CV</span>
        <span className="button__icon">
          <FaDownload />
        </span>
      </button>
    </a>
  );
};

export default FullBtn;
