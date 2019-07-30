import * as React from 'react';

import About from '../components/content/About';
import Border from '../components/content/Border';
import ButtonRow from '../components/content/ButtonRow';
import Calendar from '../components/content/Calendar';
import Contact from '../components/form/Contact';

import border3 from '../assets/border3.svg';

import ScheduleContent from '../markdown/schedule.md';
import Week2Content from '../markdown/week2.md';

import cal from '../assets/Week_E0.ics';

export default () => {
  return (
    <div className="fadein">
    <About color='blue'>
      <ScheduleContent />
      <Calendar 
        title=''
        days={[
          <>
            Monday<br/>
            Sept 3rd
          </>,
          <>
            Tuesday<br/>
            Sept 4th
          </>,
          <>
            Wednesday<br/>
            Sept 5th
          </>,
          <>
            Thursday<br/>
            Sept 6th
          </>,
          <>
            Friday<br/>
            Sept 7th
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
            end: 13,
            start: 14,
            subtitle: '1pm - 2pm',
            title: 'WiE event',
          }
        ]}
      />
      <ButtonRow
        buttons={[
          {
            link: cal,
            logo: 'fas fa-download',
            title:'Download to your calendar',
          }
        ]}
      />
    </About>
    <About color='white'>
      <Week2Content />
    </About>
    <Border border={border3} color='white'/>
    <About color='red'>
      <Contact />
    </About>
    </div>
  );
}