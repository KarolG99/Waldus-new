import React from "react";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import MainTemplate from "./templates/MainTemplate";
import Contact from "./components/Contact/Contact";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./api/apolloClient";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <MainTemplate>
        <Header />
        <main>
          <Services />
          <About />
          <Projects />
          <Contact />
        </main>
      </MainTemplate>
    </ApolloProvider>
  );
}

export default App;
