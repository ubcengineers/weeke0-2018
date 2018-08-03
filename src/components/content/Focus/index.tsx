import * as React from 'react';
import {
    StyledItem,
    StyledWrapper,
} from './styled';

interface IProps {
    items: Array<{
        title: string;
        subtitle: string;
    }>
}

export default (props: IProps) => {
    return (
        <StyledWrapper>
            {props.items.map((element) => (
                <StyledItem>
                    <h3>{element.title}</h3>
                    <p>{element.subtitle}</p>
                </StyledItem>
            ))}
        </StyledWrapper>
    );
}