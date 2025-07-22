import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Employee/HomeScreen';
import ProfileScreen from '../screens/Employee/ProfileScreen';
import AttendanceScreen from '../screens/Employee/AttendanceScreen.js';
import SalaryScreen from '../screens/Employee/SalaryScreen';
import LeaveScreen from '../screens/Employee/LeaveScreen';
import NotificationScreen from '../screens/Employee/NotificationScreen';
import SettingsScreen from '../screens/Employee/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function EmployeeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Hồ sơ" component={ProfileScreen} />
      <Tab.Screen name="Chấm công" component={AttendanceScreen} />
      <Tab.Screen name="Lương" component={SalaryScreen} />
      <Tab.Screen name="Nghỉ phép" component={LeaveScreen} />
      <Tab.Screen name="Thông báo" component={NotificationScreen} />
      <Tab.Screen name="Cài đặt" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
