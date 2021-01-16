import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import background from "../images/placeholder.png";

import Container from "./Container";

const BackgroundStyle = createGlobalStyle`
  body {
    background-image: url(${background});
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #B3E5FC;
    background-position: center bottom;
  }

  h1 {
    color: black;
  }

  h2 {
    color: #21495c;
  }

  h1,
  h2 {
    text-align: right;
  }
`;

const TextWrapper = styled.div`
  margin: 0;
  right: 4rem;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  max-width: 45%;
`;

const Placeholder = ({ title, subtitle }) => (
  <Container isDark={true}>
    <BackgroundStyle />
    <TextWrapper>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </TextWrapper>
  </Container>
);

export default Placeholder;
