import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../views/HomeView';
import Notifications from '../views/NotificationView'
import AddProject from '../views/ProjectView/AddProject'
import TabBarIcon from '../components/navigation/TabBarIcon';
import RoomView from '../views/RoomView';
import TaskView from '../views/TaskView';
import AddView from '../views/ProjectView/AddProject';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
         tabBarIcon: ({focused}) => {
          return <TabBarIcon name={route.name}  focused={focused}/>;
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
      <Tab.Screen name="AddProject" component={AddView} />
      <Tab.Screen name="Search" component={TaskView} />
      <Tab.Screen name="Profile" component={RoomView} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
