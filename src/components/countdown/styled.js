import * as styled from 'styled-components';

export const StyledWrapper = styled.default.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    border-radius: 16px;
    box-shadow: rgba(0,0,0,0.2) 0 0 8px;
    background: #FFFFFF;
`;

export const StyledRow = styled.default.div`
    margin: 8px;
    color: #2F2F6F;
    width: 3em;
    font-family: "Fjalla One", sans-serif;
`

export const StyledDigit = styled.default.div`
    font-family: "Fjalla One", sans-serif;
    font-size: 2.5em;
    color: #2F2F6F;
    margin-bottom: 4px;
    text-align: center;
`

export const StyledCaption = styled.default.div`
    font-size: 0.8em;
    text-align: center;
    text-transform: lowercase;
`