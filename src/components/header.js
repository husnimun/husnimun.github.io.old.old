import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'gatsby-link'
import { bodyMedium } from '../styles/Typography'
import { light } from '../styles/Color'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 24px 24px;
`

const Nav = styled.nav``

const NavLink = styled(Link)`
  ${bodyMedium};
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  margin-right: 12px;
  margin-left: 12px;
  font-weight: 700;
  color: ${light};

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background: #36c9e8;
    bottom: -10px;
    left: 0;
    transform: scaleY(0);
    transform-origin: 0 0;
    transition: 300ms ease;
  }

  &:hover,
  &.active {
    &:before {
      transform: scaleY(1);
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Nav>
      <NavLink exact={true} to="/">
        About
      </NavLink>
      <NavLink exact={true} to="/portfolio">
        portfolio
      </NavLink>
    </Nav>
  </HeaderWrapper>
)

export default Header
