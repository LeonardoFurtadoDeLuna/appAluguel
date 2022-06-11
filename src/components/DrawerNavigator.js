import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator useLegacyImplementation
      drawerContentOptions={{
        backgroundColor: 'red',
        activeTintColor: 'red',
        itemStyle: { marginVertical: 5 },
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#2b2b2b'
        },
        drawerActiveBackgroundColor: '#333333',
        drawerActiveTintColor: "#f1f1f1",
        headerStyle: {
          backgroundColor: '#2b2b2b',
        },
        headerTitleStyle: {
          fontFamily: 'Montserrat_700Bold',
          color: '#f1f1f1'
        },
        headerTintColor: '#f1f1f1',
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator >
  );
}

export default DrawerNavigator;