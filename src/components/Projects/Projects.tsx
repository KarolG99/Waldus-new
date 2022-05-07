import React, { useEffect, useState } from "react";
import {
  AfterElement,
  ArrowIcon,
  CarouselImage,
  CarouselWrapper,
  DataInfo,
  ProjectsWrapper,
  StyledImageCounter,
} from "./Projects.styles";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  {
    image {
      sliderImage {
        url
      }
    }
  }
`;

const Projects = () => {
  const { loading, error, data } = useQuery(query);
  const [currentImg, setCurrentImg] = useState(0);
  const [imageCounter, setImageCounter] = useState(0);
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    if (data) {
      setImageCounter(data.image.sliderImage.length);
    }
  }, [data]);

  const toggleImage = (action: string) => {
    switch (action) {
      case "next":
        setCurrentImg((prev) => prev + 1);
        if (currentImg >= data.image.sliderImage.length - 1) setCurrentImg(0);
        setAnimationActive(true);
        break;

      case "prev":
        setCurrentImg((prev) => prev - 1);
        if (currentImg <= 0) setCurrentImg(data.image.sliderImage.length - 1);
        setAnimationActive(true);
        break;
    }
  };

  return (
    <ProjectsWrapper id="projects">
      <h1>Nasze realizacje</h1>

      {loading && <DataInfo>Ładowanie ...</DataInfo>}

      {error && <DataInfo>Nie mogę wczytać zdjęć, coś poszło nie tak</DataInfo>}

      {!error && !loading && data && (
        <>
          <CarouselWrapper>
            <ArrowIcon className="prev" onClick={() => toggleImage("prev")} />

            <CarouselImage
              className={animationActive ? "with-animation" : ""}
              onAnimationEnd={() => setAnimationActive(false)}
              src={data.image.sliderImage[currentImg].url}
              alt="projekty"
            />

            <ArrowIcon onClick={() => toggleImage("next")} />
          </CarouselWrapper>
          <StyledImageCounter>
            {currentImg + 1}/<strong>{imageCounter}</strong>
          </StyledImageCounter>
        </>
      )}

      <AfterElement />
    </ProjectsWrapper>
  );
};

export default Projects;
