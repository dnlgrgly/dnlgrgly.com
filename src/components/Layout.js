import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import styled from "styled-components";

import LogoWhite from "../images/logo-white.svg";
import LogoBlack from "../images/logo-black.svg";

import GlobalStyle from "../styles/globalStyle.js";

const Spacer = styled.div`
  height: 2rem;
`;

const Navbar = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  height: 10rem;
  padding-top: 0;
  padding-bottom: 0;

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
      <Spacer />
      <Navbar className="padding" showGradient={showGradient}>
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
