import React, { Component } from 'react'
import { View, AppRegistry, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'

/*login component*/
class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Our App Name',
  };

  constructor(props) {
    super(props);
    this.state = { 
		email: '',
      	password: ''
    };
  }

   render(){
   	
   	const { navigate } = this.props.navigation;

      return (
      	<View>
          <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Email"
               placeholderTextColor = "#373737"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Password"
               placeholderTextColor = "#373737"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
               
            <TouchableOpacity
               style = {styles.loginButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)//check validity from backend
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>

            <TouchableOpacity
               style = {styles.signUpButton}
               onPress = {
                  () => navigate('Register')//direct to sign up form
               }>
               <Text style = {styles.submitButtonText}> Register </Text>
            </TouchableOpacity>
          </View>
        </View> 
      )
   }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 200
   },
   input: {
      margin: 10,
      height: 40,
      borderColor: '#FFA600',
      borderWidth: 1
   },
   loginButton: {
      backgroundColor: '#FFA600',
      padding: 10,
      margin: 10,
      height: 40,
   },
   signUpButton: {
      backgroundColor: '#F33133',
      padding: 10,
      margin: 10,
      height: 40,
   },   
   submitButtonText:{
      color: 'white'
   }
});

export default LoginScreen;