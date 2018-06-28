import React from 'react';
import { StyledWrapper, StyledContent, StyledVideo, StyledFooter } from './styled';
import { Parallax } from 'react-scroll-parallax';
import Funky from '../funky';

import funky2 from '../../assets/funky-bg-2.svg';

class Hero extends React.Component {

    constructor() {
        super();
    }

    render = () => (
        <StyledWrapper>
            <StyledFooter>
                <Funky funky={funky2} background="transparent" />
            </StyledFooter>
            <div />
            <StyledContent>
                <Parallax
                    offsetYMax={20}
                    offsetYMin={-20}
                    slowerScrollRate
                    tag="bg" >
                        <StyledVideo>
                            <iframe id="ytplayer" type="text/html" width="720" height="405"
                                src="https://www.youtube.com/embed/U0NT7_L5my4?controls=0&fs=0&modestbranding=1&rel=0&showinfo=0" />
                        </StyledVideo>
                </Parallax>
            </StyledContent>
            <div />
        </StyledWrapper>
    )
}

export default Hero;