import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';

const slideIn = keyframes`${slideInLeft}`;

export const AppMain = styled.div`
  animation: 2.7s ${slideIn};
  margin-top: 75px;
  display: flex;
  justify-content: space-around;
  @media(max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    height: 900px;
    margin-top: 25px;
  }
`;