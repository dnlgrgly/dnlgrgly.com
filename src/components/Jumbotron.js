import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: -4rem;
  height: calc(100vh - 4rem);
  width: calc(100vw - 2rem);

  @media ${(props) => props.theme.device.tablet} {
    margin-top: -6rem;
    height: calc(100vh - 6rem);
    width: calc(100vw - 4rem);
  }

  @media ${(props) => props.theme.device.laptop} {
    width: calc(100vw - 8rem);
  }

  .left,
  .right {
    display: flex;
    flex: 1;
    align-items: center;
  }

  .right {
    justify-content: flex-end;

    display: none;
    @media ${(props) => props.theme.device.laptop} {
      display: flex;
    }
  }
`;

const Jumbotron = ({ title, subtitle, rightColumn }) => (
  <Wrapper>
    <div className="left">
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
    <div className="right">{rightColumn}</div>
  </Wrapper>
);

export default Jumbotron;
