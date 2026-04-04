import React, { useRef } from "react";
import "../css/Project.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ProjectsData } from "../ProjectsData";
import { Link } from "react-router-dom";

const Projects = () => {
  const horizontalSection = useRef();

  useGSAP(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".projectsWrapper",
        start: "top 70%",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    const titleSplit2 = new SplitText(".projectsWrapper .container h2", {
      type: "lines, chars",
    });

    tl2.from(titleSplit2.chars, {
      y: 80,
      opacity: 0,
      stagger: 0.25,
      duration: 2,
    });

    gsap.to(".horizontal", {
      x: () => -(horizontalSection.current.scrollWidth - window.innerWidth), //ensure smooth end
      scrollTrigger: {
        trigger: ".horizontal",
        start: "center center",
        end: () => "+=" + horizontalSection.current.scrollWidth, //dynamic end
        pin: ".projectsWrapper",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    gsap.from(".card", {
      x: 250,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".card",
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
    });

    // const SplitText3 = new SplitText(".card h4", {
    //   type: "lines, chars",
    // });
    // const SplitText4 = new SplitText(".card p", {
    //   type: "lines, chars",
    // });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".imageBox",
        start: "top 50%",
        end: "bottom bottom",
      },
    });

    tl3
      .from(
        ".card .infoBar h4",
        {
          x: 26,
          opacity: 0,
          duration: 1,
        },
        "s",
      )
      .from(".card .infoBar p", {
        x: 20,
        opacity: 0,
        duration: 1,
      });

    gsap.utils.toArray(".card").forEach((card) => {
      const image = card.querySelector(".imageBox");
      const indicator = card.querySelector(".hoverIndicator");

      const hoverIn = () => {
        gsap.to(card, {
          scale: 1.03,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(indicator, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
        });
        ƒ;
      };

      const hoverOut = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(image, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(indicator, {
          opacity: 0,
          scale: 0.5,
          duration: 0.3,
          ease: "power3.out",
        });
      };

      const hoverMove = (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 12;
        const rotateX = -((y - centerY) / centerY) * 12;

        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 1800,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(card.querySelector(".imageBox"), {
          x: -(rotateY * 2),
          y: rotateX * 2,
          duration: 0.3,
          ease: "power4.out",
        });

        // Cursor-following circle
        gsap.to(indicator, {
          x,
          y,
          duration: 0.25,
          ease: "power3.out",
        });
      };
      card.addEventListener("mouseenter", hoverIn);
      card.addEventListener("mousemove", hoverMove);
      card.addEventListener("mouseleave", hoverOut);
    });
  });

  return (
    <div className="projectsWrapper" id="projectScroll">
      <div className="container">
        <h2>My Projects</h2>
        <section id="horizontal-scroll">
          <div className="horizontal-scroll-wrapper">
            <div className="horizontal" ref={horizontalSection}>
              {ProjectsData.map((card, idx) => {
                return (
                  <div>
                    <div className="card" key={idx}>
                      <div className="hoverIndicator">
                        <span>View Project</span>
                      </div>
                      <a href={card.webLink} target="_blank">
                        <div className="imageBox">
                          <img src={card.imageLink} alt="Project 01" />
                        </div>
                        <div className="infoBar">
                          <h4>{card.title}</h4>
                          <p>{card.para}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
