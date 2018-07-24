import * as React from 'react';
import { StyledLogo, StyledWrapper } from './styled';

interface IProps {
    logo: string;
}

export default (props: IProps) => {
    return (
        <StyledWrapper>
            <StyledLogo src={props.logo} />
        </StyledWrapper>
    );
}