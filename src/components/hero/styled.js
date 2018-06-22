import * as styled from 'styled-components';

import funky1 from '../../assets/funky-bg-1.svg';
import funky2 from '../../assets/funky-bg-2.svg';
import bg from '../../assets/bg.jpg';

const appear = styled.keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;


export const StyledWrapper = styled.default.div`
    position: relative;
    display: grid;
    grid-template-rows: 300px 1fr 200px;
    width: 100%;
    height: 100vh;
    min-height: 400px;
`;

export const StyledRow = styled.default.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

export const StyledHeader = StyledRow.extend`
    background: url(${funky1}) no-repeat;
    background-size: 100% 100%;
`

export const StyledFooter = StyledRow.extend`
    background: url(${funky2}) no-repeat;
    background-size: 100% 100%;
    background-position: center bottom;
`

export const StyledLogo = styled.default.img`
    width: 30%;
    min-width: 250px;
    -webkit-filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.2));
    filter: drop-shadow(0px 0px 4px rgba(0,0,0,0.2));
    animation: ${appear} 1s ease-out;
`;

export const StyledBackground = styled.default.div`
    position: absolute;
    width: 100vw
    height: 100vh;
    background: url(${bg}) no-repeat;
    background-size: cover;
    background-position: center center;
    z-index: -1;
`;


