import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { StyledLink, StyledAnchor } from '../components/styled/Link'
import Footer from '../components/footer'
import Heading from '../components/typography/Heading'
import indohunImg from '../images/project/indohun.png'
import bpomImg from '../images/project/bpom.png'
import travelBuddyImg from '../images/project/tb.png'
import { dark } from '../styles/Color'
import { bodyMedium } from '../styles/Typography'
import { ButtonLink } from '../components/styled/Button'

const Wrapper = styled.div`
  background-color: rgb(245, 245, 250);
`

const Hero = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeroTitle = styled(Heading)`
  margin-top: 32px;
  margin-bottom: 24px;
  color: #363636;
  font-size: 32px;
  text-align: center;

  @media screen and (min-width: 500px) {
    font-size: 64px;
  }
`

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 5px 15px 0 rgba(37, 44, 97, 0.15),
    0 2px 4px 0 rgba(93, 100, 148, 0.2);
  border-radius: 4px;
  padding: 24px 24px;
`

const Grid = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
`

const Projects = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
`

const ProjectsHeader = styled.div`
  max-width: 600px;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const ProjectsTitle = styled.h1`
  margin-bottom: 12px;
`

const ProjectCard = Card.extend`
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (max-width: 400px) {
    margin-left: calc(50% - 50vw + 12px);
    margin-right: calc(50% - 50vw + 12px);
    margin-bottom: 24px;
  }
`

const ProjectTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 32px;
  color: #222;
  font-weight: normal;
`

const Project = styled.div`
  padding: 12px 0;
`

const ProjectImage = styled.div`
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;

  img {
    width: 100%;
    max-width: 680px;
  }
`

const ProjectDescription = styled.div`
  color: #444;
  ${bodyMedium};
`

const Pen = styled.div`
  flex: 1;
  iframe {
    width: 100%;
    border: none;
  }
`

const SecondPage = () => (
  <Wrapper>
    <Hero>
      <HeroTitle element="h1">Portfolio</HeroTitle>
    </Hero>

    <Grid>
      <Projects>
        <ProjectsHeader>
          <ProjectsTitle>Recent Works</ProjectsTitle>
          <p>
            I enjoy working on the web stack, especially the front-end stack.
            Here are some of my recent works.
          </p>
        </ProjectsHeader>
        <ProjectCard>
          <ProjectImage>
            <img src={travelBuddyImg} />
          </ProjectImage>
          <Project>
            <ProjectTitle>TravelBuddy</ProjectTitle>
            <ProjectDescription>
              <p>
                TravelBuddy is a matchmaking platform for traveler and travel
                guide. In this project, I was involved in two months design
                sprint as a full-stack web developer, working on both back end
                and front end. The project is built with Laravel and Vue.
              </p>
              <ButtonLink href="https://travelbuddy.id" target="_blank">
                View Project
              </ButtonLink>
            </ProjectDescription>
          </Project>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage>
            <img src={indohunImg} />
          </ProjectImage>
          <Project>
            <ProjectTitle>Indohun Profile Website</ProjectTitle>
            <ProjectDescription>
              <p>
                Worked as web developer and collaborated with designers to
                develop a WordPress theme for Indohun Profile Website.
              </p>
              <ButtonLink href="https://indohun.org" target="_blank">
                View Project
              </ButtonLink>
            </ProjectDescription>
          </Project>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage>
            <img src={bpomImg} />
          </ProjectImage>
          <Project>
            <ProjectTitle>Reformasi Birokrasi BPOM</ProjectTitle>
            <ProjectDescription>
              <p>
                As a full-stack web developer, I worked and collaborated with
                project manager and designer to build web-based reporting system
                for BPOM.
              </p>
              <ButtonLink href="http://rb.pom.go.id/modul" target="_blank">
                View Project
              </ButtonLink>
            </ProjectDescription>
          </Project>
        </ProjectCard>
      </Projects>

      <Projects>
        <ProjectsHeader>
          <ProjectsTitle>Codepen Gallery</ProjectsTitle>
          <p>
            I love experimenting with CSS and JavaScript. Here are some of my
            selected Pen! You can see the rests on my{' '}
            <StyledAnchor href="https://codepen.io/husnimun" target="_blank">
              Codepen.
            </StyledAnchor>
          </p>
        </ProjectsHeader>
        <ProjectCard>
          <Pen>
            <iframe
              height="300"
              scrolling="no"
              title="Animated Hamburger Menu 2"
              src="//codepen.io/husnimun/embed/GJgjbE/?height=265&theme-id=light&default-tab=result&embed-version=2"
              frameBorder="no"
              allowTransparency="true"
              allowFullScreen="true"
            >
              See the Pen{' '}
              <a href="https://codepen.io/husnimun/pen/GJgjbE/">
                Animated Hamburger Menu 2
              </a>{' '}
              by Husni Munaya (<a href="https://codepen.io/husnimun">
                @husnimun
              </a>) on <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </Pen>
        </ProjectCard>
        <ProjectCard>
          <Pen>
            <iframe
              height="300"
              scrolling="no"
              title="Animated Hamburger Menu"
              src="//codepen.io/husnimun/embed/pJvEeL/?height=265&theme-id=light&default-tab=result&embed-version=2"
              frameBorder="no"
              allowTransparency="true"
              allowFullScreen="true"
            >
              See the Pen{' '}
              <a href="https://codepen.io/husnimun/pen/pJvEeL/">
                Animated Hamburger Menu
              </a>{' '}
              by Husni Munaya (<a href="https://codepen.io/husnimun">
                @husnimun
              </a>) on <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </Pen>
        </ProjectCard>
        <ProjectCard>
          <Pen>
            <iframe
              height="400"
              scrolling="no"
              title="Sunflower"
              src="//codepen.io/husnimun/embed/BNyzEK/?height=265&theme-id=light&default-tab=result&embed-version=2"
              frameBorder="no"
              allowTransparency="true"
              allowFullScreen="true"
            >
              See the Pen{' '}
              <a href="https://codepen.io/husnimun/pen/BNyzEK/">Sunflower</a> by
              Husni Munaya (<a href="https://codepen.io/husnimun">@husnimun</a>)
              on <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </Pen>
        </ProjectCard>
        <ProjectCard>
          <Pen>
            <iframe
              height="400"
              scrolling="no"
              title="Gallery Grid"
              src="//codepen.io/husnimun/embed/bMVWQy/?height=265&theme-id=light&default-tab=result&embed-version=2"
              frameBorder="no"
              allowTransparency="true"
              allowFullScreen="true"
            >
              See the Pen{' '}
              <a href="https://codepen.io/husnimun/pen/bMVWQy/">Gallery Grid</a>{' '}
              by Husni Munaya (<a href="https://codepen.io/husnimun">
                @husnimun
              </a>) on <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </Pen>
        </ProjectCard>
        <ProjectCard>
          <Pen>
            <iframe
              height="340"
              scrolling="no"
              title="Random dots"
              src="//codepen.io/husnimun/embed/eJmLRR/?height=265&theme-id=light&default-tab=result&embed-version=2"
              frameBorder="no"
              allowTransparency="true"
              allowFullScreen="true"
            >
              See the Pen{' '}
              <a href="https://codepen.io/husnimun/pen/eJmLRR/">Random dots</a>{' '}
              by Husni Munaya (<a href="https://codepen.io/husnimun">
                @husnimun
              </a>) on <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </Pen>
        </ProjectCard>
      </Projects>
    </Grid>
    <Footer />
  </Wrapper>
)

export default SecondPage
