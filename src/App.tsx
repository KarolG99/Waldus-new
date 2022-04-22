import React from "react";
import About from "./components/About/About";
import Carousel from "./components/Carousel/Carousel";
import Header from "./components/Header/Header";
import { StyledMain } from "./components/Main.styles";
import Services from "./components/Services/Services";
import MainTemplate from "./templates/MainTemplate";

function App() {
  return (
    <MainTemplate>
      <Header />
      <StyledMain>
        <Services />
        <About />
        <Carousel />
      </StyledMain>
    </MainTemplate>
  );
}

export default App;
