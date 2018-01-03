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
  TouchableOpacity,
  ScrollView
} from 'react-native';

var CommonCell = require('./XMGCommonCell')

class More extends Component {
  render() {
      return (
        <View style={styles.container}>
          {/* 导航条 */}
          {this.renderNavBar()}

          <ScrollView>
            <View style={{marginTop:20}}>
              <CommonCell 
                title="扫一扫"
              />
            </View>

            <View style={{marginTop:20}}>
              <CommonCell 
                title="省流量模式"
                isSwitch={true}
              />
              <CommonCell 
                title="消息提醒"
              />
              <CommonCell 
                title="邀请好友"
              />
              <CommonCell 
                title="清空缓存"
                rightTitle='1.99M'
              />
            </View>

            <View style={{marginTop:20}}>
              <CommonCell 
                title="意见反馈"
              />
              <CommonCell 
                title="问卷调查"
              />
              <CommonCell 
                title="支付帮助"
              />
              <CommonCell 
                title="网络诊断"
              />
            </View>
          </ScrollView>

          
        </View>
      );
    }

    renderNavBar() {
      return(
        <View style={styles.navOutViewStyle}>
          <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>更多</Text>
          <TouchableOpacity onPress={()=>{alert('点了')}} style={styles.rightViewStyle}>
            <Image source={{uri: 'icon_mine_setting'}} style={styles.navImageStyle}/>
          </TouchableOpacity>
        </View>
      )
    }
}


const styles = StyleSheet.create({

  navImageStyle: {
    width:Platform.OS == 'ios' ? 28 : 24,
    height:Platform.OS == 'ios' ? 28 : 24,
    
  },

  rightViewStyle: {
    //绝对定位
    position:'absolute',
    right:10,
    bottom:10
  },

  navOutViewStyle: {
    height:Platform.OS == 'ios' ? 64 : 44,
    backgroundColor:'rgba(255,96,0,1.0)',
    flexDirection:'row',
    alignItems:'center',
    // 主轴方向居中
    justifyContent:'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

// 输出组件类
module.exports = More;