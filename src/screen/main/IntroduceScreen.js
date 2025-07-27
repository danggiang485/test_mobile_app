import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Alert,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

// 🔹 Danh sách tính năng
const features = [
  "Feature 1: Description of feature 1",
  "Feature 2: Description of feature 2",
  "Feature 3: Description of feature 3",
];

// 🔹 Dữ liệu tin tức
const newsData = [
  {
    id: "1",
    title: "Nổ súng tại biên giới Thái Lan - Campuchia",
    image:
      "https://photo-baomoi.bmcdn.me/w700_r1/2023_11_01_15_47299138/9f193ee1224fd5f8982ce40a2a2dc2b9.jpeg",
  },
  {
    id: "2",
    title: "Tín hiệu cấp cứu khẩn cấp trong vụ tàu Vịnh Xanh 58 lật úp?",
    image:
      "https://photo-baomoi.bmcdn.me/w700_r1/2023_11_01_23_47299675/9df6fa1a57eb50733f69031c6d25a041.jpeg",
  },
  {
    id: "3",
    title:
      "Nguyên Phó Chánh án TAND Cấp cao tại Đà Nẵng bị khởi tố vì nhận hối lộ",
    image:
      "https://photo-baomoi.bmcdn.me/w700_r1/2023_11_01_15_47299193/2aa9941cb2db4e7ac2feceab0a2b74f4.jpeg",
  },
];

const IntroduceScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");

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

  // 🔍 Lọc tin tức theo từ khoá nhập vào
  const filteredNews = newsData.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity style={styles.newsItem}>
      <Image source={{ uri: item.image }} style={styles.newsImage} />
      <View style={styles.newsTextContainer}>
        <Text style={styles.newsTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 🔺 Header có nút đăng xuất */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>HRM APP</Text>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>

        {/* 🔍 Tìm kiếm */}
        <TextInput
          placeholder="Tìm kiếm thông tin nhân viên..."
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchInput}
          placeholderTextColor="#999"
        />

        {/* 👋 Giới thiệu */}
        <View style={styles.section}>
          <Text style={styles.title}>Welcome to Our App</Text>
          <Text style={styles.description}>
            This is the introduction page of our{" "}
            <Text style={{ fontWeight: "bold" }}>HRM APP</Text>. Here you can
            add your company or app introduction content.
          </Text>
        </View>

        {/* ➡️ Tính năng cuộn ngang */}
        <View style={styles.section}>
          <Text style={styles.title}>Features</Text>
          <FlatList
            data={features}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.featureCard}>
                <Text style={styles.featureText}>{item}</Text>
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ height: 120 }}
          />
        </View>

        {/* 📝 Danh sách tính năng dạng văn bản */}
        <View style={styles.section}>
          <Text style={styles.title}>Features</Text>
          {features.map((feature, index) => (
            <Text key={index} style={styles.description}>
              - {feature}
            </Text>
          ))}
        </View>

        {/* 📰 Danh sách tin tức */}
        <View style={styles.section}>
          <Text style={styles.title}>Latest News</Text>
          {filteredNews.length === 0 ? (
            <Text style={styles.description}>Không tìm thấy kết quả.</Text>
          ) : (
            <FlatList
              data={filteredNews}
              renderItem={renderNewsItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          )}
        </View>

        {/* 🔙 Nút quay lại login */}
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Welcome to Our Company</Text>
          {/* <Button title="Login" onPress={() => navigation.navigate("Login")} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContent: { padding: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "#ff4444",
    padding: 8,
    borderRadius: 8,
  },
  logoutText: {
    color: "white",
    fontWeight: "bold",
  },
  section: { marginBottom: 30 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: "#555",
    marginBottom: 6,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    fontSize: 16,
    color: "#000",
  },
  featureCard: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    marginRight: 12,
    borderRadius: 10,
    minWidth: 200,
    justifyContent: "center",
  },
  featureText: {
    fontSize: 16,
    color: "#444",
  },
  newsItem: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "flex-start",
  },
  newsImage: {
    width: 100,
    height: 70,
    borderRadius: 6,
    marginRight: 10,
  },
  newsTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  newsTitle: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
});

export default IntroduceScreen;
