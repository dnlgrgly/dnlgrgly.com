import * as React from "react";
import styled from "styled-components";

import me from "../images/me.jpg";

import GitHubIcon from "../images/svg/social/github.svg";
import LinkedInIcon from "../images/svg/social/linkedin.svg";
import TelegramIcon from "../images/svg/social/telegram.svg";

import Arrow from "../images/svg/arrow.svg";
import Home from "../images/svg/home.svg";

import Button from "../components/Button";
import Form from "../components/Form";
import Jumbotron from "../components/Jumbotron.js";
import Layout from "../components/Layout.js";
import ModalCard from "../components/ModalCard";

const Container = styled.div`
  background-color: ${(props) => props.theme.color[`${props.color}Bg`]};

  .dividor {
    background-color: ${(props) => props.theme.color[props.color]};
    width: 6rem;
    height: 0.3rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    margin-bottom: 2rem;

    // dirty anchor hack:
    padding-top: 10rem;
    margin-top: -10rem;
  }

  p {
    color: ${(props) => props.theme.color[`${props.color}Fg`]};

    @media ${(props) => props.theme.device.tablet} {
      max-width: 80%;
    }

    @media ${(props) => props.theme.device.laptopL} {
      max-width: 60%;
    }
  }

  .col-wrapper {
    display: flex;
    flex-direction: column;

    @media ${(props) => props.theme.device.tablet} {
      flex-direction: row;
    }

    img {
      width: 100%;
    }

    > div {
      display: flex;
      flex-direction: column;
    }
  }

  .second-col {
    margin-top: 2rem;
    @media ${(props) => props.theme.device.tablet} {
      margin-top: 0;
    }
  }

  .social-row {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    svg {
      width: 1.75rem;
      height: auto;
    }
  }
`;

const IndexPage = () => (
  <Layout title="home">
    <Jumbotron
      leftColumn={
        <h1>
          full-stack web and mobile engineer + designer<i>-ish</i>
        </h1>
      }
      rightColumn={<Home alt="developer icon" />}
    />
    <Container color="red" className="padding">
      <div className="dividor" />
      <h2 id="about">about me</h2>
      <div className="col-wrapper">
        <div className="flex-3">
          <p>
            Hello, and welcome to my website!{" "}
            <span role="img" aria-label="wave emoji">
              👋
            </span>
            <br />
            <br />
            I'm Daniel Gergely, living in Amsterdam, The Netherlands. I've been
            working as a software developer for over 5 years. On this website,
            you'll find a scrappy overview of my sometimes useful, sometimes
            unusual, but always well thought-out personal projects, dating back
            to 2016. Back then, I was just 13 years old, so sometimes there's
            only so much that's left from a project.{" "}
            <span role="img" aria-label="graduation cap emoji">
              👴⏳
            </span>
            <br />
            <br />
            If you are interested in learning more about my projects, keep on
            scrolling. If you have a cool project in mind or just want to have a
            casual chat with me, don't ever hesitate to contact me!{" "}
            <span role="img" aria-label="email emoji">
              📧
            </span>
          </p>
          <Button color="red" href="#contact">
            Contact me <Arrow />
          </Button>
        </div>
        <div className="flex-1 second-col">
          <img alt="my face" src={me} />
          <div className="social-row">
            <a href="https://github.com/dnlgrgly">
              <GitHubIcon alt="github icon" />
            </a>
            <a href="https://linkedin.com/in/dnlgrgly">
              <LinkedInIcon alt="linkedin icon" />
            </a>
            <a href="https://t.me/dnlgrgly">
              <TelegramIcon alt="telegram icon" />
            </a>
          </div>
        </div>
      </div>
    </Container>
    <Container color="orange" className="padding">
      <div className="dividor" />
      <h2 id="projects">projects</h2>
      <p>
        Mobile apps? Check. Websites? Check. Designs? Check. Weird internet art?
        You get the point.{" "}
        <span role="img" aria-label="heart emoji">
          ✅
        </span>
      </p>
      <ModalCard />
    </Container>
    <Container color="yellow" className="padding">
      <div className="dividor" />
      <h2 id="articles">articles & tutorials</h2>
      <p>
        I've wrote some articles and tutorial series about things that interest
        me, and quite some articles were written about me and my projects. Here,
        you'll find both, read on!{" "}
        <span role="img" aria-label="book emoji">
          📖
        </span>
      </p>
    </Container>
    <Container color="cyan" className="padding">
      <div className="dividor" />
      <h2 id="contact">contact me</h2>
      <div className="col-wrapper">
        <div className="flex-2">
          <p>
            Got inspired by my portfolio? Got a cool project in mind? Just wanna
            have a casual chit-chat with me? Don't hesitate to contact me! I'll
            try to get back to you as soon as possible.{" "}
            <span role="img" aria-label="clock emoji">
              🕓
            </span>
          </p>
        </div>
        <div className="flex-3 second-col">
          <Form />
        </div>
      </div>
    </Container>
  </Layout>
);

export default IndexPage;
