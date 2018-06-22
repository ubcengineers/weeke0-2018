import React from 'react';
import { StyledWrapper, StyledRow, StyledLogo, StyledHeader, StyledBackground, StyledFooter } from './styled';
import Countdown from '../countdown';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

import logo from '../../assets/weeke0-logo.svg';
import bg from '../../assets/bg.jpg';

class Hero extends React.Component {

    constructor() {
        super();
    }

    render = () => (
        <ParallaxBanner
            layers={[
                {
                    image: bg,
                    amount: 0.3,
                    slowerScrollRate: true,
                }
            ]}
            style={{
                height: '100vh',
            }} >
            <StyledWrapper>
                <StyledHeader>
                    <StyledLogo src={logo} />
                </StyledHeader>
                <StyledRow>
                </StyledRow>
                <StyledFooter>
                    <Parallax
                        offsetYMax={20}
                        offsetYMin={-20}
                        slowerScrollRate
                        styleOuter={{zIndex: '1'}} >
                        <Countdown endTime={1536073200000}/>
                    </Parallax>
                </StyledFooter>
            </StyledWrapper>
        </ParallaxBanner>
    )
}

export default Hero