import React from "react";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
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
        <Projects />
      </StyledMain>
    </MainTemplate>
  );
}

export default App;
