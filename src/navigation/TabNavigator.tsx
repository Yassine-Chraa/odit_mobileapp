import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../views/HomeView';
import Notifications from '../views/NotificationView'
import AddProject from '../views/ProjectView/AddProject'
import TabBarIcon from '../components/navigation/TabBarIcon';
import RoomView from '../views/RoomView';
import TaskView from '../views/TaskView';
import AddView from '../views/ProjectView/AddProject';
import SearchView from '../views/SearchView';
import ProfileView from '../views/ProfileView';

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
      initialRouteName="Home"
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="AddProject" component={AddProject} />
      <Tab.Screen name="Search" component={SearchView} />
      <Tab.Screen name="Profile" component={ProfileView} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
