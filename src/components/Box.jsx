import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const Box = () => {

  const [isAnimating, setIsAnimating] = useState(false);

  const animateBoxHandler = () => {
    setIsAnimating((prevState) => !prevState);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 2000)
  };

  return (
    <StyledBox onClick={animateBoxHandler} animate={isAnimating}>

    </StyledBox>
  );
};

export default Box;

// Animations:

const activeAnimation = keyframes`
  0% {
    transform: scale(1) rotate(0)
    border-radius: 0;
  }
  25% {
    border-radius: 25%;
  }
  50% {
    transform: scale(1.5) rotate(90deg);
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25), 0px 0px 10px 10px rgba(0, 0, 0, 0.15);
  }
  75 % {
    border-radius: 25%;
  }
  100% {
    transform: scale(1) rotate(0)
    border-radius: 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
`;

const pulse = keyframes`
  0% { transform: scale(1)}
  50% { transform: scale(1.1); box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25), 0px 0px 10px 6px rgba(0, 0, 0, 0.15); }
  100% { transform: scale(1); box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25); }
`;

// Styles:

const StyledBox = styled.div`
  width: 20rem;
  height: 20rem;
  border: 1px solid black;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background-color: grey;

  transition: all 0.3s ease;

  ${({ animate }) =>
    animate &&
    css`
      animation-name: ${activeAnimation};
      animation-duration: 2s;
      animation-fill-mode: forwards;
      background-color: steelblue;
    `
  }

  &:hover {
    ${({ animate }) =>
    !animate &&
  css`
      animation-name: ${pulse};
      animation-duration: 1s;
      animation-iteration-count: infinite;
      background-color: lightgrey;
    `
  }
    
`;