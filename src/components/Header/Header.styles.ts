import styled from "styled-components";

export const Wrapper = styled.header`
  margin: 0 30px 150px 20px;
  padding-top: 60px;
  position: relative;

    &::after {
      content: "";
      width: 270px;
      height: 120%;
      background-color: ${({ theme }) => theme.color.light};
      position: absolute;
      top: -80px;
      right: 20px;
    }
`;

export const HeaderImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  max-width: 600px;
  z-index: 9;
  ::after {
    position: absolute;
    width: 60%;
    height: 60%;
    content: "";
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 95%, 96% 95%, 96% 0);
    background-color: ${({ theme }) => theme.color.primary};
    bottom: -13px;
    right: -17px;

    ${({ theme }) => theme.mq.tablet} {
      bottom: -17px;
    right: -22px;
    }
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    margin-left: 10%;
  }
`;

export const HeaderImage = styled.img`
  width: 100%;
`;

export const HeaderQuote = styled.h1`
  font-family: ${({ theme }) => theme.font.family.cormorant};
  margin-top: 100px;
  margin-bottom: 100px;
  max-width: 320px;
  margin-left: calc(100% - 320px);
  font-weight: 600;
  position: relative;
  z-index: 10;
  line-height: 150%;
  padding: 5px;

  span {
    background-color: rgba(252, 135, 0, 0.7);
  }

  ${({ theme }) => theme.mq.small} {
    margin: 100px 10px 100px 10px;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 10px;
    margin-left: calc(100% - 320px);
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    margin-left: auto;
    margin-right: 10%;
  }
`;
