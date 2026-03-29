import React from 'react';
import { 
  View, Text, StyleSheet, SafeAreaView, ScrollView, 
  Image, TouchableOpacity, Dimensions, StatusBar, Platform 
} from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 50) / 2;

export default function BeveragesScreen({ navigation }) {
  
  const ProductCard = ({ khung, anhChinh, name, info, price }) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={khung} style={styles.frameImg} />
        <Image source={anhChinh} style={styles.productImg} />
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.productName} numberOfLines={1}>{name}</Text>
        <Text style={styles.productInfo}>{info}</Text>
        
        <View style={styles.priceRow}>
          <Text style={styles.price}>${price}</Text>
          <TouchableOpacity style={styles.plusBtn}>
             <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
           <Image source={require('../../assets/back arrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beverages</Text>
        <TouchableOpacity>
           <Image source={require('../../assets/Group 6839.png')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.row}>
          <ProductCard 
            khung={require('../../assets/khungdiet.png')} 
            anhChinh={require('../../assets/chaidiet.png')}
            name="Diet Coke" info="355ml, Price" price="1.99"
          />
          <ProductCard 
            khung={require('../../assets/KhungSprite.png')} 
            anhChinh={require('../../assets/Sprite.png')}
            name="Sprite Can" info="325ml, Price" price="1.50"
          />
        </View>

        <View style={styles.row}>
          <ProductCard 
            khung={require('../../assets/KhungJuice.png')} 
            anhChinh={require('../../assets/Juice.png')}
            name="Apple & Grape Juice" info="2L, Price" price="15.99"
          />
          <ProductCard 
            khung={require('../../assets/Khung Orenge.png')} 
            anhChinh={require('../../assets/Orenge.png')}
            name="Orenge Juice" info="2L, Price" price="15.99"
          />
        </View>

        <View style={styles.row}>
          <ProductCard 
            khung={require('../../assets/KhungCoca.png')} 
            anhChinh={require('../../assets/Coca.png')}
            name="Coca Cola Can" info="325ml, Price" price="4.99"
          />
          <ProductCard 
            khung={require('../../assets/KhungPepsi.png')} 
            anhChinh={require('../../assets/Pepsi.png')}
            name="Pepsi Can" info="330ml, Price" price="4.99"
          />
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20,
    marginTop: Platform.OS === 'android' ? 40 : 10,
    marginBottom: 20
  },
  backIcon: { width: 10, height: 18, resizeMode: 'contain' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  filterIcon: { width: 18, height: 18, resizeMode: 'contain' },

  scrollContent: { paddingHorizontal: 20, paddingBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  
  card: { 
    width: cardWidth, 
    borderRadius: 18, 
    borderWidth: 1, 
    borderColor: '#E2E2E2', 
    padding: 15,
    backgroundColor: '#fff'
  },
  imageContainer: { 
    height: 100, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 15
  },
  frameImg: { position: 'absolute', width: '90%', height: '90%', resizeMode: 'contain' },
  productImg: { width: '80%', height: '100%', resizeMode: 'contain' },

  infoContainer: { marginTop: 10 },
  productName: { fontSize: 16, fontWeight: 'bold', color: '#181725' },
  productInfo: { fontSize: 13, color: '#7C7C7C', marginVertical: 4 },
  
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  price: { fontSize: 18, fontWeight: 'bold', color: '#181725' },
  plusBtn: { 
    width: 45, height: 45, 
    backgroundColor: '#53B175', 
    borderRadius: 17, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  plusText: { color: '#fff', fontSize: 24, fontWeight: '600' }
});