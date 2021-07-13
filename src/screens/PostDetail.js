import React,{ Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


export default class PostDetail extends React.Component {

  render(){
    return( 
      <SafeAreaView style={{flex:1}}>
        <ImageBackground
            style={{height}}
            source={require('../assets/images/fondo5.jpg')}
        >
         <Text>PostDetail</Text>
        </ImageBackground>
    </SafeAreaView>  
     
    )}
}