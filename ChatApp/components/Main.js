import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

class Main extends Component {
  static navigationOptions = {
    title: "Who are you?"
  };
  state = {
    name: ""
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "stretch"
        }}
      >
        <View
          style={{
            flex: 0.1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ flex: 0.3, fontSize: 20, fontWeight: "bold" }}>
            Username:
          </Text>
          <TextInput
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              flex: 0.7
            }}
            placeHolder="Username"
            onChangeText={name => {
              this.setState({ name });
            }}
          />
        </View>
      </View>
    );
  }
}

export default Main;
