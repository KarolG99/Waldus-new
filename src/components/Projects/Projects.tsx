import React, { useEffect, useState } from "react";
import {
  AfterElement,
  ArrowIcon,
  CarouselImage,
  CarouselWrapper,
  ProjectsWrapper,
  StyledImageCounter,
} from "./Projects.styles";
import img0 from "../../assets/images/sliderImages/img0.png";
import img1 from "../../assets/images/sliderImages/img1.png";
import img2 from "../../assets/images/sliderImages/img2.png";
import img3 from "../../assets/images/sliderImages/img3.png";
import img4 from "../../assets/images/sliderImages/img4.png";

const Images = [img0, img1, img2, img3, img4];

const Projects = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [imageCounter, setImageCounter] = useState(0);
  // const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    if (Images.length) {
      setImageCounter(Images.length);
    }
  }, []);

  const toggleImage = (action: string) => {
    switch (action) {
      case "next":
        // setAnimationActive(true);
        setCurrentImg((prev) => prev + 1);
        if (currentImg >= Images.length - 1) setCurrentImg(0);
        break;

      case "prev":
        // setAnimationActive(true);
        setCurrentImg((prev) => prev - 1);
        if (currentImg <= 0) setCurrentImg(Images.length - 1);
        break;
    }
  };

  return (
    <ProjectsWrapper id="projects">
      <h1>Nasze realizacje</h1>

      <CarouselWrapper>
        <ArrowIcon className="prev" onClick={() => toggleImage("prev")} />
        <CarouselImage
          // className={animationActive ? "with-animation" : ""}
          // onAnimationEnd={() => setAnimationActive(false)}
          src={Images[currentImg]}
          alt="projekty"
        />
        <ArrowIcon onClick={() => toggleImage("next")} />
      </CarouselWrapper>
      <StyledImageCounter>
        {currentImg + 1}/<strong>{imageCounter}</strong>
      </StyledImageCounter>

      <AfterElement />
    </ProjectsWrapper>
  );
};

export default Projects;
