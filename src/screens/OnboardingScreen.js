import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {}
      <ImageBackground 
        source={require('../../assets/8140 1.png')} 
        style={styles.backgroundImage}
        resizeMode="stretch"
      >
        <View style={styles.contentContainer}>
          <Image source={require('../../assets/carot.png')} style={styles.carotIcon} />
          <Image source={require('../../assets/Welcome to our store.png')} style={styles.titleImg} />
          <Image source={require('../../assets/Ger your groceries in as fast as one hour.png')} style={styles.subtitleImg} />
          
          <TouchableOpacity 
            style={styles.buttonContainer} 
            onPress={() => navigation.replace('SignIn')}
          >
            <Image source={require('../../assets/button.png')} style={styles.buttonImg} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 50, 
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingTop: 30,
  },
  carotIcon: {
    width: 48, 
    height: 56, 
    resizeMode: 'contain',
    marginBottom: 10,
  },
  titleImg: {
    width: 253, 
    height: 80, 
    resizeMode: 'contain',
    marginBottom: 10,
  },
  subtitleImg: {
    width: 282, 
    height: 40, 
    resizeMode: 'contain',
    marginBottom: 35,
  },
  buttonContainer: {
    width: '90%',
    height: 67, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', 
  },
});