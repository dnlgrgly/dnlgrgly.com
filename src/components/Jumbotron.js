import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: -10rem;
  height: calc(100vh - 2rem);
  width: 100%;

  @media ${(props) => props.theme.device.tablet} {
    margin-top: -10rem;
  }

  .left,
  .right {
    display: flex;
    align-items: center;
  }

  .left {
    flex: 6;

    @media ${(props) => props.theme.device.laptop} {
      flex: 3;
    }
  }

  .right {
    flex: 4;
    justify-content: flex-end;

    display: none;

    @media ${(props) => props.theme.device.tablet} {
      display: flex;
    }
  }

  img {
    width: 60%;
    margin: auto 15% auto 25%;

    @media ${(props) => props.theme.device.laptop} {
      width: 40%;
      margin: auto 20% auto 40%;
    }
  }
`;

const Jumbotron = ({ leftColumn, rightColumn }) => (
  <Wrapper className="padding">
    <div className="left">{leftColumn}</div>
    <div className="right">{rightColumn}</div>
  </Wrapper>
);

export default Jumbotron;
