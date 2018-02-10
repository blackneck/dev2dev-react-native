import React, { Component } from 'react'
import CurvedLinesLoginView from './CurvedLinesLoginView'
import { Animated } from 'react-native'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      animated: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(this.state.animated, {
      duration: 5000,
      toValue: 40
    }).start()
  }

  render() {
    return <CurvedLinesLoginView animated={this.state.animated} />
  }
}
