import * as React from 'react';
import { StyledWrapper, StyledLogo, StyledNavItem } from './styled';

import logo from '../../assets/weeke0-logo.svg';

export default class Header extends React.Component {
    render() {
        return (
            <StyledWrapper>
                <StyledLogo src={logo} />
            </StyledWrapper>

        )
    }
}