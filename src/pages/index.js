import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link } from 'gatsby'

import '../styles/normalize.css'
import GlobalStyle from '../styles/global'
import SEO from '../components/seo'
import Icon from '../components/icon'

const MainLayout = styled.div`
  height: 100vh;
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: var(--dark-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MainContent = styled.div`
  text-align: center;
  padding-bottom: 2rem;
`

const BigTitle = styled.h1`
  font-size: 3rem;
  text-indent: 0.5rem;
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media (max-width: 700px) {
    font-size: 2.5rem;
  }
`

const LittleTitle = styled.h2`
  font-size: 1.5rem;
  text-indent: 0.5rem;
  text-transform: uppercase;
  margin: 1.5rem 0 2rem;

  @media (max-width: 700px) {
    font-size: 1rem;
  }
`

const Line = styled.hr`
  width: 100%;
  max-width: 800px;
  border: 0.5px solid var(--pink);
  background: var(--pink);

  &:after {
    content: ' ';
    height: 8px;
    position: relative;
    bottom: 4px;
    left: calc(50% - 4px);
    width: 8px;
    background: var(--pink);
    transform: rotate(45deg);
    display: block;
  }
`

const Button = styled.button`
  border: 1px solid var(--pink);
  background-color: var(--dark-grey);
  color: var(--white);

  &:hover {
    background-color: var(--teal);
    border: 1px solid var(--white);
  }
`

const IndexPage = () => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
        integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
        crossorigin="anonymous"
      />
    </Helmet>
    <GlobalStyle />
    <MainLayout>
      <SEO title="Home" keywords={[`Chloe Kuypers`, `development`]} />
      <MainContent>
        <BigTitle>Chloe Kuypers</BigTitle>
        <Line />
        <LittleTitle>Web developer</LittleTitle>
        <Icon type="github" url="https://github.com/Letitia-May" />
        <Icon type="linkedin-in" url="https://au.linkedin.com/in/ckuypers" />
        <Icon type="twitter" url="https://twitter.com/letitia_may" />
      </MainContent>
      <Link to="/projects/">
        <Button>Projects</Button>
      </Link>
    </MainLayout>
  </>
)

export default IndexPage