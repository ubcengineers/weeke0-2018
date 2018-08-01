import * as React from 'react';

import About from '../components/content/About';
import Border from '../components/content/Border';
import Calendar from '../components/content/Calendar';
import Contact from '../components/form/Contact';

import border3 from '../assets/border3.svg';

export default () => {
  return (
    <div className="fadein">
    <About color='blue'>
      <h1>Schedule</h1>
      <Calendar 
        title='Week 1'
        events={[
          {
            day: 2,
            end: 16,
            start: 8,
            title: 'Imagine Day',
          },
          {
            day: 2,
            end: 19,
            start: 16,
            title: 'Imagine Day BBQ',
          },
          {
            day: 3,
            end: 8,
            start: 10,
            title: 'AOESPD Breakfast',
          },
          {
            day: 3,
            end: 12,
            start: 14,
            title: 'Chariot Racing',
          },
          {
            day: 3,
            end: 21,
            start: 17.5,
            title: 'Games Night with Profs',
          },
          {
            day: 4,
            end: 8,
            start: 10,
            title: 'ESW Breakfast',
          },
          {
            day: 4,
            end: 12.5,
            start: 11,
            title: 'True Engineer',
          },
          {
            day: 4,
            end: 17,
            start: 16,
            title: 'E-Retreat 101',
          },
          {
            day: 4,
            end: 19,
            start: 17,
            title: 'hEUStory & Godiva Band BBQ',
          },
          {
            day: 5,
            end: 10,
            start: 8,
            title: 'EWB Breakfast',
          },
          {
            day: 5,
            end: 11,
            start: 13,
            title: 'Ultimate Frisbee & BBQ',
          },
          {
            day: 5,
            end: 19,
            start: 21,
            title: 'Back to School Party',
          }
        ]}
      />
    </About>
    <Border border={border3} />
    <About color='red' border={border3}>
      <Contact />
    </About>
    </div>
  );
}