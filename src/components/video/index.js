import React from 'react';
import { StyledWrapper, StyledContent, StyledVideoFrame, StyledVideo, StyledHeader } from './styled';

class Video extends React.Component {

    constructor() {
        super();
    }

    render = () => (
        <StyledWrapper>
            <StyledHeader />
            <div />
            <StyledContent>
                <StyledVideoFrame>
                    <StyledVideo>
                        <iframe id="ytplayer" type="text/html" width="720" height="405"
                            src="https://www.youtube.com/embed/U0NT7_L5my4?controls=0&fs=0&modestbranding=1&rel=0&showinfo=0" />
                    </StyledVideo>
                </StyledVideoFrame>
            </StyledContent>
            <div />
        </StyledWrapper>
    )
}

export default Video;