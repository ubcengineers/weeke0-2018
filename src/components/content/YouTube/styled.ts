import styled from 'styled-components';

export const StyledWrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    box-shadow: rgba(0,0,0,0.4) 0 0 16px;
    border-radius: 16px;
    margin-top: 64px;
`;

export const StyledEmbeded = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
` as any;