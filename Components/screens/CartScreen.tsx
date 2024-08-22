// components/screens/CartScreen.tsx
import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import CartContext from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';

// Define the shape of cart items
interface FoodItem {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  quantity: number;
}

const CartScreen: React.FC = () => {
  const { cart, removeItemFromCart, updateItemQuantity, clearCart } = useContext(CartContext);
  const navigation = useNavigation<any>();

  // State to hold the total cost
  const [totalCost, setTotalCost] = useState<number>(0);

  // Recalculate the total cost whenever the cart changes
  useEffect(() => {
    const newTotal = cart.reduce((total, item) => total + (parseFloat(item.price.replace('R', '')) * item.quantity), 0);
    setTotalCost(newTotal);
  }, [cart]);

  const handleCheckout = () => {
    clearCart(); // Clear the cart on checkout
    navigation.navigate('Form2'); // Navigate to Form2 after checkout
  };

  const renderItem = ({ item }: { item: FoodItem }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateItemQuantity(item.id, Math.max(1, item.quantity - 1))}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateItemQuantity(item.id, item.quantity + 1)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Remove"
          onPress={() => removeItemFromCart(item.id)}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.total}>Total: R{totalCost.toFixed(2)}</Text>
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
  },
  price: {
    color: 'green',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default CartScreen;
