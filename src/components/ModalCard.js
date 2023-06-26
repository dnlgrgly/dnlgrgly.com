import React, { useState } from "react";
import styled from "styled-components";
import ButtonMini from "./ButtonMini";
import Arrow from "../images/svg/arrow.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-right: 0.5rem;

  .expanded-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: scroll;
  }

  * {
    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card {
    width: 400px;
    height: 200px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    z-index: 130;
  }

  .card img {
    width: 400px;
    height: 200px;
    object-fit: cover;
    z-index: 120;
  }

  .card h3 {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 25px 15px;
    z-index: 130;
    background: linear-gradient(
      180deg,
      ${(props) => props.theme.color.backgroundTrans} 0%,
      ${(props) => props.theme.color.background} 100%
    );
  }

  .card:hover {
    transform: scale(105%);
    box-shadow: 0 35px 0 ${(props) => props.theme.color.background};
  }

  .card-expanded > h3 {
    padding: 30px 35px;
  }

  .read-more-button {
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0;
    z-index: 15;
  }

  .card:hover ~ .read-more-button {
    bottom: -25px;
    opacity: 1;
  }

  .background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.color.background};
    opacity: 0;
    z-index: 10;
    transition: 0.3s ease-in-out;
  }

  .background-overlay-on {
    opacity: 0.5;
    transition: 0.3s ease-in-out;
  }

  .card-expanded {
    position: absolute;
    margin-top: 10vh;
    left: 50%;
    transform: translate(-50%, 0);
    width: 80%;
    height: 35%;
    top: 0;
    border-radius: 25px 25px 0 0;
  }

  .card-expanded > img {
    width: 100%;
    height: 100%;
  }

  .content {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 80%;
    background-color: ${(props) => props.theme.color.background};
    z-index: 30;
    top: 45%;
    height: 100%;
    padding: 40px;
  }
`;

const ModalCard = ({ coverImage, title, descriptionMarkdown }) => {
  const [expanded, setExpanded] = useState(false);

  console.log(expanded);

  return (
    <Wrapper className={expanded && "expanded-wrapper"}>
      {expanded && (
        <div
          className={`background-overlay ${
            expanded && "background-overlay-on"
          }`}
          onClick={() => setExpanded(false)}
        />
      )}
      <div
        className={`card ${expanded && "card-expanded"}`}
        onClick={() => setExpanded(true)}
      >
        <img
          alt="asdasdasd"
          src="https://img.freepik.com/premium-photo/colorful-pattern-with-words-bold-bottom_771703-6073.jpg?w=2000"
        />
        <h3>Budipest</h3>
      </div>
      <ButtonMini color="orange" className="read-more-button">
        Read more <Arrow />
      </ButtonMini>
      {expanded && (
        <div className="content">
          <p>Hili hali haliho, ez itt a Budipest kontent</p>
          <b>Mi az a Budipest???AS?A</b>
        </div>
      )}
    </Wrapper>
  );
};

export default ModalCard;
