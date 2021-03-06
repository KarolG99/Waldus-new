import styled, { keyframes } from "styled-components";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

export const Scale = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0.1;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ProjectsWrapper = styled.div`
  margin-top: 300px;
  position: relative;

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 400px;
  }

  h1 {
    font-weight: 700;
    position: relative;
    width: fit-content;
    margin: auto;

    &::after {
      position: absolute;
      bottom: 2px;
      left: 0%;
      content: "";
      width: 35%;
      height: 20px;
      background-color: ${({ theme }) => theme.color.primary};
      z-index: -1;
    }
  }
`;

export const DataInfo = styled.h2`
  width: 80%;
  max-width: 300px;
  margin: 100px auto 100px auto;
`;

export const CarouselWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 80px 0 20px 0;
  z-index: 1;
`;

export const CarouselImage = styled.img`
  width: 80%;
  max-width: 500px;
  margin: 0 5px;

  &.with-animation {
    animation: ${Scale} 0.4s ease-in-out;
  }

  ${({ theme }) => theme.mq.tablet} {
    margin: 0 20px;
  }
`;

export const AfterElement = styled.div`
  width: 80%;
  height: 60%;
  position: absolute;
  top: 12%;
  right: 0;
  background-color: ${({ theme }) => theme.color.primary};
  z-index: -1;
`;

export const ArrowIcon = styled(Arrow)`
  cursor: pointer;

  &.prev {
    transform: rotate(180deg);
  }
`;

export const StyledImageCounter = styled.p`
  text-align: center;
  margin-top: 0;
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.dark};
`;
