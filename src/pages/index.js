import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import background from '../images/bg.jpg'

const StyledAnchor = styled.a`
  position: relative;
  color: #2b2b2b;
  text-decoration: none;
  transition: 300ms ease;
  z-index: 100;

  &:before {
    content: '';
    position: absolute;
    width: calc(100%);
    height: 6px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.6);
    bottom: 2px;
    z-index: -1;
    left: 0;
  }

  &:hover {
    color: #5f5f5f;
  }
`

const StyledLink = StyledAnchor.withComponent(Link)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 500px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const About = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-align: center;
  color: #2b2b2b;

  @media screen and (min-width: 600px) {
    font-size: 22px;
  }
`

const AboutContent = styled.div``

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
    color: #a6a6a6;
    transition: color 300ms ease;
  }

  > a:hover {
    color: #eee;
  }
`

const Email = styled.div`
  color: #c2c2c2;
  text-align: center;
`

const IndexPage = () => (
  <Wrapper>
    <About>
      <AboutContent>
        <p>
          Hello, my name is Husni Munaya.<br />I'm a front-end developer from
          Indonesia
        </p>
        <p>
          You can take a look at my{' '}
          <StyledAnchor href="https://google.com">Resume</StyledAnchor>, or see
          my <StyledLink to="/portfolio">Portfolio.</StyledLink>
        </p>
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
