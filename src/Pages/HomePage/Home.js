import React from 'react';
import { homeObjOne } from './Data';
import InfoSection from '../../Components/InfoSection/InfoSection';

const Home = () => {
  return (
    <React.Fragment>
      <InfoSection {...homeObjOne} />
    </React.Fragment>
  );
};

export default Home;
