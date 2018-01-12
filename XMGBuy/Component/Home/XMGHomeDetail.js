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
  View,
  AppRegistry,
  TouchableOpacity
} from 'react-native';



class HomeDetail extends Component {


  render() {
      return (
        <View style={styles.container} >
          <TouchableOpacity onPress={()=>{this.popToHome()}}>
            <Text style={styles.welcome}>
              测试跳转
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    popToHome() {
      this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

// 输出组件类
module.exports = HomeDetail;