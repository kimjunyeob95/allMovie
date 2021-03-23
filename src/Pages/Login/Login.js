import React from 'react';
import { homeObjThree } from './Data';
import InfoSection from '../../Components/InfoSection/InfoSection';

const Login = () => {
  return (
    <React.Fragment>
      <InfoSection {...homeObjThree} />
    </React.Fragment>
  );
};

export default Login;
