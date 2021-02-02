import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {BookDetails, Login} from './screens';
import Tabs from './navigation/Tabs';

import {COLORS} from './constants';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {elevation: 0},
          cardStyle: {backgroundColor: COLORS.black},
        }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="BookDetail" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
