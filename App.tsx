import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Components/screens/login';
import MenuScreen from './Components/screens/MenuScreen';
import CartScreen from './Components/screens/CartScreen';
import FormScreen1 from './Components/screens/FormScreen1';
import FormScreen2 from './Components/screens/FormScreen2';
import FormScreen3 from './Components/screens/FormScreen3';
import ProfileScreen from './Components/screens/ProfileScreen';
import { FormProvider } from './Components/context/FormContext';
import { CartProvider } from './Components/context/CartContext';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <FormProvider>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Menu">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Form1" component={FormScreen1} />
            <Stack.Screen name="Form2" component={FormScreen2} />
            <Stack.Screen name="Form3" component={FormScreen3} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </FormProvider>
  );
};

export default App;
