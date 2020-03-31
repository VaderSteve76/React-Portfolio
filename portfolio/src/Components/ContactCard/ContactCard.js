import React, { Component } from 'react';
import * as S from './contactCardStyles';

export default class Card extends Component {
  render() {
    return (
      <S.MainCard>
        <a href="mailto:salverson1976@gmail.com">My Email</a><br></br><br></br>
        <a href="https://docs.google.com/document/d/1LhFzKB7oz46joR0AwfVRU9ruR6lbwJFrvQVb6yu4BgA/edit?usp=sharing">My Resume</a><br></br><br></br>
        <a href="https://www.linkedin.com/in/steve-alverson-159810131/">LinkedIn</a><br></br><br></br>
        <a href="https://github.com/VaderSteve76">Github</a>
      </S.MainCard>
    )
  }
}