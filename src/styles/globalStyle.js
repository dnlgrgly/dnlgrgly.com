import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    background-color: ${(props) => props.theme.color.background};
    font-family: Circular Std, sans-serif;
    font-display: fallback;
  }

  main {
    padding: 2rem 1rem;

    @media ${(props) => props.theme.device.tablet} {
      padding: 4rem 2rem;
    }

    @media ${(props) => props.theme.device.laptop} {
      padding: 4rem 4rem;
    }
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 1rem;
    vertical-align: baseline;
    transition: 0.1s all ease-in-out;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    width: 100vw;
    height: 100vh;
    line-height: 1;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    background-color: transparent;
    text-decoration: none;
  }

  a:active,
  a:hover {
    outline: 0;
    text-decoration: none;
  }

  b {
    font-weight: bold;
  }

  img {
    border: 0;
  }

  html {
    overflow-x: hidden;
    overflow-y: scroll;
    font-size: 100%;
  }

  body {
    overflow-x: hidden;
    color: ${(props) => props.theme.color.foreground};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: "liga" on;
    font-feature-settings: "liga" on;
  }

  h1 {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 600;
    @media ${(props) => props.theme.device.tablet} {
      font-size: 3rem;
    }
    @media ${(props) => props.theme.device.laptopL} {
      font-size: 3.5rem;
    }
  }

  h2 {
    font-weight: 300;
    font-size: 2rem;
    @media ${(props) => props.theme.device.tablet} {
      font-size: 2.5em;
    }
    @media ${(props) => props.theme.device.laptopL} {
      font-size: 3rem;
    }
  }

  h3 {
    font-weight: 400;
    font-size: 1.25rem;
    @media ${(props) => props.theme.device.tablet} {
      font-size: 1.5em;
    }
    @media ${(props) => props.theme.device.laptopL} {
      font-size: 1.75rem;
    }
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.color.foreground};
  }

  ::selection {
    color: ${(props) => props.theme.color.background};
    background: ${(props) => props.theme.color.foreground};
  }
`;
