import React from 'react'
import { HeaderImage, HeaderImageWrapper, HeaderQuote, Wrapper } from './Header.styles';
import headerImg from '../../assets/images/headerImg.jpg';

const Header = () => {
  return (
    <Wrapper>
        <HeaderImageWrapper>
          <HeaderImage src={headerImg} alt="pomieszczenie" />
        </HeaderImageWrapper>
        <HeaderQuote>
          Niemożliwe rzeczy robimy od zaraz, a na cuda trzeba poczekać.
        </HeaderQuote>
    </Wrapper>
  )
}

export default Header