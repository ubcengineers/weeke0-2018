import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    border-radius: 8px;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
    box-shadow: rgba(0,0,0,0.4) 0 0 16px;
    background: white;
    margin-top: 64px;
`

export const StyledItem = styled.div`
    color: #E51E25;
    text-align: center;
    flex: 1 0 0;
    margin: 16px 16px;
    min-width: 100px;

    & * {
        margin: 8px 0;
        line-height: 1.2;
    }
`