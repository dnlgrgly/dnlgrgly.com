import * as React from "react";
import styled from "styled-components";

import LogoWhite from "../images/logo-white.svg";
import LogoBlack from "../images/logo-black.svg";

import GlobalStyle from "../styles/globalStyle.js";

const Navbar = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
`;

const Logo = styled.img`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 10rem;

  @media ${(props) => props.theme.device.tablet} {
    top: 2rem;
    left: 2rem;
  }

  @media ${(props) => props.theme.device.laptop} {
    top: 4rem;
    left: 4rem;
  }
`;

const Layout = ({ children, title, isDark }) => {
  return (
    <main>
      <GlobalStyle />
      <Navbar>
        <Logo src={isDark ? LogoBlack : LogoWhite} alt="dnlgrgly logo" />
      </Navbar>
      {children}
    </main>
  );
};

export default Layout;
