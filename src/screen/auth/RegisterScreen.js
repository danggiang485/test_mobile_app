import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = () => {
    Alert.alert("Đăng ký thành công");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Mật khẩu"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        placeholder="Xác nhận mật khẩu"
        secureTextEntry
        style={styles.input}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <TextInput
        placeholder="Chức vụ "
        secureTextEntry
        style={styles.input}
        onChangeText={setRole}
        value={role}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Đang đăng ký..." : "Đăng ký"}
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Đăng ký</Text>
      </TouchableOpacity> */}
      <Text onPress={() => navigation.navigate("Login")} style={styles.link}>
        Đã có tài khoản? Đăng nhập
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: { backgroundColor: "#007bff", padding: 15, borderRadius: 5 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  link: { color: "blue", textAlign: "center", marginTop: 10 },
});
