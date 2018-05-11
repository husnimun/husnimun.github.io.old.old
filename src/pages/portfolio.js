import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { StyledLink, StyledAnchor } from '../components/styled/Link'
import indohunImg from '../images/project/indohun.png'
import bpomImg from '../images/project/bpom.png'
import travelBuddyImg from '../images/project/tb.png'

const Wrapper = styled.div`
  background-color: #f2f2f2;
`

const Hero = styled.div`
  background-color: #221c2f;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23473d5b' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeroTitle = styled.h1`
  margin-top: 0;
  color: #fff;
  font-size: 60px;
  text-align: center;
`

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  padding: 24px 32px;
`

const ProjectCard = Card.extend`
  margin-bottom: 32px;
  display: flex;
`

const ProjectTitle = styled.h2`
  margin-top: 0;
  font-size: 32px;
  color: #222;
  font-weight: normal;
`

const Grid = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
`

const Projects = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
`

const Project = styled.div`
  flex: 1;
`

const ProjectImage = styled.div`
  flex: 1;

  img {
    max-width: 100%;
  }
`

const ProjectDescription = styled.div`
  color: #444;
  font-size: 18px;
  line-height: 1.4;
`

const Pen = styled.div`
  flex: 1;
  iframe {
    width: 100%;
    border: none;
  }
`

const ProjectsTitle = styled.h1``

const SecondPage = () => (
  <Wrapper>
    <Hero>
      <HeroTitle>Portfolio of Husni Munaya</HeroTitle>
    </Hero>

    <Grid>
      <Projects>
        <ProjectsTitle>Recent Works</ProjectsTitle>
        <p>Here are some of my past works.</p>
        <ProjectCard>
          <ProjectImage>
            <img src={travelBuddyImg} />
          </ProjectImage>
          <Project>
            <ProjectTitle>TravedlBuddy</ProjectTitle>
            <ProjectDescription>
              <p>
                TravelBuddy is a matchmaking platform between traveler and
                travel guide. In this project, I was involved in two months
                design sprint as a full-stack web developer, working on both
                back end and front end. The project is built with Laravel and
                Vue.
              </p>
              <StyledAnchor href="https://travelbuddy.id" target="_blank">
                View Project
              </StyledAnchor>
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
              <StyledAnchor href="https://indohun.org" target="_blank">
                View Project
              </StyledAnchor>
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
              <StyledAnchor href="http://rb.pom.go.id/modul" target="_blank">
                View Project
              </StyledAnchor>
            </ProjectDescription>
          </Project>
        </ProjectCard>
      </Projects>

      <Projects>
        <ProjectsTitle>Codepen Gallery</ProjectsTitle>
        <p>
          I love experimenting witho CSS and JavaSciprt. Here are some of my
          selected Pen! You can see the rests on my{' '}
          <StyledAnchor href="https://codepen.io/husnimun">
            Codepen.
          </StyledAnchor>
        </p>
        <ProjectCard>
          <Pen>
            <iframe
              height="265"
              scrolling="no"
              title="Animated Hamburger Menu 2"
              src="//codepen.io/husnimun/embed/GJgjbE/?height=265&theme-id=light&default-tab=result&embed-version=2"
              frameborder="no"
              allowtransparency="true"
              allowfullscreen="true"
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
              height="265"
              scrolling="no"
              title="Animated Hamburger Menu"
              src="//codepen.io/husnimun/embed/pJvEeL/?height=265&theme-id=light&default-tab=result&embed-version=2"
              frameborder="no"
              allowtransparency="true"
              allowfullscreen="true"
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
              frameborder="no"
              allowtransparency="true"
              allowfullscreen="true"
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
              frameborder="no"
              allowtransparency="true"
              allowfullscreen="true"
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
              height="500"
              scrolling="no"
              title="Random dots"
              src="//codepen.io/husnimun/embed/eJmLRR/?height=265&theme-id=light&default-tab=result&embed-version=2"
              frameborder="no"
              allowtransparency="true"
              allowfullscreen="true"
            >
              See the Pen{' '}
              <a href="https://codepen.io/husnimun/pen/eJmLRR/">Random dots</a>{' '}
              by Husni Munaya (<a href="https://codepen.io/husnimun">
                @husnimun
              </a>) on <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </Pen>
        </ProjectCard>
        <ProjectCard>
          <Pen>
            <iframe
              height="480"
              scrolling="no"
              title="Product Card"
              src="//codepen.io/husnimun/embed/LmEqwg/?height=265&theme-id=light&default-tab=result&embed-version=2"
              frameborder="no"
              allowtransparency="true"
              allowfullscreen="true"
            >
              See the Pen{' '}
              <a href="https://codepen.io/husnimun/pen/LmEqwg/">Product Card</a>{' '}
              by Husni Munaya (<a href="https://codepen.io/husnimun">
                @husnimun
              </a>) on <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </Pen>
        </ProjectCard>
      </Projects>
    </Grid>
  </Wrapper>
)

export default SecondPage
