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

var {width,height} = Dimensions.get('window')


class MineHeaderView extends Component {

    render() {
      return (
        <View style={styles.container}>
            {/*  上半部分 */}
            {this.renderHeaderTop()}

            {/* 下半部分 */}
            {this.renderHeaderBottom()}
        </View>
      );
    }

    renderHeaderTop() {
        return (

            <TouchableOpacity activeOpacity={1} onPress={()=>{alert('click')}}>
                <View style={styles.headerViewStyle}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={{uri:'see'}} style={styles.logoImageStyle}/>
                        <Text style={{marginLeft:5,color:'white',fontSize:18}}>小码哥电商</Text>
                    </View>
                
                    <View>
                        <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13,marginRight:8}}/>
                    </View>
                </View>

            </TouchableOpacity>
            
        )
    }

    // 下部分
    renderHeaderBottom() {
        return(
            <View style={styles.bottomStyle}>
                {this.renderBottomItem()}
            </View>
        )
    }

    renderBottomItem() {
        var itemArr = [];
        // 数据数组
        var data = [{'number':'100','title':'码哥券'},{'number':'12','title':'评价'},{'number':'50','title':'收藏'}];
        // 遍历创建组件装入数组
        for(var i=0;i<data.length;i++){
            var item = data[i];

            itemArr.push(

                <TouchableOpacity key={i} onPress={()=>{alert('click')}}>
                    <View style={styles.bottomInnerViewStyle}>
                        <Text style={{color:'white'}}>{item.number}</Text>
                     <Text style={{color:'white'}}>{item.title}</Text>
                    </View>

                </TouchableOpacity>
                
            )
        }
        return itemArr;
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    height:400,
  },
  headerViewStyle: {
    flexDirection:'row',
    alignItems:'center',
    marginLeft:20,
    marginTop:250,
    justifyContent: 'space-between'
  },
  logoImageStyle: {
    width:60,
    height:60,
    borderRadius:30
  },
  bottomStyle: {
      flexDirection:'row',
      alignItems:'center',
      // 绝对定位
      position: 'absolute',
      bottom:0
  },
  bottomInnerViewStyle: {
      width:width/3+1,
      justifyContent:'center',
      alignItems:'center',
      height:40,
      backgroundColor:'rgba(255,255,255,0.4)',

      borderRightWidth:1,
      borderRightColor:'white'
  }
});

// 输出组件类
module.exports = MineHeaderView;