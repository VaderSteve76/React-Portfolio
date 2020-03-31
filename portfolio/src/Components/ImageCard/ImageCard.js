import React, { Component } from 'react';
import * as S from './imageCardStyles';

export default class ImageCard extends Component {
  render() {
    return (
      <S.MAIN>
        <S.IMG></S.IMG>
        <S.ABOUT>
        <S.TITLE>About Me</S.TITLE>
          <S.INFO>I am an aspiring developer who is passionate about creating applications
            using the latest technologies. Seeking opportunities where I can join a 
            highly collaborative team as a Front End UI/UX Software Developer with 
            the goal of transitioning into a Tech Lead role. My main technical 
            strengths are focused around User interface and User Experience leveraging 
            the power of React, Redux, Bootstrap, HTML and traditional CSS.</S.INFO>
          <S.INFO>Other things to know about me:</S.INFO>
          <S.INFO>Lover of all things Star Wars!!!</S.INFO>
          <S.INFO>Avid video gamer pc & console</S.INFO>
          <S.INFO>Huge fan of baseball (Rays, Cubs, A's)</S.INFO>
          <S.INFO>Avid fisherman and kayaker</S.INFO>
          <S.INFO>A veteran of the USMC</S.INFO>
      </S.ABOUT>
      </S.MAIN>
      
    )
  }
}