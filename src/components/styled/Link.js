import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

export const StyledAnchor = styled(({ light, ...rest }) => <a {...rest} />)`
  position: relative;
  color: ${props => (props.light ? '#2b2b2b' : '#221C2F')};
  text-decoration: none;
  transition: 300ms ease;
  z-index: 100;

  &:before {
    content: '';
    position: absolute;
    width: calc(100%);
    height: 3px;
    border-radius: 2px;
    background: ${props =>
      props.light ? 'rgba(255, 255, 255, 0.8)' : 'rgba(72, 57, 120, 0.6);'};
    bottom: 0px;
    z-index: -1;
    left: 0;
  }

  &:hover {
    color: #5f5f5f;
  }
`

export const StyledLink = styled(({ light, ...rest }) => <Link {...rest} />)`
  position: relative;
  color: ${props => (props.light ? '#2b2b2b' : '#221C2F')};
  text-decoration: none;
  transition: 300ms ease;
  z-index: 100;

  &:before {
    content: '';
    position: absolute;
    width: calc(100%);
    height: 3px;
    border-radius: 2px;
    background: ${props =>
      props.light ? 'rgba(255, 255, 255, 0.8)' : 'rgba(72, 57, 120, 0.6);'};
    bottom: 0px;
    z-index: -1;
    left: 0;
  }

  &:hover {
    color: #5f5f5f;
  }
`
