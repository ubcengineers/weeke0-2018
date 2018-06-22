import * as styled from 'styled-components';

export const StyledWrapper = styled.default.div`
    display: grid;
    grid-template-columns: 1fr minmax(auto, 760px) 1fr;
    background: #E51E25;
    padding: 64px 0;
    margin-top: -1px;
`;

export const StyledContent = styled.default.div`
    display: flex;
    flex-flow: column wrap;
    padding: 0 32px;
`;

export const StyledFeature = styled.default.div`
    min-width: 300px
    font-size: 2em;
    color: #FFFFFF;
    font-family: "Coustard", serif;
    margin: 8px;
    flex-grow: 1;
`

export const StyledMain = styled.default.div`
    font-size: 1em;
    color: #FFFFFF;
    font-family: "Nunito", serif;
    margin: 8px;
    flex-grow: 1;
`

export const StyledTextInput = styled.default.input`
    width: 100%
    font-size: 1em;
    color: #000000;
    outline: 0;
    font-family: "Nunito", serif;
    padding: 16px;
    background: #FFFFFF;
    border: none;
    border-radius: 8px;
    box-shadow: rgba(0,0,0,0.2) 0 0 8px;
`

export const StyledSubmit = styled.default.button`
    font-size: 1em;
    color: #000000;
    outline: 0;
    font-family: "Nunito", serif;
    margin-top: 8px;
    padding: 8px 16px;
    background: #FFFFFF;
    border: none;
    border-radius: 8px;
    transition: all .2s;
    box-shadow: rgba(0,0,0,0.2) 0 0 8px;
    cursor: pointer;

    &:hover {
        background: #EFEFEF;
    }

    &:active {
        background: #FF9F9F;
    }
`

