import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375em;
  font-size: 1.2em;
  font-weight: 500;
  text-decoration: none;
  line-height: 1.2;
  cursor: pointer;
  transition: 0.2s;
  will-change: transform;
  outline: none;
  background: #222;
  color: hsl(0, 0%, 100%);
  border: none;

  &:focus-visible {
    outline: none;
  }

  &:active {
    transform: translateX(2rem);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    background: rgb(201, 195, 195);
    transform: scale(1.1);
    color: black;
  }
`;

const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;