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

// 外部组件
var CommonView = require('./XMGMiddleCommonView')

// 外部数据
var TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json')

class MiddleView extends Component {
    render() {
      return (
        <View style={styles.container}>
            {/* 左边 */}
            {this.renderLeftView()}

            {/* 右边 */}
            <View>
                {this.renderRightView()}
            </View>
            
        </View>
      );
    }


    renderLeftView() {

        var data = TopMiddleData.dataLeft[0];

        return(
            <TouchableOpacity onPress={()=>{alert('0')}} >
                <View style={styles.leftViewStyle}>
                    <Image source={{uri: data.img1}} style={styles.leftImageStyle} />
                    <Image source={{uri: data.img2}} style={styles.leftImageStyle} />
                    <Text style={{color:'gray',fontSize:16}}>{data.title}</Text>
                    <View style={{flexDirection: 'row',marginTop: 5}} >
                        <Text style={{color: 'blue',marginRight: 5}} >{data.price}</Text>
                        <Text style={{color: 'orange',backgroundColor: 'yellow'}}>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            
        )
    }

    renderRightView() {
        // 组件数组
        var itemArr = [];
        // 取出具体的数据
        var rightData = TopMiddleData.dataRight;
        // 遍历
        for(var i=0; i<rightData.length; i++) {

            var data = rightData[i]

            itemArr.push(
                <CommonView 
                    key={i} 
                    title={data.title}
                    subTitle={data.subTitle}
                    rightIcon={data.rightImage}
                    titleColor={data.titleColor}
                />
            )
        }
        return itemArr;
    }


}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    flexDirection: 'row',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  leftViewStyle: {
      backgroundColor: 'white',
      width: width / 2,
      alignItems: 'center',
      height: 119,
      marginRight: 1,
      justifyContent: 'center'
  },
  leftImageStyle: {
      width: 100,
      height: 30,
      // 内容模式
      resizeMode: 'contain'
  }
});

// 输出组件类
module.exports = MiddleView;