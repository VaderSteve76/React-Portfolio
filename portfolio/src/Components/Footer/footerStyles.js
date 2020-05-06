import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const Footer = styled.div`
  animation: 5s ${fadeInAnimation};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  background: rgb(154, 154, 154);
  box-shadow: 8px 8px 8px black;
  height: 50px;
  width: 553px;
  margin: 0 auto;
  padding: 10px;
  margin-top: 25px;
  text-align: center;
  font-family: Trebuchet MS;
  font-size: 1em;
  text-align: center;
`;