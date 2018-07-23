import * as React from 'react';
import { StyledContent, StyledWrapper } from './styled';

import './color.css';

interface IProps {
    color: 'white' | 'blue';
    children: React.ReactNode;
    border?: string;
}

export default (props: IProps) => {
    return (
        <StyledWrapper className={props.color}>
            <StyledContent>
                    {props.children}
            </StyledContent>
        </StyledWrapper>
    )
}