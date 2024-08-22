// components/screens/MenuScreen.tsx
import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import CartContext from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';

// Define the shape of our food items
interface FoodItem {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
}

// Sample food items
const foodItems: FoodItem[] = [
  { id: '1', name: 'Pizza', image: 'https://th.bing.com/th/id/OIP.0WXW7Vd_H75ZhfivxugavwAAAA?rs=1&pid=ImgDetMain', description: 'Delicious cheese pizza', price: 'R100.00' },
  { id: '2', name: 'Burger', image: 'https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490', description: 'Juicy beef burger', price: 'R90.99' },
  { id: '3', name: 'Pasta', image: 'https://www.aspicyperspective.com/wp-content/uploads/2014/12/Fettuccine-Alfredo-Recipe-16.jpg', description: 'Creamy Alfredo pasta', price: 'R350.89' },
  { id: '4', name: 'Sushi', image: 'https://th.bing.com/th/id/OIP.UdrvVsY_bSIBmD07UAsTngHaE6?rs=1&pid=ImgDetMain', description: 'Fresh sushi rolls', price: 'R300.88' },
  { id: '5', name: 'Salad', image: 'https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-008.jpg', description: 'Healthy green salad', price: 'R110.00' },
  { id: '6', name: 'Tacos', image: 'https://kalynskitchen.com/wp-content/uploads/2020/03/1-650-ground-beef-tacos-600x900.jpg', description: 'Spicy beef tacos', price: 'R95.90' },
  { id: '7', name: 'Kota', image: 'https://www.kaya959.co.za/wp-content/uploads/2021/05/D-KpquiXUAAIsRw.jpg', description: 'Saucy Kasi Kota', price: 'R60.90' },
];

const MenuScreen: React.FC = () => {
  const { addItemToCart } = useContext(CartContext);
  const navigation = useNavigation<any>();

  // Function to render each food item
  const renderItem = ({ item }: { item: FoodItem }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => addItemToCart({ ...item, quantity: 1 })}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={foodItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Form1')}>
          <Text style={styles.footerButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.footerButtonText}>Go to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.footerButtonText}>Profile</Text>
        </TouchableOpacity>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    color: '#666',
    marginBottom: 5,
  },
  price: {
    color: 'green',
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
  },
  footerButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MenuScreen;
