import React, { Component } from 'react';
import * as S from './appTitleStyles';

export default class AppTitles extends Component {
  render() {
    return (
      <S.MAIN>
        <S.TODO>Todo App</S.TODO>
        <S.YouTube>Movie DB (API)</S.YouTube>
      </S.MAIN>
    )
  }
}