import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, SafeAreaView, ScrollView, 
  Image, TouchableOpacity, Dimensions, StatusBar, Platform, TextInput 
} from 'react-native';
import CustomBottomBar from '../components/CustomBottomBar';

const { width } = Dimensions.get('window');
const cardWidth = (width - 50) / 2;

export default function ExploreScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find Products</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <Image 
            source={require('../../assets/nup.png')} 
            style={styles.searchIcon} 
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Store"
            placeholderTextColor="#7C7C7C"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.row}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Beverages')}>
            <Image source={require('../../assets/beef bone.png')} style={styles.fullCardImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Beverages')}>
            <Image source={require('../../assets/beef bone (1).png')} style={styles.fullCardImg} />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Beverages')}>
            <Image source={require('../../assets/beef bone (2).png')} style={styles.fullCardImg} />
            <Image source={require('../../assets/pngfuel 9.png')} style={styles.overlayImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Beverages')}>
            <Image source={require('../../assets/beef bone (3).png')} style={styles.fullCardImg} />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Beverages')}>
            <Image source={require('../../assets/beef bone (5).png')} style={styles.fullCardImg} />
            <Image source={require('../../assets/Group 68377.png')} style={styles.overlayImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Beverages')}>
            <Image source={require('../../assets/beef bone (6).png')} style={styles.fullCardImg} />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Beverages')}>
            <Image source={require('../../assets/beef bone (7).png')} style={styles.fullCardImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Beverages')}>
            <Image source={require('../../assets/beef bone (8).png')} style={styles.fullCardImg} />
          </TouchableOpacity>
        </View>

      </ScrollView>

      <CustomBottomBar navigation={navigation} activeTab="Explore" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { 
    alignItems: 'center', 
    marginTop: Platform.OS === 'android' ? 40 : 10, 
    marginBottom: 20 
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  
  searchContainer: { 
    paddingHorizontal: 20,
    marginBottom: 20, 
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 50,
  },
  searchIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#181725',
    fontWeight: '600',
  },

  scrollContent: { 
    paddingHorizontal: 20, 
    paddingBottom: 90 
  },
  
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 20 
  },
  
  card: { 
    width: cardWidth, 
    height: 210, 
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fullCardImg: { 
    width: '100%', 
    height: '100%', 
    resizeMode: 'contain' 
  },
  
  overlayImg: {
    position: 'absolute',
    width: '75%',
    height: '55%',
    top: '15%',
    resizeMode: 'contain'
  }
});