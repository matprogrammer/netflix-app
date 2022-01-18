import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Colors } from '../constants/Theme';

import HomeScreen from './HomeScreen';
import NewMoviesScreen from './NewMoviesScreen';
import SearchMoviScreen from './SearchMoviScreen';
import { Icon } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const InitialScreen = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.primaryRed,
        tabBarStyle: {
          backgroundColor: Colors.black,
          borderColor: Colors.black,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarOptions: { activeTintColor: 'red' },
          headerShown: false,
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              color={focused ? Colors.primaryRed : Colors.white}
            />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewMoviesScreen}
        options={{
          tabBarLabel: 'Nuevo y popular',
          headerTitle: 'Nuevo y popular',
          headerLeft: () => (
            <Icon
              onPress={() => navigation.navigate('Home')}
              name="arrow-back-ios"
              color={Colors.white}
            />
          ),
          headerLeftContainerStyle: {
            left: 10,
            color: Colors.white,
          },
          tabBarIcon: ({ focused }) => (
            <Icon
              name="movie"
              color={focused ? Colors.primaryRed : Colors.white}
            />
          ),
          headerStyle: {
            backgroundColor: Colors.black,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            color: Colors.white,
          },
        }}
        back
      />
      <Tab.Screen
        name="Search"
        component={SearchMoviScreen}
        options={{
          tabBarLabel: 'Buscar',
          headerTitle: 'Buscar',
          headerLeft: () => (
            <Icon
              onPress={() => navigation.navigate('Home')}
              name="arrow-back-ios"
              color={Colors.white}
            />
          ),
          headerLeftContainerStyle: {
            left: 10,
            color: Colors.white,
          },
          tabBarIcon: ({ focused }) => (
            <Icon
              name="search"
              color={focused ? Colors.primaryRed : Colors.white}
            />
          ),
          headerStyle: {
            backgroundColor: Colors.black,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            color: Colors.white,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default InitialScreen;
