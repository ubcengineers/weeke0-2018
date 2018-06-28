import * as styled from 'styled-components';

export const StyledWrapper = styled.default.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 128px;
    z-index: 1000;
`;

export const StyledLogo = styled.default.img`
    height: 50%;
    margin: 0 32px;
`;

export const StyledNavItem = styled.default.a`
    font-family: Fjalla One, sans-serif;
    font-size: 1em;
    color: white;
    margin: 0 16px;
`;