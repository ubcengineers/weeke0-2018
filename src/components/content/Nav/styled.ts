import styled from 'styled-components';

export const StyledWrapper = styled.div`
    position: fixed;
    width: 100%;
    background:  #2F2F6F;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 64px;
`

export const StyledNavItem = styled.a`
    display: inline-block;
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