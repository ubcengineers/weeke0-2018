import * as React from "react";

import About from "../components/content/About";
import Border from "../components/content/Border";
import ButtonRow from "../components/content/ButtonRow";
import Hero from "../components/content/Hero";
import PictureGrid from "../components/content/PictureGrid";
import YouTube from "../components/content/YouTube";
import Contact from "../components/form/Contact";

import border3 from "../assets/border3.svg";
import logo from "../assets/logo.svg";

import picture1 from "../assets/pictures/1.jpg";
import picture2 from "../assets/pictures/2.jpg";
import picture3 from "../assets/pictures/3.jpg";
import picture4 from "../assets/pictures/4.jpg";
import picture5 from "../assets/pictures/5.jpg";
import picture6 from "../assets/pictures/6.jpg";

import AboutContent from "../markdown/about.md";
import ERetreatContent from "../markdown/e-retreat.md";

export default () => {
  return (
    <div className="fadein">
      <Hero logo={logo} subtitle="September 3rd - 15th" />
      <About color="white">
        <AboutContent />
        <YouTube src="https://www.youtube.com/embed/U0NT7_L5my4?controls=0&modestbranding=1&rel=0&showinfo=0" />
        <ButtonRow
          buttons={[
            {
              link: "schedule",
              logo: "far fa-calendar-alt",
              title: "View Schedule"
            },
            {
              link:
                "https://students.ubc.ca/new-to-ubc/orientations/imagine-ubc",
              logo: "fas fa-external-link-alt",
              title: "Imagine Day"
            }
          ]}
        />
      </About>
      <About color="blue">
        <ERetreatContent />
        <ButtonRow
          buttons={[
            {
              link: "e-retreat",
              logo: "fas fa-info",
              title: "More Info"
            }
          ]}
        />
      </About>
      <About color="white">
        <PictureGrid
          images={[picture1, picture2, picture3, picture4, picture5, picture6]}
        />
      </About>
      <Border border={border3} color="white" />
      <About color="red">
        <Contact />
      </About>
    </div>
  );
};
