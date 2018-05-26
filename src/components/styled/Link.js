import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'gatsby-link'
import { purple, blue } from '../../styles/Color'
import { rgba } from 'polished'

const baseStyles = css`
  position: relative;
  text-decoration: none;
  transition: 300ms ease;
  z-index: 100;

  &:hover {
    background: ${rgba(blue, 0.4)};
  }
`

const fontColor = ({ light }) => {
  const color = light ? '#2b2b2b' : '#221C2F'
  return css`
    color: ${color};
  `
}

const underlineStyles = ({ light }) => {
  const backgroundColor = light ? 'rgba(255, 255, 255, 0.8)' : purple
  return css`
    background: ${rgba(blue, 0.2)};
    &:before {
      content: '';
      position: absolute;
      width: calc(100%);
      height: 1px;
      background: ${backgroundColor};
      bottom: 0px;
      left: 0;
    }
  `
}

export const StyledAnchor = styled(({ light, ...rest }) => <a {...rest} />)`
  ${baseStyles};
  ${fontColor};
  ${underlineStyles};
`

export const StyledLink = styled(({ light, ...rest }) => <Link {...rest} />)`
  ${baseStyles};
  ${fontColor};
  ${underlineStyles};
`
