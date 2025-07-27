import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ManagementScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Trang Quản Lý</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,           // Đảm bảo chiếm toàn bộ màn hình
    padding: 20,
    backgroundColor: '#fff' // Thêm màu nền nếu cần
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});