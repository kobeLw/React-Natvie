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
  Image
} from 'react-native';

var Home_D4 = require('../../LocalData/XMG_Home_D4.json')

var CommonView = require('./XMGMiddleCommonView')

class MiddleBottomView extends Component {
    render() {
      return (
        <View style={styles.container}>
            {/* {this.renderMiddlerView()} */}
            <View style={styles.topViewStyle}>

            </View>

            <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
            </View>
        </View>
      );
    }

    renderBottomItem() {
        var itemArr = [];

        var dataArr = Home_D4.data;
        for(var i=0; i<dataArr.length; i++) {
            var data = dataArr[i];
            itemArr.push(
                <CommonView 
                    key={i} 
                    title={data.maintitle}
                    subTitle={data.deputytitle}
                    rightIcon={this.dealWithImageUrl(data.imageurl)}
                    titleColor={data.typeface_color}
                />
            )
        }

        return itemArr;

    }


    dealWithImageUrl(url) {
        console.log(url);
        if (url.search('w.h') === -1) { // 没有找到,正常返回
            return url;
        } else {
            return url.replace('w.h','120.90');
        }


    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  topViewStyle: {

  },
  bottomViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

// 输出组件类
module.exports = MiddleBottomView;