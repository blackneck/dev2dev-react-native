import React from 'react'
import {
  View,
  Animated,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
//import { FontAwesome } from 'react-native-vector-icons'

import styles from './styles'

export default props => (
  <Animated.View
    style={[
      styles.container,
      {
        width: props.contentWidth * 2,
        left: props.offset.interpolate({
          inputRange: [props.buttonWidth, props.contentWidth],
          outputRange: [
            -props.buttonWidth,
            -props.contentWidth + props.buttonWidth
          ]
        })
      }
    ]}
  >
    <ImageBackground
      source={require('../../assets/tolerance.jpg')}
      style={[
        styles.container,
        {
          width: props.contentWidth * 2
        }
      ]}
    >
      <Animated.View
        style={[
          styles.loginContainer,
          {
            width: props.contentWidth
          }
        ]}
      >
        <View>
          <View style={styles.inputFeildContainer}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholderTextColor="white"
              placeholder="Email"
              onFocus={props.onLoginEmailFocus}
              onBlur={props.stopLogin}
              style={styles.inputFeild}
            />
          </View>
          <View style={styles.inputFeildContainer}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholderTextColor="white"
              placeholder="Password"
              style={styles.inputFeild}
            />
          </View>
        </View>
        <Animated.View style={props.applyLogInAnimation()}>
          <TouchableOpacity onPress={props.onSignUpPress}>
            <Animated.Text
              style={[
                styles.buttonText,
                {
                  fontSize: props.offset.interpolate({
                    inputRange: [props.buttonWidth, props.contentWidth],
                    outputRange: [38, 14]
                  })
                }
              ]}
            >
              LOG IN
            </Animated.Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={[styles.signupContainer, { width: props.contentWidth }]}
      >
        <View>
          <View style={styles.inputFeildContainer}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholderTextColor="white"
              placeholder="Email"
              style={styles.inputFeild}
            />
          </View>
          <View style={styles.inputFeildContainer}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholderTextColor="white"
              placeholder="Password"
              style={styles.inputFeild}
            />
          </View>
          <View style={styles.inputFeildContainer}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholderTextColor="white"
              placeholder="Confirm Password"
              style={styles.inputFeild}
            />
          </View>
        </View>
        <Animated.View style={props.applySignUpAnimation()}>
          <TouchableOpacity onPress={props.onLoginPress}>
            <Animated.Text
              style={[
                styles.buttonText,
                {
                  fontSize: props.offset.interpolate({
                    inputRange: [props.buttonWidth, props.contentWidth],
                    outputRange: [14, 38]
                  })
                }
              ]}
            >
              SIGN UP
            </Animated.Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </ImageBackground>
  </Animated.View>
)
