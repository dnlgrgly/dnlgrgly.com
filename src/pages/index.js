import * as React from "react";
import styled from "styled-components";

import Layout from "../components/Layout.js";
import Jumbotron from "../components/Jumbotron.js";
import Home from "../images/home.svg";

const Container = styled.div`
  background-color: ${(props) => props.theme.color[`${props.color}Bg`]};

  .dividor {
    background-color: ${(props) => props.theme.color[props.color]};
    width: 6rem;
    height: 0.3rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    margin-bottom: 1rem;
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
`;

const IndexPage = () => (
  <Layout title="home">
    <Jumbotron
      leftColumn={
        <h1>
          full-stack web and mobile engineer + designer<i>-ish</i>
        </h1>
      }
      rightColumn={<img src={Home} alt="developer icon" />}
    />
    <Container color="red" className="padding">
      <div className="dividor" />
      <h2>about me</h2>
      <p>
        Lórum ipse komonár mindig tarol valamilyen ronás csúnyost: unkát,
        tetéket, bazmust, akármit. Jelen rázás tehát a sanyag istság ma pinált
        stalója.
      </p>
    </Container>
    <Container color="orange" className="padding">
      <div className="dividor" />
      <h2>projects</h2>
      <p>
        Lórum ipse komonár mindig tarol valamilyen ronás csúnyost: unkát,
        tetéket, bazmust, akármit. Jelen rázás tehát a sanyag istság ma pinált
        stalója.
      </p>
    </Container>
    <Container color="yellow" className="padding">
      <div className="dividor" />
      <h2>tutorials</h2>
      <p>
        Lórum ipse komonár mindig tarol valamilyen ronás csúnyost: unkát,
        tetéket, bazmust, akármit. Jelen rázás tehát a sanyag istság ma pinált
        stalója.
      </p>
    </Container>
    <Container color="cyan" className="padding">
      <div className="dividor" />
      <h2>contact me</h2>
      <p>
        Lórum ipse komonár mindig tarol valamilyen ronás csúnyost: unkát,
        tetéket, bazmust, akármit. Jelen rázás tehát a sanyag istság ma pinált
        stalója.
      </p>
    </Container>
  </Layout>
);

export default IndexPage;
