import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import HtmlElement from '../HtmlElement'

const baseStyles = css`
  margin-top: 0;
  font-family: 'Merriweather', serif;
  font-weight: 700;
`
const HeadingElement = styled(HtmlElement)`
  ${baseStyles};
`

const Heading = props => <HeadingElement {...props} />

Heading.propTypes = {
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Heading.defaultProps = {
  element: 'h2',
  children: null,
}

export default Heading
