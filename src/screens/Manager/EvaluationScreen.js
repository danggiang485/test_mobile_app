import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function EvaluationScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Đánh giá nhân viên A</Text>
      <TextInput placeholder="Nhận xét" style={{ borderWidth: 1, marginVertical: 10 }} />
      <Button title="Gửi đánh giá" />
    </View>
  );
}
