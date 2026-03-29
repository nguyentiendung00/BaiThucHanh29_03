import React, { useState } from 'react';
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
  Keyboard
} from 'react-native';

export default function NumberScreen({ navigation }) {
  const [number, setNumber] = useState('');

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
              <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/Frame.png')} style={styles.backIcon} />
              </TouchableOpacity>

              <View style={styles.content}>
                <Text style={styles.title}>Enter your mobile number</Text>
                <Text style={styles.label}>Mobile Number</Text>
                
                <View style={styles.inputContainer}>
                  {}
                  <Image 
                    source={require('../../assets/Group 6798.png')} 
                    style={styles.flagImageBackground} 
                    pointerEvents="none" 
                  />
                  
                  {}
                  <TextInput
                    style={styles.inputOverlay}
                    keyboardType="numeric"
                    value={number}
                    onChangeText={setNumber}
                    autoFocus={true}
                    placeholderTextColor="#B1B1B1"
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>

            {}
            <View style={styles.footer}>
              <TouchableOpacity 
                style={styles.nextBtn} 
                onPress={() => navigation.navigate('Verification')}
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
  container: { flex: 1, backgroundColor: '#fff'},
  inner: { flex: 1, justifyContent: 'space-between' },
  
  topContent: { flex: 1 },
  backBtn: { marginTop: 20, marginLeft: 25, width: 40, height: 40, justifyContent: 'center' },
  backIcon: { width: 10, height: 18, resizeMode: 'contain' },
  
  content: { paddingHorizontal: 25, paddingTop: 40 },
  title: { fontSize: 24, fontWeight: '600', color: '#181725', marginBottom: 40 },
  label: { fontSize: 16, color: '#7C7C7C', fontWeight: '600', marginBottom: 10 },
  
  inputContainer: { 
    width: '100%',
    height: 50,
    justifyContent: 'center',
    marginTop: 10,
    position: 'relative', 
  },

  flagImageBackground: {
    width: '100%',
    height: '100%', 
    resizeMode: 'contain',
  },

  inputOverlay: { 
    position: 'absolute', 
    left: 85, 
    right: 0,
    height: '100%',
    fontSize: 15, 
    color: '#181725',
    fontWeight: '600',
    textAlignVertical: 'center',
    paddingBottom: 22, 
    zIndex: 1,
  },

  footer: {
    alignItems: 'flex-end',
    paddingRight: 25,
    paddingBottom: 30,
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