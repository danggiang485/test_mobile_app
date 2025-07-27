import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trang nhân viên</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24 }
});
