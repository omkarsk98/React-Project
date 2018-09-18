import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
const server = require("../serverip");

const mystyle = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }
  render() {
    return (
      <View style={mystyle.login}>
        {this.state.noted}
        <TextInput
          style={{ height: 40, width: 200 }}
          placeholder="Username.."
          onChangeText={user => this.setState({ username: user })}
        />
        <TextInput
          style={{ height: 40, width: 200 }}
          placeholder="Email.."
          onChangeText={mail => this.setState({ email: mail })}
        />
        <TextInput
          style={{ height: 40, width: 200 }}
          placeholder="Password.."
          onChangeText={pass => this.setState({ password: pass })}
        />
        <Button
          onPress={() => {
            fetch("http://" + server.ip + ":3001/otp", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
              })
            });
          }}
          title="SUBMIT"
        />
      </View>
    );
  }
}
