import React from "react";
import { Article, ServicesHeader } from "./Services.styles";
import Paving from "./Paving/Paving";
import Renovation from "./Renovation/Renovation";
import Fences from "./Fences/Fences";
import Excavator from "./Excavator/Excavator";

const Services = () => {
  return (
    <Article id="services">
      <ServicesHeader> Nasze usługi </ServicesHeader>
      <Paving />
      <Renovation />
      <Fences />
      <Excavator />
    </Article>
  );
};

export default Services;
