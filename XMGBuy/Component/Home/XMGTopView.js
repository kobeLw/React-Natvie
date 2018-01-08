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
  ScrollView,
  ListView,
  Image
} from 'react-native';

var Dimensions = require('Dimensions')
var {width} = Dimensions.get('window')

// 引入外部组件
var TopListView = require('./XMGTopListView')

// 引入外部json数据
var TopMenu = require('../../LocalData/TopMenu.json')


class TopView extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      activePage: 0
    }

  }


  render() {
      return (
        <View style={styles.container}>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd = {this.onScrollAnimationEnd.bind(this)}
          >
            {this.renderScrollItem()}
          </ScrollView>

          <View style={styles.indicatorViewStyle}>
            {this.renderIndicator()}
          </View>
        </View>
      );
  }


  // 当一帧滚动结束的时候调用
  onScrollAnimationEnd(e) {
    // 求出当前的页码
    var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width)

    // 更新状态
    this.setState({
      activePage: currentPage
    });




  }

  // scrollview内部组件
  renderScrollItem() {
    // 组件数组
    var itemArr = [];
    // 颜色数组
    var dataArr = TopMenu.data;
    // 遍历创建组件
    for(var i=0; i<dataArr.length; i++) {
      itemArr.push(
        <TopListView 
          key={i}
          dataArr={dataArr[i]}
        />
      );
    }
    return itemArr;

  }

  // pagecontroller
  renderIndicator() {
    var indicatorArr = [], style;
    for(var i=0; i<2; i++) {
      // 设置圆点的样式
      style = (i === this.state.activePage) ? {color:'orange'} : {color:'gray'}



      indicatorArr.push(
        <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
      )
    }
    return indicatorArr;
  }




}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white'
  },
  indicatorViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

// 输出组件类
module.exports = TopView;