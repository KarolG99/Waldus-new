import React, { useState } from "react";
import {
  Logo,
  OuterWrapper,
  StyledBurger,
  StyledNavigation,
  Wrapper,
} from "./Navigation.styles";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAnimation, setOpenAnimation] = useState(false);

  const toggleNavigation = () => {
    setOpenAnimation(true);
    setIsOpen((prevState) => !prevState);
  };

  return (
    <OuterWrapper>
      <Logo isMobile>Walduś</Logo>
      <StyledBurger onClick={toggleNavigation}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Wrapper
        isOpen={isOpen}
        onAnimationEnd={() => setOpenAnimation(false)}
        className={openAnimation ? "animation" : ""}
      >
        <Logo>Walduś</Logo>
        <StyledNavigation>
          <ul>
            <li>
              <a id="home" href="#home" onClick={toggleNavigation}>
                Strona Główna
              </a>
            </li>
            <li>
              <a href="#services" onClick={toggleNavigation}>
                Usługi
              </a>
            </li>
            <li>
              <a href="/" onClick={toggleNavigation}>
                Kontakt
              </a>
            </li>
          </ul>
        </StyledNavigation>
        <div></div>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Navigation;
