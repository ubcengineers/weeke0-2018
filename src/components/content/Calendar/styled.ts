import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  display: -ms-grid;
  grid-template-rows: 48px repeat(28, minmax(8px, min-content));
  -ms-grid-rows: 48px repeat(28, minmax(8px, min-content));
  grid-gap: 4px;
  -ms-grid-gap: 4px;
  font-family: "Roboto", sans-serif;
  margin-top: 64px;
`;

export const StyledModal = styled.div`
  width: 30vw;
  min-width: 400px;
  height: 80vh;
  background: white;
  border-radius: 16px;
  z-index: 1000;
`;

export const StyledModalBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const StyledDay = styled.div`
  font-size: 1em;
  color: white;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledEvent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: #00a0e3;
  padding: 8px 2px;
  border-radius: 4px;
  color: white;
  text-align: center;
`;

export const StyledSubtitle = styled.div`
  font-size: 0.7em;
  margin-top: 4px;
`;

export const StyledTitle = styled.div`
  font-size: 1em;
  margin-top: 4px;
`;

export const StyledMuted = styled(StyledEvent)`
  background: #eaeaea;
  box-shadow: none;
  color: #333;
`;
