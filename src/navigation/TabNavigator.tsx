import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../views/HomeView';
import Notifications from '../views/NotificationView'
import AddProject from '../views/ProjectView/AddProject'
import TabBarIcon from '../components/navigation/TabBarIcon';
import RoomView from '../views/Rooms';

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
        tabBarStyle:{
          height: 64,
          paddingTop: 16,
        }
      })}
      initialRouteName="Notifications"
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="AddProject" component={AddProject} />
      <Tab.Screen name="Search" component={TasksView} />
      <Tab.Screen name="Profile" component={AddProject} />
      <Tab.Screen name="Search" component={AddProject} />
      <Tab.Screen name="Profile" component={RoomView} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
