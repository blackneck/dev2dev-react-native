import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import SocketIOClient from 'socket.io-client';
import { connect } from 'react-redux';
import { newMessage } from '../actions/messages';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class PostLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      dataSource: ds.cloneWithRows(this.props.messages)
    };

    this.socket = SocketIOClient('http://localhost:3000');

    this._renderRow = this._renderRow.bind(this);
    this._onMessageChange = this._onMessageChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: ds.cloneWithRows(nextProps.messages)
    });
  }

  _renderRow(rowData) {
    return (
      <View
        style={
          rowData.author === this.props.nickname
            ? styles.myMessage
            : styles.theirMessage
        }
      >
        <Text>
          {rowData.author !== this.props.nickname ? `${rowData.author}:` : ``}
          {' '}
          {rowData.text}
        </Text>
      </View>
    );
  }

  _onMessageChange(message) {
    this.setState({ message });
  }

  _onSubmit() {
    this.props.newMessage({
      author: this.props.nickname,
      text: this.state.message
    });
    this.refs.messageTextInput.clear();
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ListView
          ref="messagesList"
          style={styles.messages}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
        <View style={styles.inputBlock}>
          <TextInput
            ref="messageTextInput"
            underlineColorAndroid={'transparent'}
            style={styles.input}
            placeholder="enter your message..."
            value={this.state.message}
            onChangeText={this._onMessageChange}
          />
          <TouchableOpacity style={styles.submit} onPress={this._onSubmit}>
            <Text style={styles.submitText}>
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const _message = {
  flexDirection: 'row',
  paddingHorizontal: 15
};

const _input = {
  height: 30,
  alignSelf: 'stretch'
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightblue'
  },
  myMessage: {
    ..._message,
    justifyContent: 'flex-end'
  },
  theirMessage: {
    ..._message,
    justifyContent: 'flex-start'
  },
  inputBlock: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: 'white'
  },
  input: {
    ..._input,
    flex: 6,
    textAlign: 'center'
  },
  submit: {
    ..._input,
    flex: 1,
    justifyContent: 'center'
  },
  submitText: {
    color: 'red',
    alignSelf: 'center'
  }
});

export default connect(
  state => {
    return {
      messages: state.messages,
      nickname: state.nickname
    };
  },
  dispatch => {
    return {
      newMessage: message => dispatch(newMessage(message))
    };
  }
)(PostLogin);
