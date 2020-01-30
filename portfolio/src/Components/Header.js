import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';

const slideIn = keyframes`${slideInRight}`;

const Header = styled.div`
  animation: 3.3s ${slideIn};
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
  text-shadow: 8px 8px 8px black;
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
