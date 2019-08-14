import * as React from "react";

import About from "../components/content/About";
import Border from "../components/content/Border";
import Focus from "../components/content/Focus";
import PictureGrid from "../components/content/PictureGrid";
import Contact from "../components/form/Contact";

import border3 from "../assets/border3.svg";

import ERetreatContent from "../markdown/e-retreat-full.md";

import picture10 from "../assets/pictures/10.jpg";
import picture7 from "../assets/pictures/7.jpg";
import picture8 from "../assets/pictures/8.jpg";
import picture9 from "../assets/pictures/9.jpg";
import ButtonRow from "src/components/content/ButtonRow";

export default () => {
  return (
    <div className="fadein">
      <About color="white">
        <ERetreatContent />
        <Focus
          items={[
            {
              subtitle: "WHEN",
              title: "September 13 at 5PM to September 15 at 4:30PM"
            },
            {
              subtitle: "WHERE",
              title: "Camp Latona, Gambier Island"
            },
            {
              subtitle: "HOW MUCH",
              title: "$110 per person, all included"
            }
          ]}
        />
        <ButtonRow
          buttons={[
            {
              title: "Buy your ticket",
              link: "https://www.showpass.com/eus-e-retreat-2019/",
              logo: "fas fa-ticket-alt"
            }
          ]}
        />
        <PictureGrid images={[picture7, picture8, picture9, picture10]} />
      </About>
      <Border border={border3} color="white" />
      <About color="red">
        <Contact />
      </About>
    </div>
  );
};
