import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';

const slideIn = keyframes`${slideInRight}`;

const MAIN = styled.div`
  animation: 2.7s ${slideIn};
  height: 75px;
  width: 600px;
  box-shadow: 8px 8px 8px black;
  border-radius: 6px;
  background: rgb(154, 154, 154);
  margin-top: 75px;
`;

const TITLE = styled.div`
  font-family: Trebuchet MS;
  font-size: 2.5em;
  text-align: center;
  text-shadow: 2px 2px 2px black;
  transform: scale(1.3) skew(-8deg, 0deg);
  padding-top: 12px;
`;

export default class TodoApp extends Component {
  render() {
    return (
      <MAIN>
        <TITLE>Todo App</TITLE>
      </MAIN>
    )
  }
}
