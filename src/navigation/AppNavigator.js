import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/auth/LoginScreen';
import RegisterScreen from '../screen/auth/RegisterScreen';
import AdminScreen from '../screen/main/AdminScreen';
import ManagementScreen from '../screen/main/ManagementScreen';
import UserScreen from '../screen/main/UserScreen';
import UserDetailScreen from '../screen/main/UserDetailScreen';
import AddUserScreen from '../screen/main/AddUserScreen';
import SettingScreen from '../screen/main/SettingScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Introduce" 
        component={BottomTabNavigator}
        options={{ 
          headerShown: false,
          gestureEnabled: false 
        }}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Admin" component={AdminScreen} />
      <Stack.Screen name="Manager" component={ManagementScreen} />
      <Stack.Screen name="User" component={UserScreen} />
      <Stack.Screen 
        name="UserDetail" 
        component={UserDetailScreen}
        options={{ 
          title: 'Chi tiết nhân viên',
          headerBackTitle: 'Quay lại'
        }}
      />
      <Stack.Screen 
        name="AddUser" 
        component={AddUserScreen}
        options={{ 
          title: 'Thêm Người Dùng',
          headerBackTitle: 'Quay lại'
        }}
      />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>

    // button settings
  );
}