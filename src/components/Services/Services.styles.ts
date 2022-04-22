import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  margin: auto;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};
  padding-bottom: 60px;
  width: 100%;
`;

export const ServicesHeader = styled.h1`
  max-width: 100vw;
  background-color: ${({ theme }) => theme.color.white};
  margin: 70px 30vw 50px 30vw;
  padding: 0.2rem 0.6rem 0.2rem 0.6rem;
  border-radius: 15px 15px 15px 15px;
  font-size: ${({ theme }) => theme.font.size.heading};
  color: ${({ theme }) => theme.color.black};
  position: relative;
  z-index: 2;
  text-align: center;

  &::after {
    content: "";
    width: 50%;
    height: 30px;
    background-color: ${({ theme }) => theme.color.primary};
    position: absolute;
    top: 10%;
    left: 10px;
    z-index: -1;
  }
`;
