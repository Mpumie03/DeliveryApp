import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import FormContext from '../context/FormContext';

const ProfileScreen: React.FC = () => {
  const { formData } = useContext(FormContext);

  // Local state for customization options
  const [textColor, setTextColor] = useState<string>('#000000'); // Default text color
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff'); // Default background color

  // Handler to apply theme changes
  const applyTheme = () => {
    // Assuming you might have some global state or storage to save these settings
    // Here we'll just update the local state for simplicity
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { backgroundColor }]}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.profileCard}>
        <Text style={[styles.header, { color: textColor }]}>Personal Information</Text>
        <Text style={[styles.info, { color: textColor }]}>Name: {formData.name}</Text>
        <Text style={[styles.info, { color: textColor }]}>Email: {formData.email}</Text>
        <Text style={[styles.info, { color: textColor }]}>Phone: {formData.phone}</Text>
      </View>

      <View style={styles.profileCard}>
        <Text style={[styles.header, { color: textColor }]}>Address</Text>
        <Text style={[styles.info, { color: textColor }]}>Address: {formData.address}</Text>
        <Text style={[styles.info, { color: textColor }]}>City: {formData.city}</Text>
        <Text style={[styles.info, { color: textColor }]}>State: {formData.state}</Text>
        <Text style={[styles.info, { color: textColor }]}>ZIP: {formData.zip}</Text>
      </View>

      <View style={styles.profileCard}>
        <Text style={[styles.header, { color: textColor }]}>Payment Details</Text>
        <Text style={[styles.info, { color: textColor }]}>Card Number: {formData.cardNumber}</Text>
        <Text style={[styles.info, { color: textColor }]}>Expiry Date: {formData.expirationDate}</Text>
        <Text style={[styles.info, { color: textColor }]}>CVV: {formData.cvv}</Text>
      </View>

      <View style={styles.customizationContainer}>
        <Text style={[styles.customizationLabel, { color: textColor }]}>Customize App Theme:</Text>
        
        <Text style={[styles.customizationLabel, { color: textColor }]}>Text Color</Text>
        <TextInput
          style={styles.input}
          placeholder="#000000"
          value={textColor}
          onChangeText={setTextColor}
        />
        
        <Text style={[styles.customizationLabel, { color: textColor }]}>Background Color</Text>
        <TextInput
          style={styles.input}
          placeholder="#ffffff"
          value={backgroundColor}
          onChangeText={setBackgroundColor}
        />
        
        <Button
          title="Apply Theme"
          onPress={applyTheme}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  profileCard: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  customizationContainer: {
    marginTop: 20,
  },
  customizationLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default ProfileScreen;
