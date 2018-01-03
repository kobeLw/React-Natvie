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
  // Platform // 判断当前运行的系统
  // Navigator
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components'


// 导入外部的组件类
import TabNavigator from 'react-native-tab-navigator';


var Home = require('../Home/XMGHome');
var Shop = require('../Shop/XMGShop');
var Mine = require('../Mine/XMGMine')
var More = require('../More/XMGMore')



class Main extends Component {

    // 初始化函数(变量是可以改变的，充当状态机的角色)
    constructor(props){
      super(props);
      this.state = {
        selectedTab: 'home'
      }
    }

    render() {
        return (
            <TabNavigator>
                {/* 首页 */}
                {this.renderTabbarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home)}
                {/* 商家 */}
                {this.renderTabbarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop','商家',Shop)}
                {/* 我的 */}
                {this.renderTabbarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',Mine)}
                {/* 更多 */}
                {this.renderTabbarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','more','更多',More)}

            </TabNavigator>
        );
      }


      // 每一个tabbaritem
    renderTabbarItem(tabbarTitle,iconName,selectedIconName,selectedTab,componetName,component) {
      return (
          
          <TabNavigator.Item 
            title = {tabbarTitle}
            renderIcon = {() => <Image source={{uri: iconName}} style={styles.iconStyle} />}
            renderSelectedIcon={() => <Image source={{uri: selectedIconName}} style={styles.iconStyle}/>}
            onPress={() => {this.setState({selectedTab:selectedTab})}}
            selected={this.state.selectedTab === selectedTab}
            selectedTitleStyle={styles.selectedTitleStyle}
            // badgeText="10"
          >
          <Navigator
            initialRoute={{name:componetName,component:component}}
            configureScene={() =>{
              return Navigator.SceneConfigs.PushFromRight;
            }}
            renderScene={(route,navigator)=>{
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator}/>;
            }}
          />
        </TabNavigator.Item>
      )
    }
}



const styles = StyleSheet.create({
  iconStyle:{
    width: Platform.OS === 'ios' ? 30 : 25,
    height: Platform.OS === 'ios' ? 30 : 25
  },
  selectedTitleStyle:{
    color:'orange'
  }
});

// 输出组件类
module.exports = Main;