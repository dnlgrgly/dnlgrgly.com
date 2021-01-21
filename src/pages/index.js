import * as React from "react";
import styled from "styled-components";

import me from "../images/me.jpg";

import GitHubIcon from "../images/svg/social/github.svg";
import LinkedInIcon from "../images/svg/social/linkedin.svg";
import RedditIcon from "../images/svg/social/reddit.svg";
import TelegramIcon from "../images/svg/social/telegram.svg";

import Arrow from "../images/svg/arrow.svg";

import Layout from "../components/Layout.js";
import Jumbotron from "../components/Jumbotron.js";
import Home from "../images/svg/home.svg";

const Button = styled.a`
  font-family: d0GBYTe, sans-serif;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  border-bottom: 2px solid ${(props) => props.theme.color[props.color]};
  color: ${(props) => props.theme.color[`${props.color}Fg`]};

  > * {
    color: ${(props) => props.theme.color[`${props.color}Fg`]};
  }

  :hover {
    color: white;
    > * {
      color: white;
    }
  }

  svg {
    height: 1rem;
    margin-left: 1rem;
  }
`;

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

  .flex-3 {
    flex: 3;
  }

  .flex-2 {
    flex: 2;
  }

  .flex-1 {
    flex: 1;
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
            I'm Daniel Gergely. Part-time high-schooler, part-time software
            engineer, full-time content creator. I've been interested in
            computers since a very young age, and ever since then, my whole life
            has been revoling around IT. I've started writing a tech blog and
            creating games for fun in the end of middle school. I've started an
            IT high school in Budapest, far away from my home town, Miskolc.
            Ever since that, one thing has been happening after another, and I'm
            working as a full-stack engineer.{" "}
            <span role="img" aria-label="graduation cap emoji">
              🎓
            </span>
            <br />
            <br />I love working on extraordinary and non-usual projects, and
            I'm a very motivated learner. I craft designs with Adobe XD, mobile
            apps with Flutter and React-Native, websites with React and Gatsby,
            backends with Node.JS, REST, GraphQL and mongoDB, and I'm also
            learning Python.{" "}
            <span role="img" aria-label="snake emoji">
              🐍
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
            <a href="https://reddit.com/u/dandesz198">
              <RedditIcon alt="reddit icon" />
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
        Lórum ipse komonár mindig tarol valamilyen ronás csúnyost: unkát,
        tetéket, bazmust, akármit. Jelen rázás tehát a sanyag istság ma pinált
        stalója.
      </p>
    </Container>
    <Container color="yellow" className="padding">
      <div className="dividor" />
      <h2 id="tutorials">tutorials</h2>
      <p>
        Lórum ipse komonár mindig tarol valamilyen ronás csúnyost: unkát,
        tetéket, bazmust, akármit. Jelen rázás tehát a sanyag istság ma pinált
        stalója.
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
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    </Container>
  </Layout>
);

export default IndexPage;
