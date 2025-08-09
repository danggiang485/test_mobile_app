import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UserScreen() {
  const [selectedFunction, setSelectedFunction] = useState(null);

  const functions = [
    { title: 'Hồ sơ cá nhân', key: 'profile' },
    { title: 'Chấm công', key: 'attendance' },
    { title: 'Xem lương', key: 'salary' },
    { title: 'Đăng ký nghỉ phép', key: 'leave' },
    { title: 'Thông báo', key: 'notification' },
  ];

  // Nội dung hiển thị mô phỏng
  const renderContent = () => {
    switch (selectedFunction) {
      case 'profile':
        return <Text style={styles.contentText}> Họ tên: Nguyễn Văn A{"\n"} Email: nv.a@company.com{"\n"} SĐT: 0123456789</Text>;
      case 'attendance':
        return <Text style={styles.contentText}> Số ngày làm: 20{"\n"} Số giờ làm mỗi ngày: 8{"\n"} Tổng công: 160 giờ</Text>;
      case 'salary':
        return <Text style={styles.contentText}> Lương cơ bản: 10,000,000 VND{"\n"} Thưởng: 2,000,000 VND{"\n"} Tổng: 12,000,000 VND</Text>;
      case 'leave':
        return <Text style={styles.contentText}> Số ngày phép còn lại: 5{"\n"} Ngày nghỉ gần nhất: 15/07/2025</Text>;
      case 'notification':
        return <Text style={styles.contentText}> Thông báo:{"\n"}- Họp toàn công ty ngày 01/08{"\n"}- Cập nhật quy định nghỉ phép mới</Text>;
      default:
        return <Text style={styles.contentText}> Chọn một chức năng để xem thông tin chi tiết.</Text>;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Trang nhân viên</Text>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subTitle}>Chức năng:</Text>

        {functions.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.card,
              selectedFunction === item.key && { backgroundColor: '#dbeafe' },
            ]}
            onPress={() => setSelectedFunction(item.key)}
          >
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.detailSection}>
          <Text style={styles.sectionTitle}> Nội dung:</Text>
          {renderContent()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#444',
  },
  card: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 15,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  detailSection: {
    marginTop: 30,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },
  contentText: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
});
