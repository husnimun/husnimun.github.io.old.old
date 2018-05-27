import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { css } from 'styled-components'
import { dark } from '../styles/Color'

import Header from '../components/header'
import Footer from '../components/footer'
import './normalize.css'
import './index.css'

const OuterPadding = ({ isHome }) => {
  return css`
    padding: ${isHome ? '8px' : '0'};
    @media screen and (min-width: 768px) {
      padding: ${isHome ? '12px' : '0'};
    }
  `
}

const OuterWrapper = styled.div`
  ${OuterPadding};
  height: 100vh;
  transition: padding 300ms ease;
  background: linear-gradient(180deg, #6c5add 0%, #36c9e8 100%);
`
const InnerWrapper = styled.div`
  background-color: ${dark};
  height: 100%;
`

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Personal site of Husni Munaya' },
        { name: 'keywords', content: 'Husni Munaya, Husni, Portfolio' },
      ]}
    />

    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Fira+Sans:400,700"
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.12/js/all.js"
        integrity="sha384-Voup2lBiiyZYkRto2XWqbzxHXwzcm4A5RfdfG6466bu5LqjwwrjXCMBQBLMWh7qR"
        crossorigin="anonymous"
      />
    </Helmet>
    <OuterWrapper isHome={location.pathname === '/'}>
      <InnerWrapper>
        <Header />
        {children()}
      </InnerWrapper>
    </OuterWrapper>
  </div>
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
