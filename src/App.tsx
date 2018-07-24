import * as React from 'react';
import About from './components/content/About';
import Border from './components/content/Border';
import Hero from './components/content/Hero';
import Nav from './components/content/Nav';

import border1 from './assets/border1.svg';
import border2 from './assets/border2.svg';
import logo from './assets/logo.svg';

import AboutContent from './markdown/about.md';
import ERetreatContent from './markdown/e-retreat.md';
import ScheduleContent from './markdown/schedule.md';

export default class BlogPost extends React.PureComponent {
  public render() {
    return (
      <>
      <Nav 
        left='UBC Vancouver Campus'
        right='September 2018'
        navItems={[
        {
          link: '#About',
          title: 'About',
        },
        {
          link: '#Schedule',
          title: 'Schedule',
        },
        {
          link: '#ERetreat',
          title: 'E-Retreat',
        },
        {
          link: '#More',
          title: 'More',
        },
      ]}/>
      <Hero logo={logo} />
      <Border border={border1} />
      <About color='white' border={border1}>
        <AboutContent />
      </About>
      <Border border={border2} />
      <About color='blue'>
        <ERetreatContent />
      </About>
      <Border border={border1} />
      <About color='white' border={border1}>
        <ScheduleContent />
      </About>
      </>
    );
  }
}