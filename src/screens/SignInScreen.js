import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  SafeAreaView, 
  TouchableOpacity, 
  StatusBar 
} from 'react-native';

export default function SignInScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.topSection}>
        {/* Quân check kỹ tên file: 'Mask Group.png' hay 'mask_group.png' nhé */}
        <Image 
          source={require('../../assets/Mask Group.png')} 
          style={styles.bgImage} 
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Get your groceries{"\n"}with nectar</Text>

        {/* 1. Ô nhập số điện thoại (Dùng ảnh Group 6798.png) */}
        <TouchableOpacity 
          style={styles.phoneInputContainer} 
          onPress={() => navigation.navigate('Number')}
        >
          <Image 
            source={require('../../assets/Group 6798.png')} 
            style={styles.fullImg} 
          />
        </TouchableOpacity>

        <Text style={styles.socialText}>Or connect with social media</Text>

        {/* 2. Nút Google (Chỉ dùng ảnh google.png) */}
        <TouchableOpacity 
          style={styles.socialBtnContainer} 
          onPress={() => { /* Không làm gì cả */ }}
        >
          <Image 
            source={require('../../assets/google.png')} 
            style={styles.fullImg} 
          />
        </TouchableOpacity>

        {/* 3. Nút Facebook (Chỉ dùng ảnh facebook.png) */}
        <TouchableOpacity 
          style={[styles.socialBtnContainer, { marginTop: 20 }]} 
          onPress={() => { /* Không làm gì cả */ }}
        >
          <Image 
            source={require('../../assets/facebook.png')} 
            style={styles.fullImg} 
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  
  topSection: { width: '100%', height: 350 },
  bgImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  
  content: { paddingHorizontal: 25, paddingTop: 20 },
  title: { fontSize: 26, fontWeight: '600', color: '#181725', marginBottom: 30 },
  
  phoneInputContainer: { 
    width: '100%',
    height: 45, // Chỉnh lại chiều cao cho vừa cái ảnh của bạn
    marginBottom: 40 
  },

  socialBtnContainer: { 
    width: '100%', 
    height: 67, // Chiều cao chuẩn cho nút bấm
  },

  fullImg: { 
    width: '100%', 
    height: '100%', 
    resizeMode: 'contain' // Đảm bảo ảnh không bị méo
  },
  
  socialText: { 
    textAlign: 'center', 
    color: '#828282', 
    fontSize: 14, 
    fontWeight: '600', 
    marginBottom: 40 
  }
});