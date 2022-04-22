import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/styles/GlobalStyles";
import { theme } from "../assets/styles/theme";
import PropTypes from "prop-types";
import Navigation from "../components/Navigation/Navigation";
import { AppWrapper } from "./MainTemplate.styles";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MainTemplate = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
        <AppWrapper>{children}</AppWrapper>
      </ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node,
};

export default MainTemplate;
