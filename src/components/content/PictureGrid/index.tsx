import * as React from 'react';
import {
    StyledPicture,
    StyledWrapper,
} from './styled';

interface IProps {
    images: string[];
}

export default (props: IProps) => {
    return (
        <StyledWrapper>
            {props.images.map((element) => (
                <StyledPicture src={element} />
            ))}
        </StyledWrapper>
    )
}