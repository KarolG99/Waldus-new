import React from "react";
import aboutImg from "../../assets/images/aboutImg.jpg";
import {
  AboutImage,
  AboutTextWrapper,
  AboutWrapper,
  EllipseIcon,
  AboutImgWrapper,
} from "./About.styles";

const About = () => {
  return (
    <AboutWrapper>
      <AboutTextWrapper>
        <h1>Walduś</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but
        </p>
      </AboutTextWrapper>

      <AboutImgWrapper>
        <AboutImage src={aboutImg} />
        <EllipseIcon />
      </AboutImgWrapper>
    </AboutWrapper>
  );
};

export default About;
