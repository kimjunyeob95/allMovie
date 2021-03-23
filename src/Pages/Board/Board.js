import React from 'react';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';
import InfoSection from '../../Components/InfoSection/InfoSection';

const Board = () => {
  return (
    <React.Fragment>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </React.Fragment>
  );
};

export default Board;
