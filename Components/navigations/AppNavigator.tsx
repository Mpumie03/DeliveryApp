// components/navigation/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import FormScreen1 from '../screens/FormScreen1';
import FormScreen2 from '../screens/FormScreen2';
import FormScreen3 from '../screens/FormScreen3';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Form1" component={FormScreen1} />
        <Stack.Screen name="Form2" component={FormScreen2} />
        <Stack.Screen name="Form3" component={FormScreen3} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
