import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const MainCard = styled.div`
  animation: 5s ${fadeInAnimation};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  background: rgb(154, 154, 154);
  box-shadow: 8px 8px 8px black;
  height: 40px;
  width: 600px;
  margin: 0 auto;
  margin-top: 25px;
  text-align: center;
`;