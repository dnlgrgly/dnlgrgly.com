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

const Footer = styled.footer`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.color.background};

  a,
  b,
  p {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }

  img {
    width: 4rem;
    margin: 0 0 0.5rem 0;
  }

  h4 {
    color: #fff;
    font-family: d0GBYTe, sans-serif;
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }

  > div {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .flex-2 {
    flex: 2;
  }
`;

const findThumbnail = (name) => {
  switch (name) {
    case "budipest":
      return <meta property="og:image" content={BudipestThumbnail} />;
    case "riddimfutar":
      return <meta property="og:image" content={RiddimfutarThumbnail} />;
    default:
      return <meta property="og:image" content={DefaultThumbnail} />;
  }
};

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
    <>
      <Helmet>
        <title>{`${title} | dnlgrgly`}</title>
        <description>{description}</description>
        <canonical>https://dnlgrgly.com</canonical>
        {findThumbnail(thumbnail)}
      </Helmet>
      <main>
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
      <Footer className="padding">
        <div className="s">
          <Logo
            src={LogoWhite}
            showGradient={showGradient}
            alt="dnlgrgly logo"
          />
          <b>Copyright 2021</b>
          <p>Dániel Gergely</p>
        </div>
        <div>
          <h4>projects</h4>
          <a href="https://dnlgrgly.com/budipest">Budipest</a>
          <a href="https://dnlgrgly.com/riddimfutar">RIDDIMFUTÁR</a>
        </div>
        <div>
          <h4>social</h4>
          <a href="https://linkedin.com/in/dnlgrgly">LinkedIn</a>
          <a href="https://t.me/dnlgrgly">Telegram</a>
          <a href="mailto:dnlgrgly@gmail.com">email</a>
        </div>
        <div>
          <h4>other</h4>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </Footer>
    </>
  );
};

export default Layout;
