import React, { useState } from "react";
import styled from "styled-components";

import Heart from "../images/svg/heart.svg";

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

  .thanks-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${(props) => props.theme.color.redFg};
    padding: 1rem;
    border-radius: 0.2rem;

    p {
      color: ${(props) => props.theme.color.redBg};
    }

    svg {
      width: 2rem;
      margin-right: 1.5rem;
      height: auto;
    }
  }
`;

const Form = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  return (
    <FormWrapper
      name="Contact Form"
      method="POST"
      data-netlify="true"
      action="/thanks"
    >
      <div>
        <label>
          Your Name:{" "}
          <input type="text" name="name" placeholder="Richard Hendricks" />
        </label>
      </div>
      <div>
        <label>
          Your Email:{" "}
          <input type="email" name="email" placeholder="ceo@piedpiper.com" />
        </label>
      </div>
      <div>
        <label>
          Message:{" "}
          <textarea
            name="message"
            placeholder="Hello Daniel, I've got an awesome opportunity waiting just for you in our SF office..."
          />
        </label>
      </div>
      {!hasSubmitted ? (
        <div>
          <button
            id="button"
            type="submit"
            onClick={() => setHasSubmitted(true)}
          >
            Send message
          </button>
        </div>
      ) : (
        <div className="thanks-container">
          <Heart />
          <p>Thank you for contacting me. I'll get back to you ASAP.</p>
        </div>
      )}
    </FormWrapper>
  );
};

export default Form;
