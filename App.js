import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

//style & components
// import styles from './styles.js';
import Resource from './Resource.js';

export default function App() {
  const [money, setMoney] = useState(0);
  const [steel, setSteel] = useState(0);
  const [titanium, setTitanium] = useState(0);
  return (
    <View style={styles.container}>
      <Resource name="Money" value={money} setValue={setMoney} />
      <Resource name="Steel" value={steel} setValue={setSteel} />
      <Resource name="Titanium" value={titanium} setValue={setTitanium} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    // backgroundColor: '#fff',
    marginTop: 20,
    padding: 10,
  },
});
