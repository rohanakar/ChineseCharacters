import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/Screens/HomeScreen';
import DisplayScreen from './src/Screens/DisplayScreen';

const navigator = createStackNavigator({
    home: HomeScreen,
    display: DisplayScreen
}, {
    initialRouteName: 'home',
    defaultNavigationOptions: {
      title: 'Chinese Characters',
      headerStyle: { backgroundColor: '#6200EE' },
      headerTitleStyle: { color: 'white' },
    }
});

export default createAppContainer(navigator);

