import * as React from 'react';
import { StyledButtonCard, StyledIcon, StyledLink, StyledLinkA, StyledWrapper } from './styled';

interface IProps {
    buttons: Array<{
        title: string;
        logo: string;
        link: string;
    }>;
}

export default (props: IProps) => {
    return (
        <StyledWrapper>
            {props.buttons.map((element) => (
                <>
                {element.link.substr(0, 4) === 'http' ?
                    <StyledLinkA key={element.title} href={element.link}>
                        <StyledButtonCard>
                            <StyledIcon className={element.logo} />
                            {element.title}
                        </StyledButtonCard>
                    </StyledLinkA>
                    :
                    <StyledLink key={element.title} to={element.link}>
                        <StyledButtonCard>
                            <StyledIcon className={element.logo} />
                            {element.title}
                        </StyledButtonCard>
                    </StyledLink>
                }
                </>
            ))} 
        </StyledWrapper>
    )
}