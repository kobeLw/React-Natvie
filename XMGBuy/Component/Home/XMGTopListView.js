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
  ListView
} from 'react-native';

var Dimensions = require('Dimensions')
var {width} = Dimensions.get('window')

class TopListView extends Component {


    static defaultProps = {
        dataArr: []
    }
  
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({rowHasChanged:(row1,row2) => row1 != row2});
        this.state = {
          dataSource: ds.cloneWithRows(this.props.dataArr)
        }
    
    }

    render() {
      return (
        <ListView 
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          contentContainerStyle={styles.contentViewStyle}
          scrollEnabled={false}
        />
      );
    }

    // 具体的 cell
    renderRow(rowdata) {
        return(
            <TouchableOpacity activeOpacity={1} onPress={()=>{alert('0')}}>

                <View style={styles.cellStyle}>
                    <Image source={{uri:rowdata.image}} style={{width:52, height:52}}/> 
                    <Text style={{fontSize:13,color:'gray'}}>{rowdata.title}</Text>
                </View>  

            </TouchableOpacity>

            
        )
    }




}

const styles = StyleSheet.create({
    contentViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width
    },
    cellStyle: {
        // backgroundColor: 'red',
        width: 70,
        height: 70,
        // 水平居中 和 垂直居中
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: (width - 70 * 5) / 6
    }
});

// 输出组件类
module.exports = TopListView;