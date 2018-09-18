import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import HelloWorld from './components/HelloWorld';
import Login from './components/Login';
import PlayingWithStyles from './components/Styles';
// const server = require('./serverip');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: 'hey'
    }
  }
  // componentWillMount() {
  //   fetch('http://192.168.43.145:3001/ip', {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  // }
  render() {

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text>{this.state.ip}</Text>
        <HelloWorld />
        <PlayingWithStyles />
        <Login />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingVertical: 20,
    alignItems: 'center'
  }
});
