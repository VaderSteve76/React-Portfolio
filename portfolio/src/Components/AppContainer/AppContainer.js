import React, { Component } from 'react';
import * as S from './AppContainerStyles';
import TodoApp from '../TodoApp/TodoApp';


export default class AppContainer extends Component {
  render() {
    return (
      <S.AppMain>
        <TodoApp />
      </S.AppMain>
    )
  }
}