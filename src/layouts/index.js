import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ParallaxProvider } from 'react-scroll-parallax';
import Favicon from 'react-favicon';
import Analytics from '../components/analytics';

import './index.css'
import favicon from '../assets/favicon.png'

const Layout = ({ children, data }) => (
  <React.Fragment>
    <Favicon url={favicon}/>
    <Analytics />
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'The official webpage for Week E^0 2018' },
        { name: 'keywords', content: 'engineering, university, first year' },
        { name: 'theme-color', content:'#2F2F6F' }
      ]}>
    </Helmet>
    <ParallaxProvider>
      {children()}
    </ParallaxProvider>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
