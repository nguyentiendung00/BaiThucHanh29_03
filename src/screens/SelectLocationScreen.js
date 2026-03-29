import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  Image, 
  StatusBar, 
  Platform,
  Alert 
} from 'react-native';

export default function SelectLocationScreen({ navigation }) {
  const [zone, setZone] = useState('Banasree');
  const [area, setArea] = useState('');

  const handleSubmit = () => {
    navigation.navigate('Login'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.inner}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/Frame.png')} style={styles.backIcon} />
        </TouchableOpacity>

        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image 
              source={require('../../assets/illustration.png')} 
              style={styles.illustration} 
            />
          </View>

          <Text style={styles.title}>Select Your Location</Text>
          <Text style={styles.description}>
            Switch on your location to stay in tune with what's happening in your area
          </Text>

          <View style={styles.inputSection}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Your Zone</Text>
              <TouchableOpacity style={styles.dropdown}>
                <Text style={styles.inputText}>{zone}</Text>
                <Image 
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271210.png' }} 
                  style={styles.chevronIcon} 
                />
              </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Your Area</Text>
              <TouchableOpacity style={styles.dropdown}>
                <Text style={[styles.inputText, { color: '#B1B1B1', fontWeight: '400' }]}>
                  Types of your area
                </Text>
                <Image 
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271210.png' }} 
                  style={styles.chevronIcon} 
                />
              </TouchableOpacity>
            </View>
          </View>

          {}
          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Image source={require('../../assets/submit.png')} style={styles.submitImg} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { flex: 1 },
  backBtn: { 
    marginTop: Platform.OS === 'android' ? 50 : 20, 
    marginLeft: 25, 
    width: 40, 
    height: 40, 
    justifyContent: 'center' 
  },
  backIcon: { width: 10, height: 18, resizeMode: 'contain' },
  content: { paddingHorizontal: 25, flex: 1, alignItems: 'center' },
  imageContainer: { marginTop: 30, marginBottom: 40 },
  illustration: { width: 220, height: 170, resizeMode: 'contain' },
  title: { fontSize: 26, fontWeight: '600', color: '#181725', marginBottom: 15, textAlign: 'center' },
  description: { fontSize: 16, color: '#7C7C7C', textAlign: 'center', lineHeight: 22, marginBottom: 60 },
  inputSection: { width: '100%', marginBottom: 40 },
  inputGroup: { marginBottom: 30 },
  label: { fontSize: 16, color: '#7C7C7C', fontWeight: '600', marginBottom: 10 },
  dropdown: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2',
    paddingBottom: 15 
  },
  inputText: { fontSize: 18, color: '#181725', fontWeight: '500' },
  chevronIcon: { width: 14, height: 14, tintColor: '#7C7C7C', resizeMode: 'contain' },
  submitBtn: { 
    width: '100%', 
    height: 67, 
    marginTop: 'auto', 
    marginBottom: 40 
  },
  submitImg: { width: '100%', height: '100%', resizeMode: 'contain' }
});