import React from 'react';
import Hero from '../components/hero';
import About from '../components/about';
import Video from '../components/video';
import EndForm from '../components/endForm';
import ERetreat from '../components/e-retreat';
import Header from '../components/header';

const IndexPage = () => (
  <React.Fragment>
    <Header />
    <Hero />
    <About />
    <Video />
    <ERetreat />
    <EndForm />
  </React.Fragment>
)

export default IndexPage
