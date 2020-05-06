import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';
import tea from '../../Img/tea.jpeg';

const slideIn = keyframes`${slideInLeft}`;

export const MAIN = styled.div`
  display: flex;
  justify-content: space-around;
  @media(max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const IMG = styled.div`
  animation: 2.7s ${slideIn};
  height: 450px;
  width: 45%;
  box-shadow: 8px 8px 8px black;
  border-radius: 5px;
  background-image: url(${tea});
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: 600px 450px;
  margin-top: 25px;
`;

export const ABOUT = styled.div`
  animation: 2.7s ${slideIn};
  height: 450px;
  width: 45%;
  box-shadow: 8px 8px 8px black;
  border-radius: 5px;
  margin-top: 25px;
  background: rgb(154, 154, 154);
`;

export const TITLE = styled.div`
  font-family: Trebuchet MS;
  font-weight: bold;
  font-size: 1.8em;
  text-align: center;
  text-shadow: 2px 2px 2px black;
  padding: 10px;
`;

export const INFO = styled.div`
  font-family: Trebuchet MS;
  font-size: 1.2em;
  text-align: center;
  padding: 10px;
`;