import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Thêm state để lưu role người dùng

  const handleLogin = () => {
    // Giả lập đăng nhập thành công với role tạm thời (có thể thay bằng API)
    if (email === 'user@example.com' && password === '123456' && role === 'a') {
      const userRole = 'employee'; // bạn có thể set thành 'admin', 'manager', etc.
      handleLoginByRole(userRole);
      navigation.replace('Introduce')
    } else {
      Alert.alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  const handleLoginByRole = async (userRole) => {
    try {
      if (userRole === 'employee') {
        navigation.replace('EmployeeHome');
      } else if (userRole === 'manager') {
        navigation.replace('Manager');
      } else if (userRole === 'admin') {
        navigation.replace('Admin');
      } else {
        navigation.replace('Introduce');
      }
    } catch (error) {
      console.error('Login role navigation error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
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
        placeholder="chức vụ"
        secureTextEntry
        style={styles.input}
        onChangeText={setRole}
        value={role}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
      <Text onPress={() => navigation.navigate('Register')} style={styles.link}>
        Chưa có tài khoản? Đăng ký
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  button: { backgroundColor: '#007bff', padding: 15, borderRadius: 5 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  link: { color: 'blue', textAlign: 'center', marginTop: 10 }
});
