import React from 'react'
import { Button, View } from 'react-native'

export default props => (
  <View>
    <Button
      title="Curved"
      onPress={() => props.navigation.navigate('Curved')}
    />
  </View>
)
