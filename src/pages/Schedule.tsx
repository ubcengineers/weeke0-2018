import * as React from "react";

import About from "../components/content/About";
import Border from "../components/content/Border";
import Calendar from "../components/content/Calendar";
import Contact from "../components/form/Contact";
import ButtonRow from "../components/content/ButtonRow";

import border3 from "../assets/border3.svg";

import ScheduleContent from "../markdown/schedule.md";
import Week1Content from "../markdown/week1.md";
import Week2Content from "../markdown/week2.md";

export default () => {
  return (
    <div className="fadein">
      <About color="blue">
        <ScheduleContent />
        <ButtonRow
          buttons={[
            {
              link:
                "https://calendar.google.com/calendar?cid=ODcxM3NlZXA0OGp0b29udmg5bGY0OHBrcmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
              logo: "fas fa-calendar",
              title: "Download Calendar"
            }
          ]}
        />
        <h2>Week 1</h2>
        <Calendar
          title="Week 1"
          days={[
            <>
              Monday
              <br />
              Sept 2nd
            </>,
            <>
              Tuesday
              <br />
              Sept 3rd
            </>,
            <>
              Wednesday
              <br />
              Sept 4th
            </>,
            <>
              Thursday
              <br />
              Sept 5th
            </>,
            <>
              Friday
              <br />
              Sept 6th
            </>
          ]}
          events={[
            {
              day: 1,
              end: 8,
              muted: true,
              start: 21,
              subtitle: "Labour Day",
              title: "No School!"
            },
            {
              day: 2,
              end: 16.5,
              start: 9,
              subtitle: "9am - 4:30pm",
              title: "Imagine Day"
            },
            {
              day: 2,
              end: 19,
              start: 16.5,
              subtitle: "4:30pm - 7pm",
              title: "Imagine Day BBQ"
            },
            {
              day: 3,
              end: 8,
              start: 10,
              subtitle: "8am - 10am",
              title: "AOESPD Pancake Breakfast"
            },
            {
              day: 3,
              end: 13,
              start: 11,
              subtitle: "11am - 1pm",
              title: "True Engineer and Pizza"
            },
            {
              day: 3,
              end: 17.5,
              start: 17,
              subtitle: "5pm - 5:30pm",
              title: "E-Retreat 101"
            },
            {
              day: 3,
              end: 21,
              start: 17.5,
              subtitle: "5:30pm - 9pm",
              title: "Games Night with Profs"
            },
            {
              day: 4,
              end: 10,
              start: 8,
              subtitle: "8am - 10am",
              title: "ESW Pancake Breakfast"
            },
            {
              day: 4,
              end: 13,
              start: 11,
              subtitle: "11am - 1pm",
              title: "Chariot Racing and Barbeque"
            },
            {
              day: 4,
              end: 20,
              start: 17,
              subtitle: "5pm - 8pm",
              title: "hEUStory: A Centennium Celebration"
            },
            {
              day: 5,
              end: 10,
              start: 8,
              subtitle: "8am - 10am",
              title: "EWB Pancake Breakfast"
            },
            {
              day: 5,
              end: 12,
              start: 11,
              subtitle: "11am - 12pm",
              title: "EUS Volunteering 101"
            },
            {
              day: 5,
              end: 13,
              start: 12,
              subtitle: "12pm - 1pm",
              title: "Fun With Science"
            }
          ]}
        />
      </About>
      <About color="white">
        <Week1Content />
      </About>
      <About color="blue">
        <h2>Week 2</h2>
        <Calendar
          title="Week 2"
          days={[
            <>
              Monday
              <br />
              Sept 9th
            </>,
            <>
              Tuesday
              <br />
              Sept 10th
            </>,
            <>
              Wednesday
              <br />
              Sept 11th
            </>,
            <>
              Thursday
              <br />
              Sept 12th
            </>,
            <>
              Friday
              <br />
              Sept 13th
            </>
          ]}
          events={[
            {
              day: 1,
              end: 12,
              start: 11,
              subtitle: "WIE Campus Tours",
              title: "11am - 12pm"
            },
            {
              day: 2,
              end: 13,
              start: 11,
              subtitle: "11am - 1pm",
              title: "Department BBQ"
            },
            {
              day: 2,
              end: 19,
              start: 17,
              subtitle: "5pm - 7pm",
              title: "ESW Green Games"
            },
            {
              day: 3,
              end: 12,
              start: 11,
              subtitle: "11am - 12pm",
              title: "ESW Sustain Your Brain"
            },
            {
              day: 4,
              end: 18,
              start: 17,
              subtitle: "5pm - 6pm",
              title: "E-Retreat Info Session"
            },
            {
              day: 4,
              end: 20,
              start: 18,
              subtitle: "6pm - 8pm",
              title: "WIE Breakfast for Dinner"
            }
          ]}
        />
      </About>
      <About color="white">
        <Week2Content />
      </About>
      <Border border={border3} color="white" />
      <About color="red">
        <Contact />
      </About>
    </div>
  );
};
