import React from 'react';
import { StyledWrapper, StyledRow, StyledLogo, StyledEUSLogo, StyledFunky, StyledRowAppearDelayed } from './styled';
import Countdown from '../countdown';

import logo from '../../assets/weeke0-logo.svg';

class Hero extends React.Component {

    constructor() {
        super();
        this.titleRef = React.createRef();
    }

    render = () => (
        <StyledWrapper>
            <StyledFunky />
            <StyledRowAppearDelayed>
                <StyledEUSLogo />
            </StyledRowAppearDelayed>
            <StyledRow>
                <StyledLogo src={logo} />
            </StyledRow>
            <StyledRowAppearDelayed>
                    <Countdown endTime={1536073200000}/>
            </StyledRowAppearDelayed>
        </StyledWrapper>
    )
}

export default Hero