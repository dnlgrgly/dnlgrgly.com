import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import background from "../images/placeholder.png";

import Layout from "./Layout.js";

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
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  right: 0;
  margin: 0 1rem;
  max-width: 100%;

  @media ${(props) => props.theme.device.mobileM} {
    max-width: 80%;
  }

  @media ${(props) => props.theme.device.mobileL} {
    max-width: 70%;
  }

  @media ${(props) => props.theme.device.tablet} {
    margin: 0 2rem;
    max-width: 50%;
  }

  @media ${(props) => props.theme.device.tablet} {
    max-width: 50%;
  }

  @media ${(props) => props.theme.device.laptop} {
    margin: 0 4rem;
    max-width: 40%;
  }
`;

const Placeholder = ({ title, subtitle }) => (
  <Layout isDark={true}>
    <BackgroundStyle />
    <TextWrapper>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </TextWrapper>
  </Layout>
);

export default Placeholder;
