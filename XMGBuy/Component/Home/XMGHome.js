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
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';


var Dimensions = require('Dimensions')

var {width,height} = Dimensions.get('window')

var HomeDetail = require('./XMGHomeDetail')


class Home extends Component {
  render() {
      return (
        <View style={styles.container}>
          
          {this.renderNavBar()}




          <TouchableOpacity onPress={()=>{this.pushToDetail()}}>
          <Text style={styles.welcome}>
              主要框架
          </Text>
          </TouchableOpacity>
          
        </View>
      );
    }

    renderNavBar() {
      return(
        <View style={styles.naviBarStyle}>
          {/* 左边 */}
          <TouchableOpacity onPress={()=>{this.pushToDetail()}}>
            <Text style={{color:'white',marginTop:20}}>广州</Text>
          </TouchableOpacity>
          {/* 中间 */}
          <TextInput 
            placeholder="输入商家、品类、商圈"
            style={styles.topInput}
          />

          {/* 右边 */}
          <View style={styles.rightNavViewStyle}>
          
            <TouchableOpacity onPress={()=>{alert('点击了')}}>
              <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{alert('点击了')}}>
              <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle}/>
            </TouchableOpacity>
          </View>



        </View>
      );
    }


    // 跳转
    pushToDetail() {
      this.props.navigator.push({
        component:HomeDetail,// 要跳转的版块
        title:'详情页'
      });
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    

  },
  welcome: {
  fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  naviBarStyle: { // 导航栏

    height: (Platform.OS === 'ios') ? 64 : 44,
    backgroundColor:'rgba(255, 96, 0, 1.0)',
    // 设置主轴的方向
    flexDirection:'row',
    alignItems:'center',
    // 设置主轴的对齐方式
    justifyContent:'space-around'
  },
  topInput: {// 设置输入框
    width:width * 0.71,
    height:30,
    backgroundColor:'white',
    marginTop:20,
    // 设置圆角
    borderRadius:17.5,
    paddingLeft:10
  },
  navRightImgStyle: { // 设置图片的大小
    width:25,
    height:25,
    marginTop:5,
  },
  rightNavViewStyle: {
    flexDirection:'row',
    marginTop:15,
    // height:64,
    alignItems:'center',
  }
});

// 输出组件类
module.exports = Home;