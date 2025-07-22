import React from 'react';
import { View, Text } from 'react-native';

export default function SalaryScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold' }}>Lương tháng 07/2025</Text>
      <Text>Lương cơ bản: 10.000.000đ</Text>
      <Text>Số ngày làm: 22</Text>
      <Text>Ngày nghỉ: 1 (có phép)</Text>
      <Text>Tổng lương: 10.000.000đ</Text>
    </View>
  );
}
