import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  Alert,
  View,
  TouchableOpacity,
  Vibration
} from "react-native";

export default class App extends React.Component {
  _onLongPressButton() {
    Vibration.vibrate(300);
    Alert.alert("Warning", "Your details will be shared with a stock broker.");
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {}}
          onLongPress={this._onLongPressButton}
        >
          <Text>Long Press</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
