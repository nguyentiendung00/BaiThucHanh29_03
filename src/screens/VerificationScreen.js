import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  Image, 
  TextInput, 
  StatusBar, 
  KeyboardAvoidingView, 
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

export default function VerificationScreen({ navigation }) {
  const [otpCode, setOtpCode] = useState('');
  const otpInputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (otpInputRef.current) {
        otpInputRef.current.focus();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    navigation.navigate('Location'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            
            <View style={styles.topContent}>
              {}
              <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/Frame.png')} style={styles.backIcon} />
              </TouchableOpacity>

              {}
              <View style={styles.content}>
                <Text style={styles.title}>Enter your 4-digit code</Text>
                
                <Text style={styles.label}>Code</Text>
                
                <TouchableOpacity 
                  activeOpacity={1} 
                  onPress={() => otpInputRef.current.focus()}
                  style={styles.otpInputWrapper}
                >
                  <TextInput
                    ref={otpInputRef}
                    style={styles.hiddenInput}
                    keyboardType="numeric"
                    maxLength={4}
                    value={otpCode}
                    onChangeText={(text) => setOtpCode(text)}
                  />
                  
                  <View style={styles.otpContainer}>
                    {[0, 1, 2, 3].map((index) => (
                      <View key={index} style={styles.otpBox}>
                        <Text style={styles.otpText}>
                          {otpCode[index] ? otpCode[index] : '-'}
                        </Text>
                      </View>
                    ))}
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.footer}>
              <TouchableOpacity 
                style={styles.resendBtn} 
                onPress={() => Alert.alert("Thông báo", "Đã gửi lại mã!")}
              >
                <Text style={styles.resendText}>Resend Code</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.nextBtn} 
                onPress={handleNext}
              >
                <Image 
                  source={require('../../assets/Group 6802.png')} 
                  style={styles.nextIcon} 
                />
              </TouchableOpacity>
            </View>

          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { flex: 1, justifyContent: 'space-between' },
  topContent: { flex: 1 },
  
  backBtn: { marginTop: 50, marginLeft: 25, width: 40, height: 40, justifyContent: 'center' },
  backIcon: { width: 10, height: 18, resizeMode: 'contain' },
  
  content: { paddingHorizontal: 25, paddingTop: 70 },
  
  title: { fontSize: 26, fontWeight: '500', color: '#181725', marginBottom: 40 },
  label: { fontSize: 16, color: '#7C7C7C', fontWeight: '600', marginBottom: 15 },
  
  otpInputWrapper: {
    width: '100%',
    height: 50, 
    borderBottomWidth: 1.5,
    borderBottomColor: '#E2E2E2',
    justifyContent: 'center', 
    marginTop: 10,
  },
  otpContainer: { 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center' 
  },
  hiddenInput: { 
    position: 'absolute', 
    width: '100%', 
    height: '100%', 
    opacity: 0, 
    zIndex: 1, 
  },
  otpBox: {
    width: 15, 
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
  },
  otpText: { 
    fontSize: 22, 
    color: '#181725', 
    fontWeight: '500' 
  },

  footer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingBottom: 40, 
  },
  resendText: { 
    fontSize: 18, 
    color: '#53B175', 
    fontWeight: '400' 
  },
  nextBtn: { 
    width: 67, 
    height: 67, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  nextIcon: { 
    width: '100%', 
    height: '100%', 
    resizeMode: 'contain',
  },
});