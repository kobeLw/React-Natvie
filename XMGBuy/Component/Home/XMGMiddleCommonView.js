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
  Image,
  TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions')
var {width} = Dimensions.get('window')

class CommonView1 extends Component {

    static defaultProps = {
        title: '',
        subTitle: '',
        rightIcon: '',
        titleColor: ''
    }

    render() {
      return (
        <TouchableOpacity onPress={()=>{alert('kk')}}>
          <View style={styles.container}>
            {/* 左边 */}
            <View>
              <Text style={[{color:this.props.titleColor},styles.titleStyle]}>{this.props.title}</Text>
              <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
            </View>

            {/* 右边 */}
            <Image source={{uri:this.props.rightIcon}} style={{width:64,height:43}} />


          </View>


        </TouchableOpacity>  


        
      );
    }


}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: width / 2 - 1,
    height: 59,
    marginBottom: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  titleStyle: {
    fontSize: 18
  },
  subTitleStyle: {
    color: 'gray'
  }
});

// 输出组件类
module.exports = CommonView1;