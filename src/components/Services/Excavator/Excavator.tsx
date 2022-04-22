import React from 'react';
import { Section } from '../Paving/Paving.styles';
import excavatorIcon from '../../../assets/icons/diggerIcon.svg';
import { Reverse } from '../Renovation/Renovation.styles';

const Excavator = () => {
  const excavIcon = excavatorIcon;
  return (
    <Section>
      <Reverse className="sect-text">
        <h2>Mini koparka</h2>
        <hr />
        <p>Oferujemy także usługi minikoparką do przygotowania terenu pod kostkę, ogrodzenia i nie tylko.</p>
      </Reverse>

      <img src={excavIcon} alt="ikonka koparki" />
    </Section>
  );
};

export default Excavator;
