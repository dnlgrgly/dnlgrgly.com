import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import styled from "styled-components";

import LogoWhite from "../images/svg/logo-white.svg";
import LogoBlack from "../images/svg/logo-black.svg";

import DefaultThumbnail from "../images/thumbnails/default.png";
import BudipestThumbnail from "../images/thumbnails/budipest.png";
import RiddimfutarThumbnail from "../images/thumbnails/riddimfutar.png";

import GlobalStyle from "../styles/globalStyle.js";

const Spacer = styled.div`
  height: 2rem;
`;

const Navbar = styled.div`
  position: -webkit-sticky;
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
      ${theme.color.backgroundTrans}
    );
  `}

  svg {
    margin-top: 1rem;

    width: 8rem;

    @media ${(props) => props.theme.device.tablet} {
      width: 10rem;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.color.background};

  flex-direction: column;

  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
  }

  a,
  b,
  p {
    font-size: 1rem;
    margin-bottom: 0.4rem;

    @media ${(props) => props.theme.device.tablet} {
      font-size: 0.9rem;
      margin-bottom: 0.3rem;
    }
  }

  svg {
    width: 8rem;
    height: auto;
    margin: 0 0 1rem 0;

    @media ${(props) => props.theme.device.tablet} {
      width: 4rem;
      margin: 0 0 0.5rem 0;
    }
  }

  h4 {
    color: #fff;
    font-family: d0GBYTe, sans-serif;
    font-size: 1.2rem;
    margin-top: 1.25rem;
    margin-bottom: 1rem;

    @media ${(props) => props.theme.device.tablet} {
      font-size: 1.1rem;
      margin-top: 0;
      margin-bottom: 0.75rem;
    }
  }

  > div {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .flex-2 {
    @media ${(props) => props.theme.device.laptop} {
      flex: 2;
    }
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
            {isDark ? (
              <LogoBlack alt="dnlgrgly logo" />
            ) : (
              <LogoWhite alt="dnlgrgly logo" />
            )}
          </Link>
        </Navbar>
        {children}
      </main>
      <Footer className="padding">
        <div className="flex-2">
          <LogoWhite alt="dnlgrgly logo" />
          <b>Copyright 2023</b>
          <p>Dániel Gergely</p>
        </div>
        <div>
          <h4>top projects</h4>
          <Link to="/budipest">Budipest</Link>
          <Link href="/riddimfutar">RIDDIMFUTÁR</Link>
          <Link href="/blinders">{"(color || shape)blinder"}</Link>
        </div>
        <div>
          <h4>social</h4>
          <a href="https://linkedin.com/in/dnlgrgly">LinkedIn</a>
          <a href="https://github.com/dnlgrgly">GitHub</a>
          <a href="https://t.me/dnlgrgly">Telegram</a>
          <a href="mailto:dnlgrgly@icloud.com">email</a>
        </div>
        <div>
          <h4>other</h4>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </Footer>
    </>
  );
};

export default Layout;
