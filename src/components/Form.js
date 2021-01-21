import * as React from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  color: ${(props) => props.theme.color[`cyanFg`]};

  label {
    font-weight: bold;
  }

  input,
  textarea {
    font-weight: normal;
    padding: 0.5rem;
    width: 100%;
    color: white;
    background: none;
    margin: 0.5rem 0 2rem 0;
    border-radius: 0;
    border: none;
    outline: none;
    border-bottom: 2px ${(props) => props.theme.color.cyanFg} solid;

    @media ${(props) => props.theme.device.tablet} {
      margin-bottom: 2rem;
    }

    ::placeholder {
      color: white;
      opacity: 0.3;
    }
  }

  textarea {
    min-height: 5rem;
  }

  button {
    font-weight: bold;
    padding: 0.75rem 1rem;
    border-radius: 0.2rem;
    color: ${(props) => props.theme.color.cyanBg};
    background-color: ${(props) => props.theme.color.cyanFg};
  }
`;

const Form = ({ leftColumn, rightColumn }) => (
  <FormWrapper name="contact" method="POST" data-netlify="true">
    <div>
      <label>
        Your Name: <input type="text" name="name" placeholder="Péter Árvai" />
      </label>
    </div>
    <div>
      <label>
        Your Email:{" "}
        <input type="email" name="email" placeholder="ceo@prezi.com" />
      </label>
    </div>
    <div>
      <label>
        Message:{" "}
        <textarea
          name="message"
          placeholder="Hello Daniel, I've got an awesome opportunity waiting just for you..."
        />
      </label>
    </div>
    <div>
      <button type="submit">Send message</button>
    </div>
  </FormWrapper>
);

export default Form;
