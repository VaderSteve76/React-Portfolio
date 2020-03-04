import styled from 'styled-components';

export const MovieApp = styled.div`
  height: 450px;
  width: 595px;
  box-shadow: 8px 8px 8px black;
  border-radius: 5px;
  background: rgb(154, 154, 154);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SearchBox = styled.div`
  display: block;
  width: 100%;
  padding: 15px;
  border: none;
  outline: none;
  background: none;
  background-color: #eee;
  //border-radius: 8px;
  color: #53565a;
  font-size: 20px;
  font-weight: 300;
  transition: 0.4s ease-out;
`;