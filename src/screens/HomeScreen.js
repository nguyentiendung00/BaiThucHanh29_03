import React from 'react';
import { 
  View, 
  Text,
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  Image, 
  StatusBar, 
  Platform,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import CustomBottomBar from '../components/CustomBottomBar';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {

  const ProductCard = ({ image, name, weight, price, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.productImage} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productWeight}>{weight}</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.productPrice}>${price}</Text>
          <TouchableOpacity style={styles.plusButton}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const CategoryCard = ({ image, name, backgroundColor }) => (
    <TouchableOpacity style={[styles.categoryCard, { backgroundColor }]}>
      <Image source={image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{name}</Text>
    </TouchableOpacity>
  );

  const SectionHeader = ({ title }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.seeAllText}>See all</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/Group.png')} style={styles.carrotLogo} />
        </View>

        <View style={styles.locationContainer}>
          <Image source={require('../../assets/Group 6809.png')} style={styles.locationImg} />
        </View>

        <View style={styles.searchContainer}>
          <Image source={require('../../assets/Search.png')} style={styles.searchImg} />
        </View>

        <View style={styles.bannerContainer}>
          <Image source={require('../../assets/banner.png')} style={styles.bannerImg} />
        </View>

        <SectionHeader title="Exclusive Offer" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <ProductCard image={require('../../assets/chuoi.png')} name="Organic Bananas" weight="7pcs, Priceg" price="4.99" onPress={() => navigation.navigate('ProductDetail')} />
          <ProductCard image={require('../../assets/tao.png')} name="Red Apple" weight="1kg, Priceg" price="4.99" onPress={() => navigation.navigate('ProductDetail')} />
          <ProductCard image={require('../../assets/chuoi.png')} name="Organic Bananas" weight="7pcs, Priceg" price="4.99" />
          <ProductCard image={require('../../assets/tao.png')} name="Red Apple" weight="1kg, Priceg" price="4.99" />
        </ScrollView>

        <SectionHeader title="Best Selling" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <ProductCard image={require('../../assets/ot.png')} name="Bell Pepper Red" weight="1kg, Priceg" price="4.99" />
          <ProductCard image={require('../../assets/gung.png')} name="Ginger" weight="250g, Priceg" price="4.99" />
          <ProductCard image={require('../../assets/ot.png')} name="Bell Pepper Red" weight="1kg, Priceg" price="4.99" />
          <ProductCard image={require('../../assets/gung.png')} name="Ginger" weight="250g, Priceg" price="4.99" />
        </ScrollView>

        <SectionHeader title="Groceries" />
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
          <CategoryCard 
            image={require('../../assets/anhcom.png')} 
            name="Pulses" 
            backgroundColor="#FEF1E4" 
          />
          <CategoryCard 
            image={require('../../assets/anhrice.png')} 
            name="Rice" 
            backgroundColor="#E5F3EA" 
          />
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <ProductCard image={require('../../assets/thit.png')} name="Beef Bone" weight="1kg, Priceg" price="4.99" />
          <ProductCard image={require('../../assets/thitga.png')} name="Broiler Chicken" weight="1kg, Priceg" price="4.99" />
          <ProductCard image={require('../../assets/thit.png')} name="Beef Bone" weight="1kg, Priceg" price="4.99" />
          <ProductCard image={require('../../assets/thitga.png')} name="Broiler Chicken" weight="1kg, Priceg" price="4.99" />
        </ScrollView>

      </ScrollView>

      <CustomBottomBar navigation={navigation} activeTab="Shop" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { paddingTop: Platform.OS === 'android' ? 20 : 10, paddingBottom: 110 },
  logoContainer: { alignItems: 'center', marginTop: 20, marginBottom: 10 },
  carrotLogo: { width: 30, height: 35, resizeMode: 'contain' },
  locationContainer: { alignItems: 'center', marginBottom: 20 },
  locationImg: { width: 150, height: 25, resizeMode: 'contain' },
  searchContainer: { alignItems: 'center', marginBottom: 20, paddingHorizontal: 15 },
  searchImg: { width: width - 30, height: 55, resizeMode: 'contain' },
  bannerContainer: { marginHorizontal: 15, height: 115, borderRadius: 15, overflow: 'hidden', marginBottom: 20 },
  bannerImg: { width: '100%', height: '100%', resizeMode: 'cover' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 15 },
  sectionTitle: { fontSize: 24, fontWeight: 'bold', color: '#181725' },
  seeAllText: { fontSize: 16, color: '#53B175', fontWeight: '600' },
  horizontalScroll: { paddingLeft: 20, marginBottom: 25 },

  categoryScroll: { paddingLeft: 20, marginBottom: 15 },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    height: 105,
    borderRadius: 18,
    padding: 15,
    marginRight: 15,
  },
  categoryImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginRight: 15,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3E423F',
  },

  card: {
    width: 172,
    height: 248,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 18,
    padding: 15,
    marginRight: 15,
    backgroundColor: '#fff',
  },
  imageWrapper: { height: 100, width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  productImage: { width: '90%', height: '100%', resizeMode: 'contain' },
  cardContent: { flex: 1, justifyContent: 'space-between' },
  productName: { fontSize: 16, fontWeight: 'bold', color: '#181725' },
  productWeight: { fontSize: 14, color: '#7C7C7C', marginTop: 2 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  productPrice: { fontSize: 18, fontWeight: 'bold', color: '#181725' },
  plusButton: { width: 45, height: 45, backgroundColor: '#53B175', borderRadius: 17, justifyContent: 'center', alignItems: 'center' },
  plusText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
});