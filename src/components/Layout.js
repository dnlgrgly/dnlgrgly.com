import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import styled from "styled-components";

import LogoWhite from "../images/logo-white.svg";
import LogoBlack from "../images/logo-black.svg";

import DefaultThumbnail from "../images/thumbnails/default.png";
import BudipestThumbnail from "../images/thumbnails/budipest.png";
import RiddimfutarThumbnail from "../images/thumbnails/riddimfutar.png";

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

const findThumbnail = (name) => {
  switch(name) {
    case "budipest":
      return <meta property="og:image" content={BudipestThumbnail} />
    case "riddimfutar":
      return <meta property="og:image" content={RiddimfutarThumbnail} />
    default:
      return <meta property="og:image" content={DefaultThumbnail} />
  }
}

const Layout = ({
  title,
  description = "Hi! I'm Daniel Gergely, a full-stack web and mobile engineer + a designer-ish.",
  thumbnail = "default",
  children,
  isDark = false,
  showNavigation = true,
  showGradient = true,
}) => {
  return (
    <main>
      <Helmet>
        <title>{`${title} | dnlgrgly`}</title>
        <description>{description}</description>
        <canonical>https://dnlgrgly.com</canonical>
        {findThumbnail(thumbnail)}
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
