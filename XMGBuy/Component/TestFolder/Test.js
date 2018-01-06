import React, { Component } from 'react';
import {
   Platform,
   StyleSheet,
   Text,
   View,
   AppRegistry,
   TouchableOpacity 
} from 'react-native';

var NBAURLString = "http://platform.sina.com.cn/sports_all/client_api?_sport_t_=livecast&l_type=nba&_sport_a_=typeMatches&__os__=iphone&app_key=2923419926&__version__=3.14.1.3"

class Test extends Component {

    render() {
        return(
            // onPress={()=>{this.getData.bind(this,NBAURLString)}
            <TouchableOpacity style={styles.container} onPress={this.getData.bind(this,NBAURLString)}>

                <View>
                    <Text style={{width:100,height:100,backgroundColor:'red',alignItems:'center',textAlign:'center'}}>test</Text>
                </View>
            </TouchableOpacity>
            
        )
    }

    haha() {
        console.log('hahaa');
        alert('haha');
    }

    getData() {
        console.log('jaaa')
        alert('haha');
        // 网络请求的配置
        var opts = {
            method: 'GET'
        }
        fetch(NBAURLString,opts)
            .then((response)=>{
                console.log(response);
                return response.json();
            })
            .then((responseJson)=>{
                alert(responseJson);
            })
            .catch((error)=>{
                console.log(error);
            })
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});

module.exports = Test;













