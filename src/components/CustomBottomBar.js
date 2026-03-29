import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function CustomBottomBar({ navigation, activeTab }) {
  return (
    <View style={styles.bottomBarContainer}>
      
      <TouchableOpacity 
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Home')}
      >
        <Image 
          source={activeTab === 'Shop' 
            ? require('../../assets/Shop1 xanh.png') 
            : require('../../assets/Shop1.png')
          } 
          style={styles.bottomIcon} 
        />
        <Text style={[styles.label, { color: activeTab === 'Shop' ? '#53B175' : '#181725' }]}>
          Shop
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.iconContainer}
        onPress={() => navigation.navigate('Explore')}
      >
        <Image 
          source={activeTab === 'Explore' 
            ? require('../../assets/Explore1 xanh.png') 
            : require('../../assets/Explore1.png')
          } 
          style={styles.bottomIcon} 
        />
        <Text style={[styles.label, { color: activeTab === 'Explore' ? '#53B175' : '#181725' }]}>
          Explore
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <Image source={require('../../assets/Cart1.png')} style={styles.bottomIcon} />
        <Text style={styles.label}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <Image source={require('../../assets/Heart1.png')} style={styles.bottomIcon} />
        <Text style={styles.label}>Favourite</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <Image source={require('../../assets/Account1.png')} style={styles.bottomIcon} />
        <Text style={styles.label}>Account</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  bottomBarContainer: {
    width: '100%',
    height: Platform.OS === 'ios' ? 90 : 75,
    paddingBottom: Platform.OS === 'ios' ? 25 : 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F2F3F2',
    position: 'absolute',
    bottom: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomIcon: { 
    width: 28,   
    height: 18,  
    resizeMode: 'contain',
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 5,
    color: '#181725',
  }
});