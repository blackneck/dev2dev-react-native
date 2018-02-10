import React from 'react'
import { View, TextInput, ImageBackground, Animated } from 'react-native'

import styles from './styles'

export default props => (
  <ImageBackground
    style={styles.container}
    source={require('../../assets/background.jpg')}
  >
    <View style={styles.logo} />
    <Animated.View
      style={[
        styles.form,
        {
          opacity: props.animated.interpolate({
            inputRange: [0, 40],
            outputRange: [0, 1]
          })
        }
      ]}
    >
      <Animated.View
        style={{
          paddingRight: props.animated.interpolate({
            inputRange: [0, 40],
            outputRange: [1000, 40]
          })
        }}
      >
        <TextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="white"
          placeholder="Name"
          style={{
            paddingLeft: 40,
            borderColor: 'white',
            textAlign: 'center',
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderTopRightRadius: 20,
            height: 40
          }}
        />
      </Animated.View>
      <Animated.View
        style={{
          paddingRight: 40,
          paddingLeft: props.animated.interpolate({
            inputRange: [0, 40],
            outputRange: [1000, 40]
          })
        }}
      >
        <TextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="white"
          placeholder="Email"
          style={{
            borderColor: 'white',
            textAlign: 'center',
            borderTopWidth: 2,
            borderLeftWidth: 2,
            height: 40
          }}
        />
      </Animated.View>
      <Animated.View
        style={{
          paddingLeft: 40,
          paddingRight: props.animated.interpolate({
            inputRange: [0, 40],
            outputRange: [1000, 40]
          })
        }}
      >
        <TextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="white"
          placeholder="Password"
          style={{
            borderColor: 'white',
            textAlign: 'center',
            borderRightWidth: 2,
            borderBottomWidth: 2,
            borderTopWidth: 2,
            height: 40
          }}
        />
      </Animated.View>
      <Animated.View
        style={{
          paddingLeft: props.animated.interpolate({
            inputRange: [0, 40],
            outputRange: [1000, 40]
          })
        }}
      >
        <TextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="white"
          placeholder="Confirm password"
          style={{
            paddingRight: 40,
            borderColor: 'white',
            textAlign: 'center',
            borderLeftWidth: 2,
            borderBottomWidth: 2,
            borderBottomLeftRadius: 20,
            height: 40
          }}
        />
      </Animated.View>
    </Animated.View>
  </ImageBackground>
)
