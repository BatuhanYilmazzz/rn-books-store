import React from 'react';
import {Image} from 'react-native';
import {Home} from '../../screens';
import {COLORS, icons} from '../../constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Styles from './styles';
const Tab = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  style: {
    height: '10%',
    backgroundColor: COLORS.black,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.white : COLORS.gray;

          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.dashboard_icon}
                  resizeMode="contain"
                  style={[Styles.icon, {tintColor: tintColor}]}
                />
              );
            case 'Search':
              return (
                <Image
                  source={icons.search_icon}
                  resizeMode="contain"
                  style={[Styles.icon, {tintColor: tintColor}]}
                />
              );
            case 'Notification':
              return (
                <Image
                  source={icons.notification_icon}
                  resizeMode="contain"
                  style={[Styles.icon, {tintColor: tintColor}]}
                />
              );
            case 'Setting':
              return (
                <Image
                  source={icons.menu_icon}
                  resizeMode="contain"
                  style={[Styles.icon, {tintColor: tintColor}]}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Notification" component={Home} />
      <Tab.Screen name="Setting" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
