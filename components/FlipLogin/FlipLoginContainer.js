import React, { Component } from 'react'
import FlipLoginView from './FlipLoginView'
import { Dimensions, Animated, Easing } from 'react-native'

const { width, height } = Dimensions.get('screen')
const buttonWidth = 50

export default class FlipLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggingIn: false,
      offset: new Animated.Value(buttonWidth),
      loginOffset: new Animated.Value(0),
      signupOffset: new Animated.Value(0)
    }
  }

  _onLoginButtonPress = () => {
    Animated.timing(this.state.offset, {
      toValue: width,
      duration: 200
    }).start()
  }

  _onSignupButtonPress = () => {
    Animated.timing(this.state.offset, {
      toValue: buttonWidth,
      duration: 200
    }).start()
  }

  _cycleAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.offset, {
        toValue: width,
        duration: 250,
        delay: 1000
      }),
      Animated.timing(this.state.offset, {
        toValue: buttonWidth,
        duration: 200,
        delay: 1000
      })
    ]).start(() => {
      this._cycleAnimation()
    })
  }

  componentDidMount() {}

  _onLoginEmailFocus = () => {
    this.setState({ isLoggingIn: true }, () => {
      Animated.timing(this.state.loginOffset, {
        duration: 400,
        easing: Easing.bounce,
        toValue: width / 2
      }).start()
    })
  }

  _stopLogin = () => {
    Animated.timing(this.state.loginOffset, {
      duration: 400,
      easing: Easing.bounce,
      toValue: 0
    }).start(() => this.setState({ isLoggingIn: false }))
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  _applySignUpAnimation = () => {
    return {
      top: this.state.offset.interpolate({
        inputRange: [buttonWidth, width],
        outputRange: [-width / 2, 0]
      }),
      right: this.state.offset.interpolate({
        inputRange: [buttonWidth, width],
        outputRange: [width / 2 - buttonWidth, 0]
      }),
      transform: [
        {
          rotateZ: this.state.offset.interpolate({
            inputRange: [buttonWidth, width],
            outputRange: ['-90deg', '0deg']
          })
        }
      ]
    }
  }
  _applyLogInAnimation = () => {
    return this.state.isLoggingIn
      ? {
        top: this.state.loginOffset.interpolate({
          inputRange: [0, width / 2],
          outputRange: [0, -width / 2]
        })
      }
      : {
        top: this.state.offset.interpolate({
          inputRange: [buttonWidth, width],
          outputRange: [0, -width / 2]
        }),
        left: this.state.offset.interpolate({
          inputRange: [buttonWidth, width],
          outputRange: [0, width / 2 - buttonWidth]
        }),
        transform: [
          {
            rotateZ: this.state.offset.interpolate({
              inputRange: [buttonWidth, width],
              outputRange: ['0deg', '-90deg']
            })
          }
        ]
      }
  }

  render() {
    return (
      <FlipLoginView
        contentWidth={width}
        contentHeight={height}
        buttonWidth={buttonWidth}
        offset={this.state.offset}
        applyLogInAnimation={this._applyLogInAnimation}
        applySignUpAnimation={this._applySignUpAnimation}
        onLoginPress={this._onLoginButtonPress}
        onSignUpPress={this._onSignupButtonPress}
        onLoginEmailFocus={this._onLoginEmailFocus}
        stopLogin={this._stopLogin}
      />
    )
  }
}
