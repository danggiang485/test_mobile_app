import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AdminScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Trang quản trị Admin</Text>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.sectionTitle}> Danh sách tài khoản:</Text>

        {/* Nhân viên */}
        <View style={styles.card}>
          <Text style={styles.userName}>Nguyễn Văn A</Text>
          <Text style={styles.userRole}> Vai trò: Nhân viên</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.userName}>Trần Thị B</Text>
          <Text style={styles.userRole}> Vai trò: Nhân viên</Text>
        </View>

        {/* Quản lý */}
        <View style={styles.card}>
          <Text style={styles.userName}>Lê Văn C</Text>
          <Text style={styles.userRole}> Vai trò: Quản lý</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.userName}>Phạm Thị D</Text>
          <Text style={styles.userRole}> Vai trò: Quản lý</Text>
        </View>

        <View style={styles.noteBox}>
          <Text style={styles.note}>
             Đây là bản demo cố định hiển thị cứng danh sách tài khoản cho quản trị viên.{"\n"}(Không có điều hướng hoặc thao tác CRUD).
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    paddingTop: 20,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    color: "#444",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },
  userRole: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  noteBox: {
    marginTop: 30,
    backgroundColor: "#e0f7fa",
    padding: 16,
    borderRadius: 8,
  },
  note: {
    fontSize: 14,
    color: "#00796b",
    lineHeight: 20,
  },
});
