import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 48px 48px repeat(28, minmax(8px,min-content));
    grid-gap: 4px;
    font-family: 'Fjalla One', sans-serif;
    margin-top: 64px;
`

export const StyledDay = styled.div`
    font-size: 1em;
    color: white;
    text-align: center;
    text-transform: uppercase;
`

export const StyledEvent = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background: white;
    padding: 8px 2px;
    border-radius: 4px;
    box-shadow: rgba(0,0,0,0.4) 0 0 8px;
    color: #E51E25;
    text-align: center;
    cursor: pointer;

    &:hover {
        background: #FAFAFA;
    }
`

export const StyledSubtitle = styled.div`
    font-size: 0.7em;
    margin-top: 4px;
`

export const StyledTitle = styled.div`
    font-size: 1em;
    margin-top: 4px;
`

export const StyledMuted = styled(StyledEvent)`
    background: rgba(255,255,255,0.2);
    box-shadow: none;
    color: white;
    cursor: initial;

    &:hover {
        background: rgba(255,255,255,0.2);
    }
`