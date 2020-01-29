import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';
// import vader from '../Img/vader.jpeg';

const slideIn = keyframes`${slideInRight}`;

const IMG = styled.div`
  animation: 2.5s ${slideIn};
  height: 180px;
  width: 300px;
  background: black;
  // margin: 0 auto;
  margin-right: 25px;
  border-radius: 5px;
`;


export default class ImageCard extends Component {
  render() {
    return (
      <IMG>
        
      </IMG>
    )
  }
}
