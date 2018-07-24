import * as React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
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
        <ScrollableAnchor id={props.anchor}>
            <StyledWrapper className={props.color}>
                <StyledContent>
                        {props.children}
                </StyledContent>
            </StyledWrapper>
        </ScrollableAnchor>
    )
}