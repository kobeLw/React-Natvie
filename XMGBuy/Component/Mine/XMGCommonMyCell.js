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



class MyCell extends Component {

    static defaultProps = {
        leftIconName: '',
        leftTitle: '',
        rightIconName: '',
        rightTitle: ''
    }




    render() {
      return (
          <TouchableOpacity onPress={()=>{alert('click')}}>
              <View style={styles.container}>
                {/* 左边 */}
                <View style={styles.leftViewStyle}>
                    <Image source={{uri: this.props.leftIconName}} style={styles.leftImageStyle}/>
                    <Text style={styles.leftTItleStyle}>{this.props.leftTitle}</Text>

                </View>
                {/* 右边 */}
                <View style={styles.rightViewStyle}>
                    {this.rightSubview()}
                </View>
            </View>



          </TouchableOpacity>
        
        );
    }


    rightSubview() {
        return(
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                {this.renderRightContent()}



                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13,marginRight:5,marginLeft:8}}/>

            </View>
        )
    }

    renderRightContent() {
        if (this.props.rightIconName.length == 0) { // 图片为空
            return (
                <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
            )

        } else {
            return (
                <Image source={{uri: this.props.rightIconName}} style={{width:24,height:13}} />
            )
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'white',
    // 垂直居中
    alignItems:'center',
    height:40,
    // 下边框
    borderBottomColor:'#e8e8e8',
    borderBottomWidth:1
  },
  leftViewStyle: {
    flexDirection: 'row',
    // 侧轴居中
    alignItems: 'center',
    marginLeft:10
  },
  rightViewStyle: {

  },
  leftImageStyle: {
      width: 24,
      height: 24,

      // 圆角
      borderRadius:12
  },
  leftTItleStyle: {
    marginLeft:5,
    fontSize:16
  }
});

// 输出组件类
module.exports = MyCell;