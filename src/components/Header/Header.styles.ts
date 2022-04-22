import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 30px 150px 20px;
  padding-top: 60px;
`;

export const HeaderImageWrapper = styled.div`
  position: relative;
  width: 90%;
  height: fit-content;
  max-width: 600px;
  ::after {
    position: absolute;
    width: 120px;
    height: 120px;
    content: "";
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 90%, 90% 90%, 90% 0);
    background-color: ${({ theme }) => theme.color.primary};
    bottom: -13px;
    right: -15px;
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
