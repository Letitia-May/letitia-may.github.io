import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-grey: #555555;
    --light-grey: #bdbdbd;
    --white: #fcfcfc;
    --pink: #ff78ba;
    --teal: #00c7b6;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    font: 1.25em sans-serif;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
		padding: 0;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    font-family: 'Raleway', sans-serif;
    color: var(--dark-grey);
    letter-spacing: 0.05rem;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    letter-spacing: 0.35rem;
    color: var(--white);
  }
  a {
    color: var(--teal);
    text-decoration: none;
  }
  button {
    font-size: 0.5rem;
    letter-spacing: 0.2rem;
    padding: 0.75rem 0.55rem 0.65rem 0.75rem;
    text-transform: uppercase;
    transition: all 0.35s ease-in-out;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }
  }
`

export default GlobalStyle
