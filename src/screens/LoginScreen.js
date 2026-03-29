import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, SafeAreaView, TouchableOpacity, 
  Image, TextInput, StatusBar, KeyboardAvoidingView, 
  Platform, TouchableWithoutFeedback, Keyboard 
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            
            {/* 1. Logo & Header */}
            <View style={styles.topSection}>
              <Image 
                source={require('../../assets/Group.png')} 
                style={styles.logo} 
              />
              <View style={styles.textImageContainer}>
                <Image 
                  source={require('../../assets/text3.png')} 
                  style={styles.textHeaderImg} 
                />
              </View>
            </View>

            {/* 2. Inputs */}
            <View style={styles.inputSection}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="imshuvo97@gmail.com"
                  placeholderTextColor="#181725"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={[styles.inputGroup, { marginTop: 30 }]}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={[styles.input, { flex: 1, borderBottomWidth: 0 }]}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!isPasswordVisible}
                  />
                  <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Image 
                      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/159/159604.png' }} 
                      style={styles.eyeIcon} 
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.borderBottom} />
              </View>

              <TouchableOpacity style={styles.forgotBtn}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            {/* 3. Footer Buttons */}
            <View style={styles.footer}>
              {/* Nút Login chuyển sang màn hình nhập số */}
              <TouchableOpacity 
                style={styles.loginBtn} 
                onPress={() => navigation.navigate('Home')}
              >
                <Image 
                  source={require('../../assets/login.png')} 
                  style={styles.loginImg} 
                />
              </TouchableOpacity>

              <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don't have an account? </Text>
                {/* Chuyển sang màn hình SignUp */}
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text style={styles.signupLink}>Singup</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { flex: 1, paddingHorizontal: 25 },
  topSection: { 
    alignItems: 'center', 
    marginTop: Platform.OS === 'android' ? 60 : 30,
    marginBottom: 40 
  },
  logo: { width: 47, height: 55, resizeMode: 'contain' },
  textImageContainer: { width: '100%', marginTop: 60, alignItems: 'flex-start' },
  textHeaderImg: { width: 250, height: 80, resizeMode: 'contain' },
  inputSection: { marginTop: 10 },
  inputGroup: { width: '100%' },
  label: { fontSize: 16, color: '#7C7C7C', fontWeight: '600', marginBottom: 10 },
  input: { 
    fontSize: 18, 
    color: '#181725', 
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2', 
    paddingBottom: 10 
  },
  passwordContainer: { flexDirection: 'row', alignItems: 'center' },
  eyeIcon: { width: 20, height: 20, tintColor: '#7C7C7C', resizeMode: 'contain' },
  borderBottom: { height: 1, backgroundColor: '#E2E2E2', width: '100%' },
  forgotBtn: { alignSelf: 'flex-end', marginTop: 20 },
  forgotText: { fontSize: 14, color: '#181725', fontWeight: '500' },
  footer: { marginTop: 40, alignItems: 'center' },
  loginBtn: { width: '100%', height: 67, marginBottom: 20 },
  loginImg: { width: '100%', height: '100%', resizeMode: 'contain' },
  signupContainer: { flexDirection: 'row', marginTop: 5 },
  signupText: { fontSize: 14, color: '#181725', fontWeight: '600' },
  signupLink: { fontSize: 14, color: '#53B175', fontWeight: '600' },
});