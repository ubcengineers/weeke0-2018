import React from 'react';
import { StyledWrapper, StyledContent, StyledFeature, StyledMain } from './styled';

class About extends React.Component {

    constructor() {
        super();
    }

    render = () => (
        <StyledWrapper>
            <div />
            <StyledContent>
                <StyledFeature>
                    The best way to kickstart your first year at UBC.
                </StyledFeature>
                <StyledMain>
                    <p>
                        Week E<sup>0</sup> is the second best week of the year*. It’s our grand opening bash, so start off your year right by hanging out with your fellow first years for the
                        first week full of back-to-back activities. The second week will be a little less crazy, but don’t miss the info session for E-Retreat or the chance to meet upper years. 
                        Also don’t forget to come to BBQs and pancake breakfasts to meet faculty, student teams and clubs! Make friends, do something crazy, and have a lot of fun.
                    </p>
                    <p>
                        <small>* after <a href="https://www.facebook.com/UBCEngineers/videos/762594977229597/">E-Week</a> of course.</small>
                    </p>
                </StyledMain>
            </StyledContent>
            <div />
        </StyledWrapper>
    )
}

export default About;