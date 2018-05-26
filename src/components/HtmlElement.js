import { createElement } from 'react'
import PropTypes from 'prop-types'

const HtmlElement = ({ element, children, ...rest }) => {
  return createElement(element, { ...rest }, children)
}

HtmlElement.propTypes = {
  element: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

HtmlElement.defaultProps = {
  children: null,
  element: 'div',
}

export default HtmlElement
