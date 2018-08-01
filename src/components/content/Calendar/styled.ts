import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 100%;
    height: 550px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 48px 48px repeat(28, 1fr);
    grid-gap: 4px;
    font-family: 'Fjalla One', sans-serif;
`

export const StyledDay = styled.div`
    font-size: 1em;
    color: white;
    text-align: center;
    text-transform: uppercase;
`

export const StyledEvent = styled.div`
    display: flex;
    font-size: 0.8em;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 4px;
    box-shadow: rgba(0,0,0,0.4) 0 0 8px;
    color: #E51E25;
    text-align: center;
    cursor: pointer;

    &:hover {
        background: #FAFAFA;
    }
`
