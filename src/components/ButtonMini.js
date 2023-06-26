import styled from "styled-components";
import Button from "./Button"

const ButtonMini = styled(Button)`
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  width: fit-content;
  border-bottom: 1px solid ${(props) => props.theme.color[props.color]};

  svg {
    height: 0.5rem;
    margin-left: 0.5rem;
  }
`;

export default ButtonMini;
