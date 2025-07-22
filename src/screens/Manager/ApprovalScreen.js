import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ApprovalScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Đơn nghỉ: Nhân viên A - 22/07</Text>
      <Button title="Duyệt" />
      <Button title="Từ chối" />
    </View>
  );
}
