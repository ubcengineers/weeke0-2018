import * as React from 'react';
import { StyledLogo, StyledNavItem, StyledWrapper } from './styled';

interface IProps {
    logo: string;
    navItems: Array<{
        title: string;
        link: string;
    }>;
}

export default (props: IProps) => {
    return (
        <StyledWrapper>
            {props.navItems.map((element, index) => {
                if(index === props.navItems.length / 2) {
                    return (
                        <>
                        <StyledLogo src={props.logo} />
                        <StyledNavItem key={element.title} href={element.link}>
                            {element.title}
                        </StyledNavItem>
                        </>
                    )
                } else {
                    return (
                        <StyledNavItem key={element.title} href={element.link}>
                            {element.title}
                        </StyledNavItem>
                    );
                }
            })}
        </StyledWrapper>
    )
}