import * as React from 'react';
import * as styled from 'styled-components';

class Funky extends React.Component {
    render() {
        const Funky = styled.default.img`
        width: 100vw;
        height: 300px;
        background-color: ${this.props.background};
        margin: -4px 0;`
        return (
            <Funky src={this.props.funky}/>
        )
    }
}

export default Funky;