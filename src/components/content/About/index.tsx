import * as React from 'react';
import { StyledContent, StyledWrapper } from './styled';

import './color.css';

interface IProps {
    anchor: string;
    color: 'white' | 'blue' | 'red';
    children: React.ReactNode;
    border?: string;
}

export default (props: IProps) => {
    return (
        <StyledWrapper id={props.anchor} className={props.color}>
            <StyledContent>
                    {props.children}
            </StyledContent>
        </StyledWrapper>
    )
}