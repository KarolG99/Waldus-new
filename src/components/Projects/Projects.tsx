import React, { useState } from "react";
import {
  AfterElement,
  ArrowIcon,
  CarouselImage,
  CarouselWrapper,
  ProjectsWrapper,
} from "./Projects.styles";
import img1 from "../../assets/images/headerImg.jpg";
import img2 from "../../assets/images/aboutImg.jpg";

const Images = [img1, img2];

const Projects = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [animationActive, setAnimationActive] = useState(false);

  const toggleImage = (action: string) => {
    switch (action) {
      case "next":
        setAnimationActive(true);
        setCurrentImg((prev) => prev + 1);
        if (currentImg >= Images.length - 1) setCurrentImg(0);
        break;

      case "prev":
        setAnimationActive(true);
        setCurrentImg((prev) => prev - 1);
        if (currentImg <= 0) setCurrentImg(Images.length - 1);
        break;
    }
  };

  return (
    <ProjectsWrapper>
      <h1>Nasze Projekty</h1>

      <CarouselWrapper>
        <ArrowIcon className="prev" onClick={() => toggleImage("prev")} />
        <CarouselImage
          className={animationActive ? "with-animation" : ""}
          onAnimationEnd={() => setAnimationActive(false)}
          src={Images[currentImg]}
          alt="projekty"
        />
        <ArrowIcon onClick={() => toggleImage("next")} />
        <AfterElement></AfterElement>
      </CarouselWrapper>
    </ProjectsWrapper>
  );
};

export default Projects;
