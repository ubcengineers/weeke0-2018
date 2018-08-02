import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    align-items: stretch;
    grid-gap: 16px;
    margin-top: 64px;
`

export const StyledPicture = styled.img`
    max-width: 100%;
    border-radius: 16px;
    box-shadow: rgba(0,0,0,0.4) 0 0 16px;
`