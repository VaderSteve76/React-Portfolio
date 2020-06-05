import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';

const slideIn = keyframes`${slideInRight}`;

export const Header = styled.div`
  animation: 3.2s ${slideIn};
  height: 75px;
  width: 75%;
  margin: 0 auto;
  border-radius: 5px;
`;

export const Title = styled.div`
  font-size: 2.5em;
  font-family: Trebuchet MS;
  // color: rgb(40, 40, 255);
  margin: 0 auto;
  padding-top: 15px;
  letter-spacing: 8px;
  font-weight: bold;
  text-shadow: 2px 2px 2px grey;
  text-align: center;
  transform: scale(1.5) skew(-8deg, 0deg);
`;