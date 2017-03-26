import React, { Component } from 'react';
import { Navigator } from 'react-native';
import Login from '../components/login';
import PostLogin from '../components/postLogin';

export default class Root extends Component {
  constructor(props) {
    super(props);

    this._renderScene = this._renderScene.bind(this);
  }

  _renderScene(route, navigator) {
    switch (route.title) {
      case 'login':
        return <Login navigator={navigator} title={route.title} />;
      case 'postLogin':
        return <PostLogin navigator={navigator} title={route.title} />;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'postLogin', index: 0 }}
        renderScene={this._renderScene}
      />
    );
  }
}
