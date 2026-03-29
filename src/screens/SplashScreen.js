import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {}
      <Image 
        source={require('../../assets/Group 1.png')} 
        style={styles.logoImg} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53B075',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    width: 240, 
    height: 55, 
    resizeMode: 'contain', 
  },
});