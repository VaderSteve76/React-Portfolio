import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';

const slideIn = keyframes`${slideInRight}`;

const MAIN = styled.div`
  animation: 2.7s ${slideIn};
  height: 450px;
  width: 600px;
  box-shadow: 8px 8px 8px black;
  border-radius: 6px;
  background: rgb(154, 154, 154);
  margin-top: 75px;
`;

export default class TodoApp extends Component {
  render() {
    return (
      <MAIN>
        
      </MAIN>
    )
  }
}
