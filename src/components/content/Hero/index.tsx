import * as React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { StyledLogo, StyledWrapper } from './styled';

interface IProps {
    logo: string;
}

export default (props: IProps) => {
    return (
        <ScrollableAnchor id='home'>
            <StyledWrapper>
                <StyledLogo src={props.logo} />
            </StyledWrapper>
        </ScrollableAnchor>
    );
}