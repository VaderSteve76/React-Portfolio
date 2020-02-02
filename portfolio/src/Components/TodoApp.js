import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';

const slideIn = keyframes`${slideInRight}`;

const MAIN = styled.div`
  animation: 2.7s ${slideIn};
  display: flex;
  justify-content: space-between;
`;

const TODO = styled.div`
  height: 50px;
  width: 575px;
  background: rgb(154, 154, 154);
  box-shadow: 8px 8px 8px black;
  border-radius: 5px;
  margin-top: 75px;
  font-family: Trebuchet MS;
  font-size: 2.5em;
  text-align: center;
  text-shadow: 2px 2px 2px black;
  padding: 10px;
`;

const YouTube = styled.div`
height: 50px;
width: 575px;
background: rgb(154, 154, 154);
box-shadow: 8px 8px 8px black;
border-radius: 5px;
margin-top: 75px;
font-family: Trebuchet MS;
font-size: 2.5em;
text-align: center;
text-shadow: 2px 2px 2px black;
padding: 10px;
`;

export default class TodoApp extends Component {
  render() {
    return (
      <MAIN>
        <TODO>Todo App</TODO>
        <YouTube>YouTube API</YouTube>
      </MAIN>
    )
  }
}
