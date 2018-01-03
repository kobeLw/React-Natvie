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
  Switch
} from 'react-native';



class CommonCell extends Component {

  static defaultProps = {

        title: '', // 标题
        isSwitch: false, // 是否显示开关
        rightTitle:''
  }


  constructor(props) {
        super(props);
        this.state = {
            isOn: false
        }
  }

  render() {
      return (

        <TouchableOpacity onPress={()=>{alert('click')}}>

            <View style={styles.container}>
                {/* 左边 */}
               <Text style={{marginLeft:10}}>{this.props.title}</Text>

              {/* 右边 */}
              {this.renderRightView()}


            </View>

        </TouchableOpacity>
        
      );
    }

    renderRightView() {
        if (this.props.isSwitch) {
            return (
                <Switch value={this.state.isOn == true} onValueChange={()=>{this.setState({isOn: !this.state.isOn})}} style={{marginRight:10}}/>
            )
        } else {
            return (
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    {this.rightTitle()}
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13,marginRight:10}}/>
                </View>
            )
        }
        
    }

    rightTitle() {
        if (this.props.rightTitle.length > 0){
            return (
                <Text style={{color:'gray',marginRight:5}}>{this.props.rightTitle}</Text>
            )
        }
    }



}

const styles = StyleSheet.create({
    container: {
        height:40,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,

        flexDirection:'row',
        // 主轴对齐方式
        justifyContent:'space-between',
        alignItems:'center'
    }
});

// 输出组件类
module.exports = CommonCell;