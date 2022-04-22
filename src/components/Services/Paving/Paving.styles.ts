import styled from "styled-components";

export const Section = styled.section`
  width: 40%;
  margin: 20px;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  & img {
    width: 20%;
    max-width: 120px;
    padding: 20px;
  }
  & .sect-text {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    width: 50%;
    color: ${({ theme }) => theme.color.dark};
    & h2 {
      font-family: ${({ theme }) => theme.font.family.montserrat};
      color: ${({ theme }) => theme.color.black};
      font-weight: 600;
    }
    & p {
      margin: 15px 0px;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 80vw;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    width: 70vw;
    & .sect-text {
      order: 1;
      width: fit-content;
      text-align: center;
      padding: 10px 10px;
    }
    & img {
      width: 40%;
    }
  }
`;
