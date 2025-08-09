import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddUserScreen({ navigation }) {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: '',
    department: '',
    phone: '',
    address: ''
  });

  const handleSave = async () => {
    try {
      const response = await fetch('http://172.17.155.123:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        Alert.alert(
          'Thành công',
          'Thêm người dùng mới thành công',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Manager')
            }
          ]
        );
      } else {
        Alert.alert('Lỗi', 'Không thể thêm người dùng');
      }
    } catch (error) {
      Alert.alert('Lỗi', 'Có lỗi xảy ra khi thêm người dùng');
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.form}>
          <Text style={styles.title}>Thêm Người Dùng Mới</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tên:</Text>
            <TextInput
              style={styles.input}
              value={newUser.name}
              onChangeText={(text) => setNewUser({...newUser, name: text})}
              placeholder="Nhập tên"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              value={newUser.email}
              onChangeText={(text) => setNewUser({...newUser, email: text})}
              placeholder="Nhập email"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Chức vụ:</Text>
            <TextInput
              style={styles.input}
              value={newUser.role}
              onChangeText={(text) => setNewUser({...newUser, role: text})}
              placeholder="Nhập chức vụ"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phòng ban:</Text>
            <TextInput
              style={styles.input}
              value={newUser.department}
              onChangeText={(text) => setNewUser({...newUser, department: text})}
              placeholder="Nhập phòng ban"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Số điện thoại:</Text>
            <TextInput
              style={styles.input}
              value={newUser.phone}
              onChangeText={(text) => setNewUser({...newUser, phone: text})}
              placeholder="Nhập số điện thoại"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Địa chỉ:</Text>
            <TextInput
              style={styles.input}
              value={newUser.address}
              onChangeText={(text) => setNewUser({...newUser, address: text})}
              placeholder="Nhập địa chỉ"
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.saveButton]} 
              onPress={handleSave}
            >
              <Text style={styles.buttonText}>Lưu</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, styles.cancelButton]} 
              onPress={() => navigation.navigate('Manager')}
            >
              <Text style={styles.buttonText}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  form: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  saveButton: {
    backgroundColor: '#34C759',
  },
  cancelButton: {
    backgroundColor: '#8E8E93',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});