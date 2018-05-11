import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'
import styled from 'styled-components'
import background from '../images/bg.jpg'

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
const Contact = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
`

const IndexPage = () => (
  <Wrapper>
    <About>
      <div className={styles['about-content']}>
        <p>
          Hello, my name is Husni Munaya.<br />I'm a front-end developer from
          Indonesia
        </p>
      </div>
    </About>
    <Contact>
      <div className={styles.social}>
        <ul className={styles['social-list']}>
          <li className={styles['social-list-item']}>
            <a href="https://www.linkedin.com/in/husni-munaya/" target="_blank">
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li className={styles['social-list-item']}>
            <a href="https://github.com/husnimun/" target="_blank">
              <i className="fab fa-github" />
            </a>
          </li>
          <li className={styles['social-list-item']}>
            <a href="http://codepen.io/husnimun/" target="_blank">
              <i className="fab fa-codepen" />
            </a>
          </li>
          <li className={styles['social-list-item']}>
            <a href="https://twitter.com/husnimun" target="_blank">
              <i className="fab fa-twitter" />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.email}>
        <span>husnimunaya@gmail.com</span>
      </div>
    </Contact>
  </Wrapper>
)

export default IndexPage
