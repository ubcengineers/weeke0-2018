import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr minmax(auto, 820px) 1fr;
    padding: 64px 0px;
`;

export const StyledContent = styled.div`
    grid-column-start: 2;
    grid-column-end: span 1;
    padding: 0 32px;
`