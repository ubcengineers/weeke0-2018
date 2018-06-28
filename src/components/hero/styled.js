import * as styled from 'styled-components';

import funky2 from '../../assets/funky-bg-2.svg';

export const StyledWrapper = styled.default.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr minmax(auto, 960px) 1fr;
    background: #2F2F6F;
    padding: 64px 0;
    margin-top: -1px;
`;

export const StyledContent = styled.default.div`
    display: flex;
    flex-flow: column wrap;
    padding: 64px 32px;
`;

export const StyledFooter = styled.default.div`
    position: absolute;
    width: 100%
    height: 300px;
    bottom: 0;
    background: url(${funky2}) no-repeat;
    background-size: 100% 100%;
    background-position: center bottom;
`

export const StyledVideo = styled.default.div`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
    box-shadow: rgba(0,0,0,0.2) 0 0 8px;

    & iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
    }
`