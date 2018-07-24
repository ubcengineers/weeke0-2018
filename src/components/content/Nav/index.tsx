import * as React from 'react';
import Scrollchor from 'react-scrollchor';

import { 
    StyledClose, 
    StyledNavItem, 
    StyledNavOverlay,
    StyledNavOverlayItem,
    StyledOpen, 
    StyledWrapper,
} from './styled';

interface IProps {
    full: boolean;
    left: string;
    right: string;
    navItems: Array<{
        title: string;
        link: string;
    }>;
}

export default class Nav extends React.Component<IProps> {

    public state = {
        hash: location.hash,
        open: false,
        width: window.innerWidth,
    }

    public componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    
    public componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    public handleResize = () => {
        this.setState({width: window.innerWidth});
    }

    public handleOpen = () => {
        this.setState({open: true});
    }

    public handleClose = () => {
        this.setState({open: false});
    }

    public render() {
        if(this.state.width < 760) {
            return (
                <>
                <StyledWrapper style={{background: this.props.full ? 'transparent' : '#2F2F6F'}}>
                    <StyledOpen className='fas fa-bars' onClick={this.handleOpen}/>
                </StyledWrapper>
                {this.state.open ?
                    <StyledNavOverlay>
                        {this.props.navItems.map((element) => {
                            return (
                                <Scrollchor key={element.title} to={element.link} target='scroll'>
                                <StyledNavOverlayItem
                                    onClick={this.handleClose}
                                >
                                        {element.title}
                                </StyledNavOverlayItem>
                                </Scrollchor>
                            );
                        })}
                        <StyledClose className='fas fa-times' onClick={this.handleClose}/>
                    </StyledNavOverlay>
                    : null
                }
                </>
            )
        } else {
            return (
                <StyledWrapper style={{background: this.props.full ? 'transparent' : '#2F2F6F' }}>
                    <StyledNavItem style={{lineHeight: '48px', verticalAlign: 'middle'}}>
                        {this.props.left}
                    </StyledNavItem>
                    <div style={{lineHeight: '48px', verticalAlign: 'middle', textAlign: 'center'}}>
                    {this.props.navItems.map((element) => {
                        return (
                            
                            <Scrollchor key={element.title} to={element.link} target='scroll'>
                                <StyledNavItem
                                >
                                    {element.title}
                                </StyledNavItem>
                            </Scrollchor>
                        );
                    })}
                    </div>
                    <StyledNavItem style={{lineHeight: '48px', verticalAlign: 'middle', textAlign: 'right'}}>
                        {this.props.right}
                    </StyledNavItem>
                </StyledWrapper>
            )
        }
    }
}
