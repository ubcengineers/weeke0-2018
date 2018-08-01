import * as React from 'react';

import About from '../components/content/About';
import Border from '../components/content/Border';
import Contact from '../components/form/Contact';

import border1 from '../assets/border1.svg';
import border3 from '../assets/border3.svg';

import ScheduleContent from '../markdown/schedule.md';

export default () => {
  return (
    <div className="fadein">
    <About color='white' border={border1}>
      <ScheduleContent />
    </About>
    <Border border={border3} color='white' />
    <About color='red' border={border3}>
      <Contact />
    </About>
    </div>
  );
}