// components/screens/FormScreen3.tsx
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import FormContext from '../context/FormContext';
import { useNavigation } from '@react-navigation/native';

const FormScreen3: React.FC = () => {
  const { formData, setFormData } = useContext(FormContext);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');

  const navigation = useNavigation<any>();

  const validateInputs = () => {
    const cardNumberPattern = /^[0-9]{16}$/;
    const cvvPattern = /^[0-9]{3}$/;
    const monthPattern = /^(0[1-9]|1[0-2])$/;
    const yearPattern = /^[0-9]{4}$/;

    if (!cardNumberPattern.test(cardNumber)) {
      Alert.alert('Invalid Card Number', 'Card number must be 16 digits.');
      return false;
    }
    if (!monthPattern.test(expiryMonth) || !yearPattern.test(expiryYear)) {
      Alert.alert('Invalid Expiry Date', 'Expiry month should be MM and year should be YYYY.');
      return false;
    }
    if (!cvvPattern.test(cvv)) {
      Alert.alert('Invalid CVV', 'CVV must be 3 digits.');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      // Update form data with payment details
      setFormData(prevData => ({
        ...prevData,
        cardNumber,
        expirationDate: `${expiryMonth}/${expiryYear}`,
        cvv,
      }));
      
      // Optionally, show a success message and navigate
      Alert.alert('Success', 'Payment details submitted successfully.', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Menu'), // Navigate back to Menu screen
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Credit Card Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="1234 5678 9012 3456"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
        maxLength={19} // Format with spaces (e.g., 1234 5678 9012 3456)
      />
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text>Expiry Month:</Text>
          <TextInput
            style={styles.input}
            placeholder="MM"
            value={expiryMonth}
            onChangeText={setExpiryMonth}
            keyboardType="numeric"
            maxLength={2}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Expiry Year:</Text>
          <TextInput
            style={styles.input}
            placeholder="YYYY"
            value={expiryYear}
            onChangeText={setExpiryYear}
            keyboardType="numeric"
            maxLength={4}
          />
        </View>
      </View>
      <Text>CVV:</Text>
      <TextInput
        style={styles.input}
        placeholder="123"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
        maxLength={3}
      />
      <Button title="Submit Payment" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default FormScreen3;
