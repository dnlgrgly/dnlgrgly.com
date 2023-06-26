import styled from "styled-components";

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

export default Button;
