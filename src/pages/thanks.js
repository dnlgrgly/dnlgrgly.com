import * as React from "react";
import styled from "styled-components";

import Heart from "../images/svg/heart.svg";

import Jumbotron from "../components/Jumbotron.js";
import Layout from "../components/Layout.js";

const Wrapper = styled.div`
  h1 {
    margin-bottom: 1rem;
  }
`;

const Thanks = () => (
  <Layout title="home">
    <Jumbotron
      leftColumn={
        <Wrapper>
          <h1>thank you for contacting me</h1>
          <p>I will try to get back to you as soon as possible.</p>
        </Wrapper>
      }
      rightColumn={<Heart alt="heart icon" />}
    />
  </Layout>
);

export default Thanks;
