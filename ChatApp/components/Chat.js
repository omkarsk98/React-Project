import React from "react";
import { View, Text, AsyncStorage } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

export default class Home extends React.Component {
  static navigationOptions = {
    title: "Chat!"
  };
  state = {
    username: "",
    messages: []
  };
  async componentWillMount() {
    this.setState({
      username: await AsyncStorage.getItem("username")
    });
  }
  render() {
    return (
      <View>
        <Text>Username: {this.state.username}</Text>
        <GiftedChat messages={this.state.messages} />
      </View>
    );
  }
}
