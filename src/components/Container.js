import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";

import GlobalFonts from "../fonts/fonts";
import LogoWhite from "../images/logo-white.svg";
import LogoBlack from "../images/logo-black.svg";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    border: 0;
    background-color: #280003;
    color: white;
    font-family: Circular Std, sans-serif;
    min-width: 100vw;
    min-height: 100vh;
  }

  main {
    padding: 3rem 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  h1 {
    font-size: 3rem;
    color: white;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: normal;
  }
`;

const Logo = styled.img`
  width: 10rem;
`;

const Container = ({ children, title, isDark }) => {
  return (
    <main>
      <GlobalStyle />
      <GlobalFonts />
      <Logo src={isDark ? LogoBlack : LogoWhite} alt="dnlgrgly logo" />
      {children}
    </main>
  );
};

export default Container;
