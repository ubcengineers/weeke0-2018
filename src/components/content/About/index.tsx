import * as React from "react";
import { StyledContent, StyledWrapper } from "./styled";

import "./color.css";

interface IProps {
  color: "white" | "blue" | "red";
  children: React.ReactNode;
}

export default (props: IProps) => {
  return (
    <StyledWrapper className={props.color}>
      <StyledContent>{props.children}</StyledContent>
    </StyledWrapper>
  );
};
