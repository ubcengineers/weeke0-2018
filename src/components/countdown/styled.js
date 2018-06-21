import * as styled from 'styled-components';

export const StyledWrapper = styled.default.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 30%;
    min-width: 256px;
    height: 92px;
    border-radius: 16px;
    box-shadow: rgba(0,0,0,0.2) 0 0 4px;
    background: #FFFFFF;
`;

export const StyledRow = styled.default.div`
    margin: 8px;
    color: #2F2F6F;
    flex-basis: 0;
    font-family: "Fjalla One", sans-serif;
`

export const StyledDigit = styled.default.div`
    font-family: "Fjalla One", sans-serif;
    font-size: 2em;
    color: #2F2F6F;
    margin-bottom: 4px;
    text-align: center;
`

export const StyledCaption = styled.default.div`
    font-size: 0.8em;
    text-align: center;
    text-transform: lowercase;
`