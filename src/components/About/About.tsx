import { gql, useQuery } from "@apollo/client";
import React from "react";
import aboutImg from "../../assets/images/aboutImg.jpg";
import {
  AboutImage,
  AboutTextWrapper,
  AboutWrapper,
  EllipseIcon,
  AboutImgWrapper,
} from "./About.styles";

const query = gql`
  {
    about {
      aboutText
    }
  }
`;

const About = () => {
  const { data } = useQuery(query);

  return (
    <AboutWrapper>
      <AboutTextWrapper>
        <h1>Walduś</h1>
        {data ? (
          <p>{data.about.aboutText}</p>
        ) : (
          <p>
            Jesteśmy niedużą ale solidną firmą ogólnobudowlaną z Jastrzębi koło
            Tarnowa. Mamy 20 lat doświadczenia w branży, które zdobywaliśmy w
            firmach zagranicznych i polskich. Cały czas idziemy z duchem czasu,
            a nowości w branży nie są nam obce. Możesz liczyć na nasze doradztwo
            na każdym etapie pracy. Skontaktuj się z nami, a możesz być pewny,
            że sprostamy Twoim oczekiwaniom.
          </p>
        )}
      </AboutTextWrapper>

      <AboutImgWrapper>
        <AboutImage src={aboutImg} />
        <EllipseIcon />
        <EllipseIcon className="second" />
      </AboutImgWrapper>
    </AboutWrapper>
  );
};

export default About;
