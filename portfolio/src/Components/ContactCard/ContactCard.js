import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

const MainCard = styled.div`
  animation: 5s ${fadeInAnimation};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  background: rgb(154, 154, 154);
  box-shadow: 8px 8px 8px black;
  height: 40px;
  width: 600px;
  margin: 0 auto;
  margin-top: 25px;
  text-align: center;
`;


export default class Card extends Component {
  render() {
    return (
      <MainCard>
        <a href="mailto:salverson1976@gmail.com">My Email</a><br></br><br></br>
        <a href="https://docs.google.com/document/d/1LhFzKB7oz46joR0AwfVRU9ruR6lbwJFrvQVb6yu4BgA/edit?usp=sharing">My Resume</a><br></br><br></br>
        <a href="https://www.linkedin.com/in/steve-alverson-159810131/">LinkedIn</a><br></br><br></br>
        <a href="https://github.com/VaderSteve76">Github</a>
      </MainCard>
    )
  }
}
