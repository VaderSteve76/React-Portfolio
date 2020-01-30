import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';
import tea from '../Img/tea.jpeg';

const slideIn = keyframes`${slideInLeft}`;

const MAIN = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const IMG = styled.div`
  animation: 2.7s ${slideIn};
  height: 450px;
  width: 600px;
  box-shadow: 8px 8px 8px black;
  border-radius: 6px;
  background-image: url(${tea});
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: 600px 450px;
  margin-top: 25px;
`;

const ABOUT = styled.div`
  animation: 2.7s ${slideIn};
  height: 450px;
  width: 600px;
  box-shadow: 8px 8px 8px black;
  border-radius: 6px;
  margin-top: 25px;
  background: rgb(154, 154, 154);
`;

const TITLE = styled.div`
  font-weight: bold;
  font-size: 1.8em;
  text-align: center;
  padding: 10px;
`;

const INFO = styled.div`
  font-size: 1.3em;
  text-align: center;
  padding: 10px;
`;

export default class ImageCard extends Component {
  render() {
    return (
      <MAIN>
        <IMG></IMG>
        <ABOUT>
        <TITLE>About Me</TITLE>
          <INFO>I am an aspiring developer who is passionate about creating applications
            using the latest technologies. Seeking opportunities where I can join a 
            highly collaborative team as a Front End UI/UX Software Developer with 
            the goal of transitioning into a Tech Lead role. My main technical 
            strengths are focused around User interface and User Experience leveraging 
            the power of React, Redux, Bootstrap, HTML and traditional CSS.</INFO>
          <INFO>Other things to know about me:</INFO>
          <INFO>Lover of all things Star Wars!!!</INFO>
          <INFO>Avid video gamer pc & console</INFO>
          <INFO>Huge fan of baseball (Rays, Cubs, A's)</INFO>
          <INFO>Avid fisherman and kayaker</INFO>
          <INFO>Am a veteran of the USMC</INFO>
      </ABOUT>
      </MAIN>
      
    )
  }
}
