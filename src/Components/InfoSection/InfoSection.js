import React from 'react';
import { Container } from '../../@Styles/common';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
} from './InfoSectionElements';

const InfoSection = ({ lightBg, imgStart }) => {
  return (
    <React.Fragment>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>h</TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </React.Fragment>
  );
};

export default InfoSection;
