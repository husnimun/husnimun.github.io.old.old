import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'gatsby-link'

const baseStyles = css`
  position: relative;
  text-decoration: none;
  transition: 300ms ease;
  z-index: 100;

  &:hover {
    color: #5f5f5f;
  }
`

const fontColor = ({ light }) => {
  const color = light ? '#2b2b2b' : '#221C2F'
  return css`
    color: ${color};
  `
}

const underlineStyles = ({ light }) => {
  const backgroundColor = light
    ? 'rgba(255, 255, 255, 0.8)'
    : 'rgba(72, 57, 120, 0.6)'
  return css`
    &:before {
      content: '';
      position: absolute;
      width: calc(100%);
      height: 3px;
      border-radius: 2px;
      background: ${backgroundColor};
      bottom: 0px;
      z-index: -1;
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
