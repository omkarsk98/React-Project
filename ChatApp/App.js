import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './components/Main';
import Chat from './components/Chat';
import { createAppContainer, createStackNavigator } from 'react-navigation'

const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});

// export class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hello World</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   }
// });

const App = createAppContainer(navigator)

export default App;