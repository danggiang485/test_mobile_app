import React from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function SettingScreen() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isNotification, setIsNotification] = React.useState(true);
  const navigation = useNavigation();
  
  const handleLogout = () => {
      Alert.alert("Đăng xuất", "Bạn có chắc muốn đăng xuất?", [
        {
          text: "Hủy",
          style: "cancel",
        },
        {
          text: "Đồng ý",
          onPress: () => {
            navigation.replace("Login");
          },
        },
      ]);
    };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> Cài đặt tài khoản</Text>

      <View style={styles.section}>
        <Text style={styles.label}> Chế độ tối (Dark Mode)</Text>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
          thumbColor={isDarkMode ? "#fff" : "#ccc"}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}> Nhận thông báo</Text>
        <Switch
          value={isNotification}
          onValueChange={setIsNotification}
          thumbColor={isNotification ? "#fff" : "#ccc"}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Đổi mật khẩu</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleLogout} style={styles.button}>
            <Text style={styles.buttonText}>Đăng xuất</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.version}>Phiên bản: 1.0.0</Text>
        <Text style={styles.version}>Bản quyền © 2025</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f5",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  label: {
    fontSize: 16,
    color: "#555",
  },
  button: {
    backgroundColor: "#007aff",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    marginTop: 40,
    alignItems: "center",
  },
  version: {
    fontSize: 12,
    color: "#888",
  },
});
