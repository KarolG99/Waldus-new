import React from "react";
import {
  ContactDetail,
  ContactHeader,
  ContactWrapper,
  FooterLine,
  StyledPerformance,
} from "./Contact.styles";

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <ContactHeader>Skontakuj się z nami</ContactHeader>

      <ContactDetail>
        <p>
          Telefon:{" "}
          <a href="tel:123456789">
            {" "}
            (+48)<strong> 123 456 789</strong>
          </a>
        </p>
        <p>Jastrzębia (adres)</p>
        <p>33-191</p>
        <p>woj. małopolskie</p>
        <p>Pn. - Pt. 7:00 - 18:00</p>
        <p>
          e-mail: <a href="mailto:adres@adres.pl">adres@adres.pl</a>
        </p>
      </ContactDetail>
      <FooterLine />
      <StyledPerformance>
      <h3>
        Wykonanie:{" "}
        <a href="https://karolgucwa.pl/" rel="noreferrer" target="_blank">
          karolgucwa.pl
        </a>
      </h3>
      </StyledPerformance>
    </ContactWrapper>
  );
};

export default Contact;
