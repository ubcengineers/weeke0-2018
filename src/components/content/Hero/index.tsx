import * as React from 'react';
import { StyledLogo, StyledWrapper } from './styled';

interface IProps {
    logo?: string;
    title?: string;
    size?: 'full' | 'mid';
}

export default (props: IProps) => {
    return (
        <StyledWrapper id='home' style={{
            height: props.size === 'full' ? 'calc(100vh - 64px)' : '50vw',
            maxHeight: props.size === 'full' ? '' : '50vh',
        }}>
            {props.title !== undefined ?
                <h1>{props.title}</h1>
            :
                <StyledLogo src={props.logo} />
            }
        </StyledWrapper>
    );
}