import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { withInAppNotification } from 'react-native-in-app-notification';
 
class MyApp extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() => {
            this.props.showNotification({
              title: this.props.title,
              message: this.props.message,
              onPress: () => Alert.alert('Alert', 'You clicked the notification!')
            });
          }}
        >
          <Text>notify</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default withInAppNotification(MyApp);