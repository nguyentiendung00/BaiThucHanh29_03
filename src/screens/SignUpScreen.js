import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';

const GROUP_ICON = require('../../assets/Group.png'); 
const SIGNUP_BUTTON_IMAGE = require('../../assets/signup.png'); 

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('Afsar Hossen Shuvo'); 
  const [email, setEmail] = useState('imshuvo97@gmail.com'); 
  const [password, setPassword] = useState('........'); 
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 

  const handleBack = () => {
    console.log('Go Back - Quay lại màn trước');
  };

  const handleSignUp = () => {
    console.log('Sign Up attempted with:', username, email, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      {}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          {}
          <View style={styles.header}>
            <Image source={GROUP_ICON} style={styles.logo} />
          </View>

          {}
          <View style={styles.textHeader}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.description}>
              Enter your credentials to continue
            </Text>
          </View>

          {}
          <View style={styles.form}>
            
            {}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Types your username"
                placeholderTextColor="#B1B1B1"
              />
            </View>

            {}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputWithIconContainer}>
                <TextInput
                  style={[styles.input, { flex: 1, borderBottomWidth: 0 }]}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="imshuvo97@gmail.com"
                  placeholderTextColor="#B1B1B1"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {}
                <Text style={styles.checkIcon}>✓</Text>
              </View>
              <View style={styles.underline} />
            </View>

            {}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputWithIconContainer}>
                <TextInput
                  style={[styles.input, { flex: 1, borderBottomWidth: 0 }]}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Enter your password"
                  placeholderTextColor="#B1B1B1"
                  secureTextEntry={!isPasswordVisible}
                />
                {}
                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                  <Text style={styles.eyeIcon}>{isPasswordVisible ? '👁️' : '👁️‍🗨️'}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.underline} />
            </View>

          </View>

          {}
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By continuing you agree to our{' '}
              <Text style={styles.linkText} onPress={() => Alert.alert('Thông báo', 'Mở Terms of Service')}>
                Terms of Service
              </Text>{' '}
              and{' '}
              <Text style={styles.linkText} onPress={() => Alert.alert('Thông báo', 'Mở Privacy Policy')}>
                Privacy Policy.
              </Text>
            </Text>
          </View>

          {}
          <TouchableOpacity style={styles.submitButtonContainer} onPress={handleSignUp}>
            <View style={styles.submitButtonView}>
              <Image source={SIGNUP_BUTTON_IMAGE} style={styles.submitButtonImage} />
            </View>
          </TouchableOpacity>

          {}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            {}
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.footerLinkText}> Singup</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 25, 
    paddingTop: Platform.OS === 'android' ? 50 : 20, 
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 47,
    height: 55,
    resizeMode: 'contain',
  },
  textHeader: {
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#181725', 
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#7C7C7C',
  },
  form: {
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 25, 
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7C7C7C', 
    marginBottom: 8, 
  },
  input: {
    fontSize: 18,
    color: '#181725', 
    paddingVertical: 10,
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2',
  },
  inputWithIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  underline: {
    height: 1,
    backgroundColor: '#E2E2E2', 
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  checkIcon: {
    fontSize: 18,
    color: '#53B175', 
  },
  eyeIcon: {
    fontSize: 18,
    color: '#7C7C7C', 
  },
  termsContainer: {
    marginBottom: 40,
  },
  termsText: {
    fontSize: 14,
    color: '#7C7C7C', 
    lineHeight: 22,
  },
  linkText: {
    color: '#53B175', 
  },
  submitButtonContainer: {
    marginBottom: 25, 
    width: '100%',
    height: 60, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  submitButtonView: {
    flex: 1,
    borderRadius: 15, 
    overflow: 'hidden', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  footerText: {
    fontSize: 14,
    color: '#181725', 
  },
  footerLinkText: {
    fontSize: 14,
    color: '#53B175', 
  },
});