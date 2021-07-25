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
import {actions} from '../store';
import {connect} from 'react-redux';
import { Input, Button } from 'react-native-elements';



const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: '',
        body: '',
      },
    };
  }

  render(){
    const {data} = this.state;
    return( 
      <SafeAreaView>
        <ImageBackground
            style={styles.content}
            source={require('../assets/images/fondo.png')}
        >
            <Input
                placeholder='Title'
                inputContainerStyle={{
                    width: width * 0.8, alignItems: 'flex-start',
                    alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                }}
                inputStyle={{ color: 'white', marginLeft: 15 }}
                placeholderTextColor='#ccc'
                value={data.title}
                onChangeText={input =>
                this.setState({data: {...data, title: input}})
              }
            />
            <Input
                placeholder='Description'
                inputContainerStyle={{
                    width: width * 0.8, alignItems: 'flex-start',
                    alignSelf: 'center', height: height * 0.4, backgroundColor: 'rgba(0,0,0,0.5)',
                    pading: 15
                }}
                inputStyle={{ color: 'white', marginLeft: 15 }}
                placeholderTextColor='#ccc'
                value={data.body}
                onChangeText={input =>
                this.setState({data: {...data, body: input}})
              }
                multiline
                numberOfLines={2}
            />
            <Button title='Post' onPress=
              {() => {
                this.props.createPost(data);
                this.props.navigation.navigate('Posts');
              }}
                style={{ width: width * 0.8 }} />
        </ImageBackground>
    </SafeAreaView>

    )}
}

const styles = StyleSheet.create({
  text: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center'
  },
  content: {
      height,
      width,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

const mapDispatchToProps = dispatch => ({
  createPost: data => dispatch(actions.posts.createPost(data)),
});
const mapStateToProps = state => ({
  posts: state.posts.posts,
});
export default connect(mapStateToProps, mapDispatchToProps)(PostCreate);