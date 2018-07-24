import * as React from 'react';
import { StyledNavItem, StyledWrapper } from './styled';

interface IProps {
    left: string;
    right: string;
    navItems: Array<{
        title: string;
        link: string;
    }>;
}

export default (props: IProps) => {
    return (
        <StyledWrapper>
            <StyledNavItem style={{lineHeight: '48px', verticalAlign: 'middle'}}>
                {props.left}
            </StyledNavItem>
            <div style={{lineHeight: '48px', verticalAlign: 'middle', textAlign: 'center'}}>
            {props.navItems.map((element, index) => {
                return (
                    <StyledNavItem key={element.title} href={element.link}>
                        {element.title}
                    </StyledNavItem>
                );
            })}
            </div>
            <StyledNavItem style={{lineHeight: '48px', verticalAlign: 'middle', textAlign: 'right'}}>
                {props.right}
            </StyledNavItem>
        </StyledWrapper>
    )
}