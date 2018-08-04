import * as React from 'react';

import About from '../components/content/About';
import Border from '../components/content/Border';
import ButtonRow from '../components/content/ButtonRow';
import Focus from '../components/content/Focus';
import PictureGrid from '../components/content/PictureGrid';
import Contact from '../components/form/Contact';

import border1 from '../assets/border1.svg';
import border3 from '../assets/border3.svg';

import ERetreatContent from '../markdown/e-retreat-full.md';

import picture10 from '../assets/pictures/10.jpg';
import picture7 from '../assets/pictures/7.jpg';
import picture8 from '../assets/pictures/8.jpg';
import picture9 from '../assets/pictures/9.jpg';

export default () => {
    return (
        <div className="fadein">
            <Border border={border1} />
            <About color='white' border={border1}>
                <ERetreatContent />
                <Focus items={[
                    {
                        subtitle: 'WHEN',
                        title: 'Sept 14th - Sept 16th',
                    },
                    {
                        subtitle: 'WHERE',
                        title: 'Camp Latona, Gambier Island',
                    },
                    {
                        subtitle: 'HOW MUCH',
                        title: '$110 per person, all included',
                    },
                ]}/>
                <PictureGrid images={[
                    picture7,
                    picture8,
                    picture9,
                    picture10,
                ]} />
                <ButtonRow 
                    buttons={[
                        {
                        link: '#',
                        logo: 'fas fa-ticket-alt',
                        title: 'Tickets available Aug 15th',
                        },
                    ]}
                />
            </About>
            <Border border={border3} color='white'/>
            <About color='red' border={border3}>
                <Contact />
            </About>
        </div>
    );
}