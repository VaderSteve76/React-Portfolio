import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';

const slideIn = keyframes`${slideInRight}`;

const Header = styled.div`
  animation: 2.1s ${slideIn};
  // background-color: rgb(82, 170, 254);
  // background-color: rgb(14, 38, 225);
  height: 75px;
  width: 75%;
  margin: 0 auto;
  border-radius: 5px;
`;

const Title = styled.div`
  font-size: 2.5em;
  font-family: Trebuchet MS;
  color: rgb(40, 40, 255);
  margin: 0 auto;
  padding-top: 15px;
  letter-spacing: 8px;
  font-weight: bold;
  text-shadow: 2px 2px 0px #7A7A7A;
  text-align: center;
  transform: scale(1.5) skew(-8deg, 0deg);
`;

export default class MainHeader extends Component {
  render() {
    return (
      <div>
        <Header>
          <Title>Steve Alverson</Title>
        </Header>
      </div>
    )
  }
}
