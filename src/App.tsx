import React from "react";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import { StyledMain } from "./components/Main.styles";
import Services from "./components/Services/Services";
import MainTemplate from "./templates/MainTemplate";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <MainTemplate>
      <Header />
      <StyledMain>
        <Services />
        <About />
        <Projects />
        <Contact />
      </StyledMain>
    </MainTemplate>
  );
}

export default App;
