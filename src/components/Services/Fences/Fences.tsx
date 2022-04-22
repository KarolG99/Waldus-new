import React from 'react';
import { Section } from '../Paving/Paving.styles';
import fencesIcon from '../../../assets/icons/fencesIcon.svg';

const Fences = () => {
  const fenceIcon = fencesIcon;
  return (
    <Section>
      <div className="sect-text">
        <h2>Ogrodzenia</h2>
        <hr />
        <p>Ogrodzenia z pustaków firmy joniec i inne.</p>
      </div>

      <img src={fenceIcon} alt="ikonka ogrodzenia" />
    </Section>
  );
};

export default Fences;
