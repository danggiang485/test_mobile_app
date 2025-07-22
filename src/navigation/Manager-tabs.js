import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManagerHome from '../screens/Manager/HomeScreen';
import ApprovalScreen from '../screens/Manager/ApprovalScreen';
import EvaluationScreen from '../screens/Manager/EvaluationScreen';

const Tab = createBottomTabNavigator();

export default function ManagerTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Thống kê" component={ManagerHome} />
      <Tab.Screen name="Duyệt đơn" component={ApprovalScreen} />
      <Tab.Screen name="Đánh giá" component={EvaluationScreen} />
    </Tab.Navigator>
  );
}
