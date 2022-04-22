import React, { useState } from "react";
import { Logo, OuterWrapper, StyledBurger, StyledNavigation, Wrapper } from "./Navigation.styles";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
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
      <Wrapper isOpen={isOpen}>
        <Logo>Walduś</Logo>
        <StyledNavigation>
          <ul>
            <li>
              <a href="/">Strona Główna</a>
            </li>
            <li>
              <a href="/">Usługi</a>
            </li>
            <li>
              <a href="/">Kontakt</a>
            </li>
          </ul>
        </StyledNavigation>
        <div></div>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Navigation;
