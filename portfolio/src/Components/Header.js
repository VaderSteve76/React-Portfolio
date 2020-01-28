import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInRight } from 'react-animations';

const slideIn = keyframes`${slideInRight}`;

const Header = styled.div`
  animation: 2s ${slideIn};
  background-color: rgb(82, 170, 254);
  height: 75px;
`;

const Title = styled.div`
  font-size: 2.5em;
  margin: 0 auto;
  padding-top: 15px;
  letter-spacing: 8px;
  font-weight: bold;
  text-shadow: 4px 3px 0px #7A7A7A;
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
