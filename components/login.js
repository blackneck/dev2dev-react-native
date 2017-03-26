import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { updateUsername } from '../actions/login';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: ''
    };

    this._onLogin = this._onLogin.bind(this);
    this._onLoginChange = this._onLoginChange.bind(this);
  }

  _onLogin() {
    this.props.updateUsername(this.state.nickname);
    this.props.navigator.push({ title: 'postLogin', index: 1 });
  }

  _onLoginChange(nickname) {
    this.setState({ nickname });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TextInput
          underlineColorAndroid={'transparent'}
          style={styles.input}
          placeholder="enter your nickname"
          value={this.state.nickname}
          onChangeText={this._onLoginChange}
        />
        <TouchableOpacity style={styles.submit} onPress={this._onLogin}>
          <Text style={styles.submitText}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const _input = {
  height: 40,
  borderWidth: 1,
  borderRadius: 20,
  borderColor: 'white',
  margin: 15,
  alignSelf: 'stretch'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  },
  input: {
    ..._input,
    textAlign: 'center',
    color: 'white'
  },
  submit: {
    ..._input,
    justifyContent: 'center'
  },
  submitText: {
    color: 'white',
    alignSelf: 'center'
  }
});

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      updateUsername: nickname => dispatch(updateUsername(nickname))
    };
  }
)(Login);
