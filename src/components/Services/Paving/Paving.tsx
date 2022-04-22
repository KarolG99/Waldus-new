import React from 'react';
import { Section } from './Paving.styles';
import PavingIcon from '../../../assets/icons/pavingIcon.svg';

const Paving = () => {
  const pavingIcon = PavingIcon;
  return (
    <Section>
      <div className="sect-text">
        <h2>Kostka Brukowa</h2>
        <hr />
        <p>Kompleksowe usługi układania różnego rodzaju kostki wraz z przygotowaniem terenu.</p>
      </div>

      <img src={pavingIcon} alt="ikonka kostki na taczkach" />
    </Section>
  );
};

export default Paving;
