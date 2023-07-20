import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import Home from '../views/HomeView';
import Notifications from '../views/NotificationView'
import AddProject from '../views/ProjectView/AddProject'
import TabBarIcon from '../components/navigation/TabBarIcon';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
         tabBarIcon: ({focused}) => {
          return <TabBarIcon name={route.name.toLowerCase()}  focused={focused}/>;
        },
        tabBarLabel:'',
        headerShown: false,
      })}
      initialRouteName="Notifications"
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="AddProject" component={AddProject} />
      <Tab.Screen name="Search" component={AddProject} />
      <Tab.Screen name="Profile" component={AddProject} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
