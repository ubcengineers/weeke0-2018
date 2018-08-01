import * as React from 'react';

import About from '../components/content/About';
import Border from '../components/content/Border';
import ButtonRow from '../components/content/ButtonRow';
import Hero from '../components/content/Hero';
import YouTube from '../components/content/YouTube';
import Contact from '../components/form/Contact';

import border1 from '../assets/border1.svg';
import border2 from '../assets/border2.svg';
import border3 from '../assets/border3.svg';
import logo from '../assets/logo.svg';

import AboutContent from '../markdown/about.md';
import ERetreatContent from '../markdown/e-retreat.md';

export default () => {
  return (
    <div className="fadein">
    <Hero logo={logo} />
    <Border border={border1} />
    <About color='white' border={border1}>
      <AboutContent />
      <YouTube src='https://www.youtube.com/embed/U0NT7_L5my4?controls=0&modestbranding=1&rel=0&showinfo=0'/>
      <ButtonRow buttons={[
        {
          link: 'schedule',
          logo: 'far fa-calendar-alt',
          title: 'View Schedule',
        },
        {
          link: 'https://students.ubc.ca/new-to-ubc/orientations/imagine-ubc',
          logo: 'fas fa-external-link-alt',
          title: 'Imagine Day',
        }
      ]}/>
    </About>
    <Border border={border2} />
    <About color='blue'>
      <ERetreatContent />
      <ButtonRow buttons={[
        {
          link: 'e-retreat',
          logo: 'fas fa-info',
          title: 'More Info',
        }
      ]}/>
    </About>
    <Border border={border3} />
    <About color='red' border={border3}>
      <Contact />
    </About>
    </div>
  );
}