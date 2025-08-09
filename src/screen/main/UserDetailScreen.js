import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UserDetailScreen({ route, navigation }) {
  const { user } = route.params;
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const baseUrl = "http://172.28.128.1:8080//employees/api";

  const handleUpdate = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`${baseUrl}/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedUser),
      });

      if (response.ok) {    
        Alert.alert(
          'Thành công',
          'Cập nhật thông tin thành công',
          [
            {
              text: 'OK',
              onPress: () => {
                setIsEditing(false);
                // Cập nhật lại thông tin user sau khi sửa
                route.params.user = editedUser;
              }
            }
          ]
        );
      } else {
        Alert.alert('Lỗi', 'Không thể cập nhật thông tin');
      }
    } catch (error) {
      Alert.alert('Lỗi', 'Có lỗi xảy ra khi cập nhật');
      console.error(error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser(user); // Reset về dữ liệu ban đầu
  };

  const handleDelete = () => {
    Alert.alert(
      'Xác nhận xóa',
      'Bạn có chắc muốn xóa người dùng này?',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Xóa',
          style: 'destructive',
          onPress: async () => {
            try {
              const response = await fetch(`${baseUrl}/${user.id}`, {
                method: 'DELETE',
              });

              if (response.ok) {
                Alert.alert(
                  'Thành công',
                  'Xóa người dùng thành công',
                  [
                    {
                      text: 'OK',
                      onPress: () => navigation.navigate('Manager') // Quay về màn hình quản lý
                    }
                  ]
                );
              } else {
                Alert.alert('Lỗi', 'Không thể xóa người dùng');
              }
            } catch (error) {
              Alert.alert('Lỗi', 'Có lỗi xảy ra khi xóa');
              console.error(error);
            }
          },
        },
      ]
    );
  };

  const renderField = (label, value, field) => {
    return (
      <View style={styles.infoRow}>
        <Text style={styles.label}>{label}:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={editedUser[field]}
            onChangeText={(text) => setEditedUser({ ...editedUser, [field]: text })}
          />
        ) : (
          <Text style={styles.value}>{value}</Text>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          {renderField('Tên', user.name, 'name')}
          {renderField('Email', user.email, 'email')}
          {renderField('Chức vụ', user.role, 'role')}
          {renderField('Phòng ban', user.department, 'department')}
          {renderField('SĐT', user.phone, 'phone')}
          {renderField('Địa chỉ', user.address, 'address')}

          <View style={styles.buttonContainer}>
            {!isEditing ? (
              <>
                <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
                  <Text style={styles.buttonText}>Cập nhật</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                  <Text style={styles.buttonText}>Xóa</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                  <Text style={styles.buttonText}>Lưu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                  <Text style={styles.buttonText}>Hủy</Text>
                </TouchableOpacity>
              </>
            )}
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
  card: {
    margin: 16,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  role: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    backgroundColor: '#e8e8e8',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  infoSection: {
    marginTop: 16,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  label: {
    width: 100,
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  value: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    marginLeft: 8,
    fontSize: 16,
  },
  updateButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginLeft: 8,
  },
  saveButton: {
    backgroundColor: '#34C759',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
  },
  cancelButton: {
    backgroundColor: '#8E8E93',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginLeft: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});