import styled from 'styled-components';

export const MovieApp = styled.div`
  height: 450px;
  width: 595px;
  box-shadow: 8px 8px 8px black;
  border-radius: 5px;
  background: rgb(154, 154, 154);
  // display: flex;
  // align-items: center;
  justify-content: space-around;
`;

export const SearchBox = styled.div`
  display: block;
  width: 575px;
  padding: 10px;
  background-color: #eee;
  border-radius: 5px;
  color: #53565a;
  font-size: 20px;
  font-weight: 300;
  transition: 0.4s ease-out;
`;

export const Results1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70px;
  width: 70px;
  padding: 5px;
`;

export const Results2 = styled.div`
  width: 594px;
  height: 406px;
  display: flex;
  flex-wrap: wrap;
`;