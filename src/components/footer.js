import React from 'react'
import styled from 'styled-components'
import { StyledAnchor } from '../components/styled/Link'

const StyledFooter = styled.footer`
  text-align: center;
  padding: 32px;
  background-color: #dbdbdb;
  color: #282a36;
  font-size: 18px;
  line-height: 1.7;
`

const Footer = () => (
  <StyledFooter>
    Hosted on{' '}
    <StyledAnchor href="https://github.com/husnimun/husnimun.github.io">
      Github Pages
    </StyledAnchor>.<br />Statically generated with{' '}
    <StyledAnchor href="https://www.gatsbyjs.org/">GatsbyJS</StyledAnchor> 🚀
    and styled with{' '}
    <StyledAnchor href="https://www.styled-components.com/">
      Styled Components
    </StyledAnchor>{' '}
    💅
    <br />
  </StyledFooter>
)

export default Footer
