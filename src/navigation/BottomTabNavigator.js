import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IntroduceScreen from '../screen/main/IntroduceScreen';
import { Ionicons } from '@expo/vector-icons';
import AdminScreen from '../screen/main/AdminScreen';
import ManagementScreen from '../screen/main/ManagementScreen';
import UserScreen from '../screen/main/UserScreen';
import  SettingScreen  from '../screen/main/SettingScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Admin') {
            iconName = focused ? 'shield' : 'shield-outline';
          } else if (route.name === 'User') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Manager') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={IntroduceScreen} 
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Admin" 
        component={AdminScreen} 
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Manager" 
        component={ManagementScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="User" 
        component={UserScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Setting" 
        component={SettingScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;