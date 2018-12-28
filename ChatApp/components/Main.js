import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  Alert,
  AsyncStorage,
  StyleSheet,
  TextInput,
  Text
} from "react-native";

class Main extends Component {
  static navigationOptions = {
    title: "Who are you?"
  };
  state = {
    name: ""
  };
  async componentWillMount() {
    if ((await AsyncStorage.getItem("username")) != "")
      this.props.navigation.navigate("Chat");
  }
  navigateToNextPage = () => {
    if (!this.state.name) Alert.alert("Warning", "Please set username.");
    else this.props.navigation.navigate("Chat");
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
          padding: 15
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
          <Text style={{ flex: 0.4, fontSize: 20, fontWeight: "bold" }}>
            Username:
          </Text>
          <TextInput
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              flex: 0.7
            }}
            placeHolder="Username"
            onChangeText={async name => {
              this.setState({ name });
              await AsyncStorage.setItem("username", name);
            }}
          />
        </View>
        <View style={{ flex: 0.2 }}>
          <TouchableOpacity
            onPress={this.navigateToNextPage}
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                backgroundColor: "#008CBA",
                padding: 10,
                borderRadius: 15,
                marginLeft: 24,
                fontSize: 24
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Main;
