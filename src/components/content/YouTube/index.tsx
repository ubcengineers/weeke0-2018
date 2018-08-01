import * as React from 'react';
import { StyledEmbeded, StyledWrapper } from './styled';

interface IProps {
    src: string;
}

export default (props: IProps) => {
    return (
        <StyledWrapper>
            <StyledEmbeded 
                src={props.src}
            />

        </StyledWrapper>
    )
}