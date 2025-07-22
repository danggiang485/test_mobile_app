import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LeaveScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Số ngày phép còn lại: 10</Text>
      <Button title="Gửi đơn nghỉ phép" onPress={() => {}} />
    </View>
  );
}
