import * as React from 'react';

import About from '../components/content/About';
import Border from '../components/content/Border';
import Hero from '../components/content/Hero';

import border1 from '../assets/border1.svg';
import ErrorContent from '../markdown/404.md';

export default () => {
    return (
        <div className="fadein">
            <Hero title='404' size='full'/>
            <Border border={border1} />
            <About color='white' border={border1}>
                <ErrorContent />
            </About>
        </div>
    );
}