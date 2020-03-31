import React, { Component } from 'react';
import * as S from './appContainerStyles';
import TodoApp from '../TodoApp/TodoApp';
import Movie from '../MovieDB/MovieDB';


export default class AppContainer extends Component {
  render() {
    return (
      <S.AppMain>
        <TodoApp />
        <Movie />
      </S.AppMain>
    )
  }
}