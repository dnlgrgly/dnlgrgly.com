import * as React from "react";
import styled from "styled-components";
import background from "../images/placeholder.png";

import Layout from "./Layout.js";

const Wrapper = styled.div`
  height: 100vh;
  margin-top: -12rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-image: url(${background});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #b3e5fc;
  background-position: center bottom;

  body {
    background-color: #b3e5fc;
  }

  h1 {
    color: black;
  }

  h3 {
    color: #21495c;
  }

  h1,
  h3 {
    text-align: right;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin: 0 1rem;
  max-width: 100%;

  @media ${(props) => props.theme.device.mobileM} {
    max-width: 90%;
  }

  @media ${(props) => props.theme.device.mobileL} {
    max-width: 80%;
  }

  @media ${(props) => props.theme.device.tablet} {
    margin: 0 2rem;
    max-width: 50%;
  }

  @media ${(props) => props.theme.device.laptop} {
    margin: 0 4rem;
    max-width: 40%;
  }
`;

const Placeholder = ({ title, subtitle }) => (
  <Layout title={title} isDark={true} showGradient={false}>
    <Wrapper>
      <TextWrapper>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </TextWrapper>
    </Wrapper>
  </Layout>
);

export default Placeholder;
