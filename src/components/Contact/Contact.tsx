import { gql, useQuery } from "@apollo/client";
import React from "react";
import {
  ContactDetail,
  ContactHeader,
  ContactWrapper,
  FooterLine,
  StyledPerformance,
} from "./Contact.styles";

const query = gql`
  {
    kontakt {
      phoneNumber
      openingHours
      email
    }
  }
`;

const Contact = () => {
  const { data } = useQuery(query);

  return (
    <ContactWrapper id="contact">
      <ContactHeader>Skontakuj się z nami</ContactHeader>

      <ContactDetail>
        {data ? (
          <>
            <p>
              Telefon:{" "}
              <a href={`tel:${data.kontakt.phoneNumber}`}>
                {" "}
                (+48)<strong> {data.kontakt.phoneNumber}</strong>
              </a>
            </p>
            <p>Jastrzębia</p>
            <p>33-191</p>
            <p>woj. małopolskie</p>
            <p>{data.kontakt.openingHours}</p>
            <p>
              e-mail:{" "}
              <a href={`mailto:${data.kontakt.email}`}>
              {data.kontakt.email}
              </a>
            </p>
          </>
        ) : (
          <>
            <p>
              Telefon:{" "}
              <a href="tel:888901395">
                {" "}
                (+48)<strong> 888 901 395</strong>
              </a>
            </p>
            <p>Jastrzębia</p>
            <p>33-191</p>
            <p>woj. małopolskie</p>
            <p>Pn. - Pt. 7:00 - 18:00</p>
            <p>
              e-mail:{" "}
              <a href="mailto:waldemarbiskup@interia.pl">
                waldemarbiskup@interia.pl
              </a>
            </p>
          </>
        )}
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
