import { StackNavigator } from 'react-navigation'

import Curved from './components/CurvedLinesLogin'
import Home from './components/Home'
import Flip from './components/FlipLogin'

export default StackNavigator({
  Flip: {
    screen: Flip,
    navigationOptions: ({ navigation }) => ({ header: null })
  },
  Home: {
    screen: Home
  },
  Curved: {
    screen: Curved
  }
})
