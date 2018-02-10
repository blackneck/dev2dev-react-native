import { StyleSheet } from 'react-native'

const opacity = 0.8

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row' },
  loginContainer: {
    backgroundColor: `rgba(45, 255, 254, ${opacity})`,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 50
  },
  signupContainer: {
    backgroundColor: `rgba(117, 115, 216, ${opacity})`,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingRight: 50
  },
  buttonText: { color: 'white', fontWeight: '800' },
  inputFeildContainer: {
    width: 200,
    height: 55,
    justifyContent: 'center',
    marginBottom: 20,
    paddingLeft: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  inputFeild: { fontSize: 18, color: 'rgb(255,255,255)' }
})

export default styles
