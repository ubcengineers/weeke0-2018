import React from 'react';
import { StyledWrapper, StyledRow, StyledLogo, StyledHeader, StyledBackground, StyledFooter } from './styled';
import Countdown from '../countdown';

import logo from '../../assets/weeke0-logo.svg';

class Hero extends React.Component {

    constructor() {
        super();
    }

    render = () => (
        <React.Fragment>
        <StyledBackground />
        <StyledWrapper>
            <StyledHeader>
                <StyledLogo src={logo} />
            </StyledHeader>
            <StyledRow>
            </StyledRow>
            <StyledFooter>
                <Countdown endTime={1536073200000}/>
            </StyledFooter>
        </StyledWrapper>
        </React.Fragment>
    )
}

export default Hero