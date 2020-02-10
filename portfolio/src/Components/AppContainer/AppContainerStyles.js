import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';

const slideIn = keyframes`${slideInLeft}`;

export const AppMain = styled.div`
  animation: 2.7s ${slideIn};
  margin-top: 75px;
`;