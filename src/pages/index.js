import React from 'react';
import Hero from '../components/hero';
import About from '../components/about';
import Video from '../components/video';
import EndForm from '../components/endForm';
import ERetreat from '../components/e-retreat';
import Header from '../components/header';
import Funky from '../components/funky';

import funky3 from '../assets/funky-bg-3.svg';
import funky4 from '../assets/funky-bg-4.svg';

const IndexPage = () => (
  <React.Fragment>
    <Header />
    <Hero />
    <About />
    <Funky funky={funky3} background="#2F2F6F" />
    <ERetreat />
    <Funky funky={funky4} background="#2F2F6F" />
    <EndForm />
  </React.Fragment>
)

export default IndexPage
