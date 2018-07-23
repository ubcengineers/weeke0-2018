import styled from 'styled-components';

export const StyledWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 64px;
    background:  #2F2F6F;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`

export const StyledNavItem = styled.a`
    margin: 8px 16px;
    font-family: 'Fjalla One', sans-serif;
    text-transform: uppercase;
    color: white;
    text-decoration: none;
    opacity: 0.6;
    transition: all .2s;

    &:hover {
        opacity: 1;
    }
`

export const StyledLogo = styled.img`
    height: 32px;
    margin: 8px 32px;
`