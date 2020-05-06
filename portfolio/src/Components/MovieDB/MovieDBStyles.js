import styled from 'styled-components';

export const MovieApp = styled.div`
  height: 450px;
  width: 45%;
  box-shadow: 8px 8px 8px black;
  border-radius: 5px;
  background: rgb(154, 154, 154);
  justify-content: space-around;
  @media*(max-width: 1024px) {
    height: 400px;
  }
`;

export const SearchBox = styled.div`
  display: block;
  width: 96.5%;
  padding: 10px;
  background-color: #eee;
  border-radius: 5px;
  color: #53565a;
  font-size: 20px;
  font-weight: 300;
  transition: 0.4s ease-out;
`;

export const Results1 = styled.div`
  // border: solid red 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70px;
  width: 70px;
  padding: 5px;
`;

export const Results2 = styled.div`
  // border: solid red 1px;
  display: flex;
  flex-wrap: wrap;
  width: 594px;
  height: 406px;
`;

export const Popup = styled.div`
  position: fixed;
  bottom: 250px;
  left: 550px;
  width: 550px;
  height: 550px;
  border-radius: 5px;
  padding: 15px;
  background-color: rgb(154, 154, 154);
  overflow-y: scroll;
  @media(max-width: 1024px) {
    left: 350px;
  }
`;