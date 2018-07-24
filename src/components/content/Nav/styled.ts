import styled from 'styled-components';

export const StyledWrapper = styled.div`
    position: fixed;
    width: 100%;
    background: #2F2F6F;
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

export const StyledNavOverlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #2F2F6F;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

export const StyledNavOverlayItem = styled.a`
    margin: 16px 16px;
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

export const StyledOpen = styled.i`
    position: fixed;
    top: 8px;
    left: 16px;
    width: 16px;
    height: 16px;
    line-height: 48px;
    vertical-align: middle;
    color: white;
    opacity: 0.6;
    transition: all .2s;

    &:hover {
        opacity: 1;
    }
`

export const StyledClose = styled.i`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 16px;
    height: 16px;
    color: white;
    opacity: 0.6;
    transition: all .2s;

    &:hover {
        opacity: 1;
    }
`