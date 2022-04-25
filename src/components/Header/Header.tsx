import React from "react";
import {
  HeaderImage,
  HeaderImageWrapper,
  HeaderQuote,
  Wrapper,
} from "./Header.styles";
import headerImg from "../../assets/images/headerImg.jpg";

const Header = () => {
  return (
    <Wrapper>
      <HeaderImageWrapper>
        <HeaderImage src={headerImg} alt="pomieszczenie" />
      </HeaderImageWrapper>
      <HeaderQuote>
        <span> Niemożliwe</span> rzeczy robimy <span>od zaraz</span>, a na{" "}
        <span>cuda</span> trzeba poczekać.
      </HeaderQuote>
    </Wrapper>
  );
};

export default Header;
