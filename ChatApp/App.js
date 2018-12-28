import Main from './components/Main';
import Chat from './components/Chat';
import { createAppContainer, createStackNavigator } from 'react-navigation'

const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});

const App = createAppContainer(navigator)

export default App;