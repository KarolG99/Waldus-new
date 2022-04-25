import styled from "styled-components";
import { Scale } from "../Projects/Projects.styles";

interface Props {
  isOpen?: boolean;
  isMobile?: boolean;
}
export const OuterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  z-index: 100;
  position: relative;
  max-width: 1600px;
  margin: auto;

  ${({ theme }) => theme.mq.desktop} {
    padding: 0;
  }
`;

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  div {
    width: 2rem;
    height: 0.2rem;
    background: black;
    position: relative;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: ${({ isOpen }: Props) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.white};
  justify-content: space-between;
  align-items: center;
  padding: 50px;

  &.animation {
    animation: ${Scale} 0.27s ease-in-out;
  }

  ${({ theme }) => theme.mq.desktop} {
    position: static;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80px;
    background-color: transparent;
    padding: 20px 50px;
  }
`;

export const Logo = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.size.heading};

  ${({ theme }) => theme.mq.desktop} {
    display: ${({ isMobile }: Props) => (isMobile ? "none" : "initial")};
  }
`;

export const Line = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    left: 40%;
    height: 2px;
    width: 20%;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 0.4s ease;
  }
`;

export const StyledNavigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    text-align: center;

    li {
      margin: 50px 20px;

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.color.black};
        font-size: ${({ theme }) => theme.font.size.mobileMenu};
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-left: auto;
    ul {
      display: flex;
      height: auto;
      li {
        margin: 0 30px;
        a {
          position: relative;
          font-size: ${({ theme }) => theme.font.size.smallMenu};

          &:hover ${Line} {
            transform: scaleX(5);
          }
        }
      }
    }
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    ul > li {
      margin: 0 40px;
    }
  }

  ${({ theme }) => theme.mq.huge} {
    ul > li {
      margin: 0 55px;
    }
  }
`;
