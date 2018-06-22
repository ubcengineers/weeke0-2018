import * as styled from 'styled-components';

export const StyledWrapper = styled.default.div
`
    display: grid;
    grid-template-columns: 1fr minmax(auto, 760px) 1fr;
    background: #FFFFFF;
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
    color: #E51E25;
    font-family: "Coustard", serif;
    margin: 8px;
    flex-grow: 1;
`

export const StyledMain = styled.default.div`
    font-size: 1em;
    color: #000000;
    font-family: "Nunito", serif;
    margin: 8px;
    flex-grow: 1;
`
