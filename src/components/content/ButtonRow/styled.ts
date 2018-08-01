import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 100%;
    display: grid;
    margin-top: 64px;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(min-content, 400px));
    justify-content: center;
`;

export const StyledButtonCard = styled.div`
    padding: 32px;
    background: white;
    text-orientation: center;
    border-radius: 16px;
    box-shadow: rgba(0,0,0,0.4) 0 0 16px;
    overflow: hidden;
    font-size: 1.8em;
    white-space: nowrap;
    text-align: center;
    font-family: 'Fjalla One', sans-serif;
    cursor: pointer;
    transition: all .2s;

    &:hover {
        background: #FAFAFA;
    }
`

export const StyledLink = styled(Link)`
    color: #E51E25;
    text-decoration: none;
`

export const StyledLinkA = styled.a`
    color: #E51E25;
    text-decoration: none;
`

export const StyledIcon = styled.i`
    margin: 0 16px 0 0;
`