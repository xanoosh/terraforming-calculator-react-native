import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//style & components
// import styles from './styles.js';
import Resource from './Resource.js';

export default function App() {
  const [money, setMoney] = useState(0);
  const [steel, setSteel] = useState(0);
  const [titanium, setTitanium] = useState(0);

  const getData = async (name) => {
    try {
      const value = await AsyncStorage.getItem(name);
      if (value !== null) return value;
      else return undefined;
    } catch (e) {
      return undefined;
    }
  };

  //get stored data on app load
  useEffect(() => {
    (async () => {
      const moneyValue = await getData('money');
      if (moneyValue) setMoney(Number(moneyValue));
      const steelValue = await getData('steel');
      if (steelValue) setSteel(Number(steelValue));
      const titaniumValue = await getData('titanium');
      if (titaniumValue) setTitanium(Number(titaniumValue));
    })();
  }, []);

  const handleResourceChange = (name, val) => {
    if (name === 'Money') setMoney((prev) => prev + val);
    if (name === 'Steel') setSteel((prev) => prev + val);
    if (name === 'Titanium') setTitanium((prev) => prev + val);
    //save resource changes in asyncstorage
    (async () => {
      await AsyncStorage.setItem(name, val + '');
    })();
  };

  return (
    <View style={styles.container}>
      <Resource name="Money" value={money} setValue={handleResourceChange} />
      <Resource name="Steel" value={steel} setValue={handleResourceChange} />
      <Resource
        name="Titanium"
        value={titanium}
        setValue={handleResourceChange}
      />
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
