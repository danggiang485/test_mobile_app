import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ManagementScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trang quản lý Manager</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24 }
});
