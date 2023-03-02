import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: #ffd700;
  padding: 10px;
  font-family: "Press Start 2P", cursive;
  &:hover {
    background-color: #ffffe0;
  }
  &:hover {
    background-color: #ffff;
  }
  color: black; 
  &:focus {
    outline: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Button(props) {
  const { size } = props;

  return (
    <ButtonWrapper size={size} className={props.className}>
      {props.children}
    </ButtonWrapper>
  );
}
