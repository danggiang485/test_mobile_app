import React from 'react';
import { View, Text, FlatList } from 'react-native';

const data = [
  { date: '2025-07-21', checkin: '08:00', checkout: '17:00' },
  { date: '2025-07-20', checkin: '08:15', checkout: '17:05' },
];

export default function AttendanceScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Nhật ký chấm công</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text>{item.date}: {item.checkin} - {item.checkout}</Text>
        )}
        keyExtractor={(item) => item.date}
      />
    </View>
  );
}
