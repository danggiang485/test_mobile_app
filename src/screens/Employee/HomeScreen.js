import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function EmployeeHome() {
  const quickActions = [
    ' Hồ sơ cá nhân',
    ' Chấm công',
    ' Lương tháng này',
    ' Xin nghỉ phép',
    ' Thông báo',
  ];

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Xin chào, Nhân viên A</Text>
      <Text style={{ marginVertical: 10 }}>Tác vụ nhanh:</Text>
      <FlatList
        data={quickActions}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={{ padding: 10, backgroundColor: '#eee', marginBottom: 5 }}>{item}</Text>}
      />
    </View>
  );
}
