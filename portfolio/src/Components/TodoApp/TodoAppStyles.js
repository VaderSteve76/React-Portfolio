import styled from 'styled-components';

export const TodoApp = styled.div`
  height: 450px;
  width: 45%;
  box-shadow: 8px 8px 8px black;
  border-radius: 5px;
  background: rgb(154, 154, 154);
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media(max-width: 1024px) {
    height: 400px;
  }
`;

export const TodoList = styled.div`
  height: 300px;
  width: 200px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
`;