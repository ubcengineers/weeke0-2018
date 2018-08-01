import * as React from 'react';

import About from '../components/content/About';
import Border from '../components/content/Border';
import Hero from '../components/content/Hero';
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
    </About>
    <Border border={border2} />
    <About color='blue'>
      <ERetreatContent />
    </About>
    <Border border={border3} />
    <About color='red' border={border3}>
      <Contact />
    </About>
    </div>
  );
}