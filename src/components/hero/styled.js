import * as styled from 'styled-components';

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
    bottom: 0;
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