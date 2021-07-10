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

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


export default class Home extends React.Component {

  _onHomePress = () => {
    Alert.alert(
      "Hola",
      "Ya te encuentras ahí",
      [
        { text: "OK", onPress: () => console.log("OK from Home pressed!") }
      ]
    );
  }


  render(){
    return( 
    <SafeAreaView style={{flex:1}}>
      <ImageBackground
        style={{height}}
        source={require('../assets/images/fondo2.jpg')}
      >
        <View style={{flexDirection:'column', height, justifyContent:'center'}}>
          <View style={{flexDirection:'row'}}>   
            <TouchableOpacity 
              onPress={()=>this._onHomePress()}
              style={[styles.button, { backgroundColor:'rgba(20, 32, 255, 0.60)' }]}
            >
              <Text style={styles.text}>
                Principal
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor:'rgba(20, 255, 110, 0.60)' }]}>
              <Text style={styles.text}>
                Perfil
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row', }}>
            <TouchableOpacity style={[styles.button, { backgroundColor:'rgba(255, 32, 20, 0.60)' }]}>
              <Text style={styles.text}>
                Posteos
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor:'rgba(0, 142, 170, 0.60)' }]}>
              <Text style={styles.text}>
                Mapa
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </ImageBackground>
    </SafeAreaView>
    )}
}

const styles = StyleSheet.create({
  text: {
    fontSize:30, 
    fontWeight:'bold', 
    color:'#fff',
    textAlign:'center'
  },
  button: {
    margin: width/20,
    height:width/2.5,
    width:width/2.5,
    borderRadius:15,
    justifyContent:'center',
    backgroundColor:'#fff',
    zIndex:1
  }
})