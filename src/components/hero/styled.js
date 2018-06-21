import * as styled from 'styled-components';

import funky from '../../assets/funky-bg.svg';
import eus from '../../assets/eus-logo.png';

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
    grid-template-rows: 1fr 1fr 1fr;
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

export const StyledFunky = styled.default.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: url(${funky}) no-repeat;
    background-size: auto 100%;
    background-position: center center;
`

export const StyledEUSLogo = styled.default.div`
    width: 10%;
    min-width: 70px;
    height: 100%;
    background: url(${eus}) no-repeat;
    background-position: center center;
    background-size: 100% auto;
    margin-top: 10%;
`;

export const StyledRowAppearDelayed = StyledRow.extend`
    opacity: 0;
    animation: ${appear} 1s 2s ease-out;
    animation-fill-mode: both;
`;

export const StyledLogo = styled.default.img`
    width: 70%;
    -webkit-filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.2));
    filter: drop-shadow(0px 0px 4px rgba(0,0,0,0.2));
    animation: ${appear} 1s ease-out;
`;