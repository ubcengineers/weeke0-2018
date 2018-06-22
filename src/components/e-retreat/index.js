import React from 'react';
import { StyledWrapper, StyledContent, StyledFeature, StyledMain, StyledFooter } from './styled';

class ERetreat extends React.Component {

    constructor() {
        super();
    }

    render = () => (
        <StyledWrapper>
            <div />
            <StyledContent>
                <StyledFeature>
                    E-Retreat: a fun-dense weekend with your new pals
                </StyledFeature>
                <StyledMain>
                    <p>
                    At the end of two weeks of fun on-campus, we go on retreat! 
                    Probably the best part of being a first year —seriously. 2-days-2-nights of students-only fun. 
                    Do what you want, or participate in organized events!
                    </p>
                    <p>
                    Come with an open mind and it’ll be the experience of a lifetime. Bond with new friends, 
                    hear stories from the older students (there as volunteers), 
                    and learn more about how to get involved. E^0 Retreat 2018 will be located 
                    at a huge summer camp with a beach for swimming!
                    </p>
                </StyledMain>
            </StyledContent>
            <div />
            <StyledFooter />
        </StyledWrapper>
    )
}

export default ERetreat;