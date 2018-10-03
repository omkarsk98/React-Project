import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const mystyle = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <View style={mystyle.login}>
        {this.state.counter}
        <Button
          onPress={() => {
            this.setState(prevState => {
              return { counter: prevState.counter + 1 };
            });
          }}
          title="Increment"
        />
      </View>
    );
  }
}
