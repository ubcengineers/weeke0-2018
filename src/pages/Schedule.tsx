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
        title=''
        days={[
          <>
            Monday<br/>
            Sept 4th
          </>,
          <>
            Tuesday<br/>
            Sept 5th
          </>,
          <>
            Wednesday<br/>
            Sept 6th
          </>,
          <>
            Thursday<br/>
            Sept 7th
          </>,
          <>
            Friday<br/>
            Sept 8th
          </>,
        ]}
        events={[
          {
            day: 1,
            end: 8,
            muted: true,
            start: 21,
            subtitle: 'Labour Day',
            title: 'No School!',
          },
          {
            day: 2,
            end: 16,
            start: 9,
            subtitle: '9am - 4pm',
            title: 'Imagine Day',
          },
          {
            day: 2,
            end: 19,
            start: 16,
            subtitle: '4pm - 7pm',
            title: 'Imagine Day BBQ',
          },
          {
            day: 3,
            end: 8,
            start: 10,
            subtitle: '8am - 10am',
            title: 'AOESPD Breakfast',
          },
          {
            day: 3,
            end: 12,
            start: 14,
            subtitle: '12pm - 2pm',
            title: 'Chariot Racing',
          },
          {
            day: 3,
            end: 21,
            start: 17.5,
            subtitle: '5:30pm - 9pm',
            title: 'Games Night with Profs',
          },
          {
            day: 4,
            end: 8,
            start: 10,
            subtitle: '8am - 10am',
            title: 'ESW Breakfast',
          },
          {
            day: 4,
            end: 12.5,
            start: 11,
            subtitle: '11am - 12:30pm',
            title: 'True Engineer',
          },
          {
            day: 4,
            end: 17,
            start: 16,
            subtitle: '4pm - 5pm',
            title: 'E-Retreat 101',
          },
          {
            day: 4,
            end: 19,
            start: 17,
            subtitle: '5pm - 7pm',
            title: 'hEUStory & Godiva Band BBQ',
          },
          {
            day: 5,
            end: 10,
            start: 8,
            subtitle: '8am - 10am',
            title: 'EWB Breakfast',
          },
          {
            day: 5,
            end: 11,
            start: 13,
            subtitle: '11am - 1pm',
            title: 'Ultimate Frisbee & BBQ',
          },
          {
            day: 5,
            end: 19,
            start: 21,
            subtitle: '7pm',
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