import * as styled from 'styled-components';

import funky4 from '../../assets/funky-bg-4.svg';

export const StyledWrapper = styled.default.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr minmax(auto, 760px) 1fr;
    background: #2F2F6F;
    padding: 64px 0;
`;

export const StyledContent = styled.default.div`
    display: flex;
    flex-flow: column wrap;
    padding: 0 32px;
    margin-top: -1px;
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
    margin-bottom: 300px;
`

export const StyledFooter = styled.default.div`
    width: 100%
    height: 300px;
    position: absolute;
    bottom: 0;
    background: url(${funky4}) no-repeat;
    background-size: 100% 100%;
    background-position: center bottom;
`
