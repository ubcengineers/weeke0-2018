import * as React from "react";
import { withRouter } from "react-router";

import {
  StyledClose,
  StyledNavItem,
  StyledNavOverlay,
  StyledNavOverlayItem,
  StyledOpen,
  StyledWrapper
} from "./styled";

interface IProps {
  full: boolean;
  left: string;
  right: string;
  navItems: Array<{
    title: JSX.Element | string;
    link: string;
  }>;
  history: History;
  location: Location;
}

class Nav extends React.Component<IProps> {
  public state = {
    hash: location.hash,
    open: false,
    width: window.innerWidth
  };

  public componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  public handleResize = () => {
    this.setState({ width: window.innerWidth });
  };

  public handleOpen = () => {
    this.setState({ open: true });
  };

  public handleClose = () => {
    this.setState({ open: false });
  };

  public render() {
    if (this.state.width < 760) {
      return (
        <>
          <StyledWrapper
            style={{ background: this.props.full ? "white" : "transparent" }}
          >
            <StyledOpen className="fas fa-bars" onClick={this.handleOpen} />
          </StyledWrapper>
          {this.state.open ? (
            <StyledNavOverlay>
              {this.props.navItems.map(element => {
                return (
                  <StyledNavOverlayItem
                    key={element.title.toString()}
                    to={element.link}
                    onClick={this.handleClose}
                    activeStyle={{
                      color: "#40AB3D"
                    }}
                    exact={true}
                  >
                    {element.title}
                  </StyledNavOverlayItem>
                );
              })}
              <StyledClose
                className="fas fa-times"
                onClick={this.handleClose}
              />
            </StyledNavOverlay>
          ) : null}
        </>
      );
    } else {
      return (
        <StyledWrapper
          style={{ background: this.props.full ? "white" : "transparent" }}
        >
          <StyledNavItem
            style={{ lineHeight: "48px", verticalAlign: "middle" }}
            to="#"
          >
            {this.props.left}
          </StyledNavItem>
          <div
            style={{
              lineHeight: "48px",
              verticalAlign: "middle",
              textAlign: "center"
            }}
          >
            {this.props.navItems.map(element => {
              return (
                <StyledNavItem
                  key={element.title.toString()}
                  to={element.link}
                  activeStyle={{
                    color: "#40AB3D"
                  }}
                  exact={true}
                >
                  {element.title}
                </StyledNavItem>
              );
            })}
          </div>
          <StyledNavItem
            style={{
              lineHeight: "48px",
              verticalAlign: "middle",
              textAlign: "right"
            }}
            to="#"
          >
            {this.props.right}
          </StyledNavItem>
        </StyledWrapper>
      );
    }
  }
}

export default withRouter((props: any) => <Nav {...props} />);
