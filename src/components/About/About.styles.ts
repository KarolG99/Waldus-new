import styled from "styled-components";
import { ReactComponent as Ellipse } from "../../assets/icons/ellipseGroup.svg";

export const AboutWrapper = styled.article`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${({ theme }) => theme.mq.desktop} {
    display: block;
  }
`;

export const AboutTextWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  width: 85%;
  padding: 1px 10px 5px 10px;
  max-width: 470px;

  h1 {
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    font-weight: 700;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-left: 7%;
    position: relative;
    z-index: 10;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
      position: relative;
      margin-left: 22%;
  }
`;

export const AboutImgWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;

  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    bottom: -50%;
    left: calc(3% + 430px);
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    position: absolute;
    left: calc(19% + 430px);
  }
`;

export const EllipseIcon = styled(Ellipse)`
  width: 20%;
  position: absolute;
  bottom: -80px;
  left: 3%;

  ${({ theme }) => theme.mq.tablet} {
    width: 105px;
  }

  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    left: 90%;
    top: -200px;
  }

  &.second {
    display: none;
    position: absolute;
    top: 140px;
    left: -520px;
    width: 70px;

    ${({ theme }) => theme.mq.bigDesktop} {
      display: block;
    }
  }
`;

export const AboutImage = styled.img`
  width: 80%;
  margin-top: 10px;
  max-width: 450px;
`;
