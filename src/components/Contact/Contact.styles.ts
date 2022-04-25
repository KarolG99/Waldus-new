import styled from "styled-components";

export const ContactWrapper = styled.footer`
  position: relative;
  border-top: 1px solid #B1886A;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px 10px 20px;

  ${({ theme }) => theme.mq.tablet} {
      margin-top: 200px;
  }
`;

export const ContactHeader = styled.h1`
  position: absolute;
  top: -42px;
  left: 20px;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 2;
  font-weight: 700;

  &::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 100%;
    background-color: ${({ theme }) => theme.color.primary};
    right: -5px;
    z-index: -1;
  }

  ${({ theme }) => theme.mq.desktop} {
    left: 100px;
  }
`;

export const ContactDetail = styled.div`
  color: ${({ theme }) => theme.color.black};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const FooterLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #B1886A;
`;

export const StyledPerformance = styled.div`
    margin-top: 10px;

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.color.primary};
    }
`;