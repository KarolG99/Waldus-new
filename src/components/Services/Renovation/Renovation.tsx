import React from 'react';
import { Section } from '../Paving/Paving.styles';
import renovationIcon from '../../../assets/icons/renovationIcon.svg';
import { Reverse } from './Renovation.styles';

const Renovation = () => {
  const renovIcon = renovationIcon;
  return (
    <Section>
      <Reverse className="sect-text">
        <h2>Remonty i wykończenia</h2>
        <hr />
        <p>Łazienki, sufity podwieszane, szpachlowania, gładzie, malowania, małe przeróbki hydrauliczne, prądy i inne.</p>
      </Reverse>

      <img src={renovIcon} alt="ikonka remontu" />
    </Section>
  );
};

export default Renovation;
