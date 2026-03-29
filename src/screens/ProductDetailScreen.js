import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, Image, 
  TouchableOpacity, ScrollView, StatusBar, Platform, Dimensions 
} from 'react-native';

const { width } = Dimensions.get('window');

export default function ProductDetailScreen({ navigation }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === 'minus' && quantity > 1) setQuantity(quantity - 1);
    else if (type === 'plus') setQuantity(quantity + 1);
  };

  return (
    <View style={styles.container}>
      <StatusBar 
        translucent 
        backgroundColor="transparent" 
        barStyle="dark-content" 
      />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.imageSection}>
          <Image source={require('../../assets/Rectangle 69.png')} style={styles.bgShapeImg} />

          <TouchableOpacity 
            style={styles.absBackBtn} 
            onPress={() => navigation.goBack()}
          >
            <Image source={require('../../assets/back arrow.png')} style={styles.iconImg} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.absRightBtn}>
            <Image source={require('../../assets/Vector4.png')} style={styles.iconImg1} />
          </TouchableOpacity>

          {/* Ảnh quả táo */}
          <Image source={require('../../assets/Vector.png')} style={styles.appleImg} />
          
          <View style={styles.pagination}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* 4. Thông tin sản phẩm */}
        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>Naturel Red Apple</Text>
            <TouchableOpacity>
               <Image source={require('../../assets/bookmark 1.png')} style={styles.bookmarkIconImg} />
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>1kg, Price</Text>

          {/* 5. Chọn số lượng và Giá */}
          <View style={styles.priceRow}>
            <View style={styles.counter}>
              <TouchableOpacity onPress={() => handleQuantity('minus')} style={styles.counterBtn}>
                <Text style={[styles.counterText, { color: '#B3B3B3' }]}>—</Text>
              </TouchableOpacity>
              <View style={styles.quantityBox}>
                <Text style={styles.quantityText}>{quantity}</Text>
              </View>
              <TouchableOpacity onPress={() => handleQuantity('plus')} style={styles.counterBtn}>
                <Text style={[styles.counterText, { color: '#53B175' }]}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>$4.99</Text>
          </View>

          <View style={styles.divider} />
          
          <TouchableOpacity style={styles.accordionHeader}>
            <Text style={styles.accordionTitle}>Product Detail</Text>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271210.png' }} style={styles.chevron} />
          </TouchableOpacity>
          <Text style={styles.detailText}>
            Apples Are Nutritious. Apples May Be Good For Weight Loss. 
            Apples May Be Good For Your Heart.
          </Text>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.accordionHeader}>
            <Text style={styles.accordionTitle}>Nutritions</Text>
            <View style={styles.tagContainer}>
              <View style={styles.nutritionTag}>
                <Text style={styles.tagText}>100gr</Text>
              </View>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }} style={styles.chevron} />
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.accordionHeader}>
            <Text style={styles.accordionTitle}>Review</Text>
            <View style={styles.tagContainer}>
              <Image source={require('../../assets/Group 6834.png')} style={styles.starsImg} />
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }} style={styles.chevron} />
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add To Basket</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { paddingBottom: 40 },
  
  imageSection: { 
    height: 400,
    width: width, 
    position: 'relative', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 0, 
  },
  bgShapeImg: { 
    position: 'absolute', 
    width: '100%', 
    height: '100%', 
    resizeMode: 'stretch',
    borderBottomLeftRadius: 25, 
    borderBottomRightRadius: 25
  },

  absBackBtn: { 
    position: 'absolute', 
    top: Platform.OS === 'ios' ? 50 : 45, 
    left: 20, 
    zIndex: 10 
  },
  absRightBtn: { 
    position: 'absolute', 
    top: Platform.OS === 'ios' ? 50 : 45, 
    right: 20, 
    zIndex: 10 
  },
  
  iconImg: { width: 10, height: 18, resizeMode: 'contain' },
  iconImg1: { width: 18.46, height: 18.46, resizeMode: 'contain' },

  appleImg: { 
    width: width - 60, 
    height: 220, 
    resizeMode: 'contain', 
    marginTop: 40 
  },
  pagination: { flexDirection: 'row', position: 'absolute', bottom: 30 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#B3B3B3', marginHorizontal: 4 },
  activeDot: { width: 14, backgroundColor: '#53B175' },

  content: { paddingHorizontal: 25, marginTop: 25 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#181725' },
  subtitle: { fontSize: 16, color: '#7C7C7C', marginTop: 5 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  bookmarkIconImg: { width: 22, height: 22, resizeMode: 'contain' },

  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 25 },
  counter: { flexDirection: 'row', alignItems: 'center' },
  counterBtn: { padding: 10 },
  counterText: { fontSize: 22, fontWeight: '600' },
  quantityBox: { borderWidth: 1, borderColor: '#E2E2E2', borderRadius: 15, width: 45, height: 45, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 },
  quantityText: { fontSize: 18, fontWeight: 'bold' },
  price: { fontSize: 24, fontWeight: 'bold' },

  divider: { height: 1, backgroundColor: '#E2E2E2', marginVertical: 15 },
  accordionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  accordionTitle: { fontSize: 16, fontWeight: '600' },
  chevron: { width: 12, height: 12, resizeMode: 'contain' },
  detailText: { fontSize: 13, color: '#7C7C7C', marginTop: 10, lineHeight: 18 },
  
  tagContainer: { flexDirection: 'row', alignItems: 'center' },
  nutritionTag: { backgroundColor: '#EBEBEB', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 5, marginRight: 10 },
  tagText: { fontSize: 12, color: '#7C7C7C', fontWeight: '500' },
  
  starsImg: { width: 80, height: 16, resizeMode: 'contain', marginRight: 10 },
  addButton: { backgroundColor: '#53B175', margin: 25, height: 65, borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginBottom: 40 },
  addButtonText: { color: '#fff', fontSize: 18, fontWeight: '600' }
});