import React, { Component } from 'react';
import * as S from './headerStyles';

export default class MainHeader extends Component {
  render() {
    return (
      <div>
        <S.Header>
          <S.Title>Steve Alverson</S.Title>
        </S.Header>
      </div>
    )
  }
}