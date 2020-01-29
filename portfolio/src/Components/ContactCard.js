import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';

const fadeInAnimation = keyframes`${slideInLeft}`;

const MainCard = styled.div`
  animation: 2.5s ${fadeInAnimation};
  border-radius: 5px;
  background: rgb(154, 154, 154);
  box-shadow: 8px 8px 8px black;
  height: 180px;
  width: 300px;
  margin-top: 25px;
  margin-left: 25px;
  text-align: center;
`;


export default class Card extends Component {
  render() {
    return (
      <MainCard>
        <br></br>
        <h1>Contact Info</h1><br></br>
        <a href="mailto:salverson1976@gmail.com">My Email</a><br></br><br></br>
        <a href="https://docs.google.com/document/d/1LhFzKB7oz46joR0AwfVRU9ruR6lbwJFrvQVb6yu4BgA/edit?usp=sharing">My Resume</a><br></br><br></br>
        <a href="https://www.linkedin.com/in/steve-alverson-159810131/">LinkedIn</a><br></br><br></br>
        <a href="https://github.com/VaderSteve76">Github</a>
      </MainCard>
    )
  }
}
