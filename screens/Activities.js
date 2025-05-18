import React from 'react';
import { View, TextInput, Text, Button, Alert, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

function Activites() {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Activites</Text>
      <Text style={styles.header}>Weather Insight</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default Activites;

