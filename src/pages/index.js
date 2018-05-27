import React from 'react'
import styled, { css } from 'styled-components'
import Heading from '../components/typography/Heading'
import { StyledAnchor, StyledLink } from '../components/styled/Link'

const dark = '#171a20'
const light = '#f6f6f6'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-top: -73px;
`

const headingLarge = css`
  font-size: 48px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 64px;
  }
`

const bodyMedium = css`
  font-size: 16px;
  line-height: 1.4;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const AboutContent = styled.div`
  padding: 16px;
`

const AboutHeading = styled(Heading)`
  ${headingLarge};
  margin-bottom: 24px;
  color: ${light};
`

const AboutDescription = styled.p`
  ${bodyMedium};
  color: ${light};
  max-width: 400px;
`

const Contact = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
`

const Social = styled.div``

const SocialList = styled.ul`
  padding: 0;
  margin-top: 0;
  margin-bottom: 0.5em;
  text-align: center;
`

const SocialListItem = styled.li`
  display: inline-block;
  font-size: 28px;
  list-style: none;
  margin-left: 6px;
  margin-right: 6px;

  > a {
    color: ${light};
    transition: color 300ms ease;
  }

  > a:hover {
    color: #a6a6a6;
  }
`

const Email = styled.div`
  ${bodyMedium};
  color: ${light};
  text-align: center;
`

const IndexPage = () => (
  <Wrapper>
    <About>
      <AboutContent>
        <AboutHeading element="h1">Husni Munaya</AboutHeading>
        <AboutDescription>
          Love to work with the web stack. Passionate about front-end
          development.
        </AboutDescription>
      </AboutContent>
    </About>
    <Contact>
      <Social>
        <SocialList>
          <SocialListItem>
            <a href="https://www.linkedin.com/in/husni-munaya/" target="_blank">
              <i className="fab fa-linkedin" />
            </a>
          </SocialListItem>
          <SocialListItem>
            <a href="https://github.com/husnimun/" target="_blank">
              <i className="fab fa-github" />
            </a>
          </SocialListItem>
          <SocialListItem>
            <a href="http://codepen.io/husnimun/" target="_blank">
              <i className="fab fa-codepen" />
            </a>
          </SocialListItem>
          <SocialListItem>
            <a href="https://twitter.com/husnimun" target="_blank">
              <i className="fab fa-twitter" />
            </a>
          </SocialListItem>
        </SocialList>
      </Social>
      <Email>husnimunaya@gmail.com</Email>
    </Contact>
  </Wrapper>
)

export default IndexPage
