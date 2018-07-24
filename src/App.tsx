import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';

import About from './components/content/About';
import Border from './components/content/Border';
import Hero from './components/content/Hero';
import Nav from './components/content/Nav';
import Contact from './components/form/Contact';

import border1 from './assets/border1.svg';
import border2 from './assets/border2.svg';
import border3 from './assets/border3.svg';
import logo from './assets/logo.svg';

import AboutContent from './markdown/about.md';
import ERetreatContent from './markdown/e-retreat.md';
import ScheduleContent from './markdown/schedule.md';

export default class App extends React.Component {

  public state = {
    top: true,
  }

  public handleScroll = (value: any) => {
    const { scrollTop } = value.srcElement;

    this.setState({
      top: scrollTop === 0,
    });
  };

  public render() {
    return (
      <Scrollbars
        onScroll={this.handleScroll}
        style={{height: '100vh', width: '100vw'}}
        renderView={(props: any) => <div {...props} id="scroll"/>}
      >
      <div className="fadein">
      <Nav 
        full={this.state.top}
        left='UBC Vancouver Campus'
        right='September 2018'
        navItems={[
        {
          link: '#about',
          title: 'About',
        },
        {
          link: '#eretreat',
          title: 'E-Retreat',
        },
        {
          link: '#schedule',
          title: 'Schedule',
        },
      ]}/>
      <Hero logo={logo} />
      <Border border={border1} />
      <About anchor='about' color='white' border={border1}>
        <AboutContent />
      </About>
      <Border border={border2} />
      <About anchor='eretreat' color='blue'>
        <ERetreatContent />
      </About>
      <Border border={border1} />
      <About anchor='schedule' color='white' border={border1}>
        <ScheduleContent />
      </About>
      <Border border={border3} color='white' />
      <About anchor='more' color='red' border={border3}>
        <Contact />
      </About>
      </div>
      </Scrollbars>
    );
  }
}