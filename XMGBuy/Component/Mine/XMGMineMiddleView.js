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

var MiddleData = require('./MiddleData.json')

class MineMiddleView extends Component {
    render() {
      return (
        <View style={styles.container}>
            {this.renderAllItem()}
        </View>
      );
    }

    renderAllItem() {
        // 定义组件数组
        var itemArr = [];
        // 遍历
        for(var i=0; i<MiddleData.length;i++) {
            // 取出单独的数据
            var data = MiddleData[i];
            // 创建组件装入数组
            itemArr.push(
                <InnerView key={i} iconName={data.iconName} title={data.title}/>
            );
        }

        // 返回
        return itemArr;
    }
}

class InnerView extends Component {

    static defaultProps = {
        iconName: '',
        title: ''
    }

    render() {
        return(
            <TouchableOpacity onPress={()=>{alert('click')}}>
                <View style={{marginLeft:10,marginRight:10,alignItems:'center'}}>
                    <Image source={{uri: this.props.iconName}} style={{width:30,height:20}}/>
                    <Text style={{marginTop:5,color:'gray'}}>{this.props.title}</Text>
                </View> 
            </TouchableOpacity>
               
        );
    }
}

const styles = StyleSheet.create({
  container: {
    // 设置主轴的方向
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height:60,
    justifyContent:'space-between'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

// 输出组件类
module.exports = MineMiddleView;