/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

/* 导入外部组件类 */
var Main = require('./Component/Main/XMGMain');
var Test = require('./Component/TestFolder/Test')

export default class App extends Component {
  render() {
    return (
      <Main />
      // <Test />
    );
  }
}


