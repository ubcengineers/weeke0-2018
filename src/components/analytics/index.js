import * as React from 'react';
import ReactGA from 'react-ga';

export default class Analytics extends React.Component {
    componentDidMount() {          
        ReactGA.initialize('UA-43687615-2');
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return null;
    }
}