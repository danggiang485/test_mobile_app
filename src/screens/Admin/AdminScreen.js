import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AdminScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Quản lý tài khoản admin</Text>
      <Button title="Thêm admin mới" />
      <Button title="Xóa admin" />
    </View>
  );
}
