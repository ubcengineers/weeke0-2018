import * as styled from 'styled-components';

import funky3 from '../../assets/funky-bg-3.svg';

export const StyledWrapper = styled.default.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr minmax(auto, 760px) 1fr;
    background: #2F2F6F;
    padding: 64px 0;
    margin-top: -1px;
`;

export const StyledContent = styled.default.div`
    display: flex;
    flex-flow: column wrap;
    padding: 0 32px;
`;

export const StyledHeader = styled.default.div`
    position: absolute;
    width: 100%
    height: 300px;
    background: url(${funky3}) no-repeat;
    background-size: 100% 100%;
`

export const StyledVideoFrame = styled.default.div`
    padding: 16px;
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: rgba(0,0,0,0.2) 0 0 8px;
    z-index: 1;
`

export const StyledVideo = styled.default.div`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;

    & iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
    }
`