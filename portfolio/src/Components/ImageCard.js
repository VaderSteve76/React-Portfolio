import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';
import tea from '../Img/tea.jpeg';

const slideIn = keyframes`${slideInLeft}`;

const IMG = styled.div`
  animation: 2.5s ${slideIn};
  // height: 180px;
  // width: 224px;
  height: 450px;
  width: 600px;
  border-radius: 6px;
  background-image: url(${tea});
  background-position: center; 
  background-repeat: no-repeat; 
  // background-size: contain cover; 
  background-size: 600px 450px;
  margin: 0 auto;
  margin-top: 25px;
`;


export default class ImageCard extends Component {
  render() {
    return (
      <IMG></IMG>
    )
  }
}
