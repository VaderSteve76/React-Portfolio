import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';

const slideIn = keyframes`${slideInLeft}`;

export const TodoApp = styled.div`
  animation: 2.7s ${slideIn};
  height: 450px;
  width: 595px;
  box-shadow: 8px 8px 8px black;
  border-radius: 5px;
  background: rgb(154, 154, 154);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TodoList = styled.div`
  height: 300px;
  width: 200px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
`;