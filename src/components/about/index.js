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
                        Week E<sup>0</sup> is the second best week of the year*. Excited for September? Just wait til you see what the EUS has in store for you. 
                        BBQs, movie nights, pancake breakfasts, and some crazy traditions to be a part of! It’s our grand opening bash, so start off 
                        your year right by hanging out with your fellow first years for the first week full of back-to-back activities. The second 
                        week will be a little less busy, especially since classes will be in full swing, but don’t miss the info session for E-Retreat or the chance to interact with UBC’s various 
                        engineering student teams and clubs. We hope to see you around!
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
