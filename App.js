import React, { Component } from 'react'
import { View, AppRegistry, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import StarRating from 'react-native-star-rating'
import LoginScreen from './LoginScreen'


/*register component*/
class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Registration Page',
  };
  render() {

    const { navigate } = this.props.navigation;

    return (
      <View>
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Enter a valid Email address"
               placeholderTextColor = "#373737"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Enter your password"
               placeholderTextColor = "#373737"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = " Re-enter your password"
               placeholderTextColor = "#373737"
               autoCapitalize = "none"
               onChangeText = {this.handlePasswordChk}/>

            <TouchableOpacity
               style = {styles.signUpButton}
               onPress = {
                  () => navigate('Ratings')//direct to ratings
               }>
               <Text style = {styles.submitButtonText}> Ratings </Text>
            </TouchableOpacity>

         </View>
      </View>
    );
  }
}

class RatingsScreen extends Component {

  static navigationOptions = {
    title: 'Ratings',
  };

  constructor(props) {
    super(props);
    this.state = {
      starCount: 0
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <View>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
        />
      </View>
    );
  }
}

export default App = StackNavigator({
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  Ratings: { screen: RatingsScreen },

});

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