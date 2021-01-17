import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import styled from "styled-components";

import LogoWhite from "../images/logo-white.svg";
import LogoBlack from "../images/logo-black.svg";

import GlobalStyle from "../styles/globalStyle.js";

const Navbar = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  height: 6rem;

  ${({ theme, showGradient }) =>
    showGradient &&
    `
    background: linear-gradient(
      180deg,
      ${theme.color.background},
      transparent
    );
  `}
`;

const Logo = styled.img`
  width: 10rem;

  ${({ showGradient }) =>
    showGradient &&
    `
    margin-top: 1rem;
  `}
`;

const Layout = ({
  title,
  children,
  isDark = false,
  showNavigation = true,
  showGradient = true,
}) => {
  return (
    <main>
      <Helmet>
        <title>{`${title} | dnlgrgly`}</title>
      </Helmet>
      <GlobalStyle />
      <Navbar showGradient={showGradient}>
        <Link to="/">
          <Logo
            src={isDark ? LogoBlack : LogoWhite}
            showGradient={showGradient}
            alt="dnlgrgly logo"
          />
        </Link>
      </Navbar>
      {children}
    </main>
  );
};

export default Layout;
