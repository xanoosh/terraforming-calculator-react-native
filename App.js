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
  const [plant, setPlant] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [heat, setHeat] = useState(0);
  // const [message, setMessage] = useState('');

  const getData = async (name) => {
    try {
      const value = await AsyncStorage.getItem(name);
      if (value !== null) return value;
      else return false;
    } catch (e) {
      return false;
    }
  };

  //get stored data on app load
  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem('Titanium', 1 + '');
      const moneyValue = await getData('Money');
      if (moneyValue) setMoney(Number(moneyValue));
      const steelValue = await getData('Steel');
      if (steelValue) setSteel(Number(steelValue));
      const titaniumValue = await getData('Titanium');
      if (titaniumValue) setTitanium(Number(titaniumValue));
      const plantValue = await getData('Plant');
      if (plantValue) setPlant(Number(plantValue));
      const energyValue = await getData('Energy');
      if (energyValue) setEnergy(Number(energyValue));
      const heatValue = await getData('Heat');
      if (heatValue) setHeat(Number(heatValue));

      setTitanium(1);
    })();
  }, []);

  const handleResourceChange = (name, val) => {
    if (name === 'Money') setMoney((prev) => prev + val);
    if (name === 'Steel') setSteel((prev) => prev + val);
    if (name === 'Titanium') setTitanium((prev) => prev + val);
    if (name === 'Plant') setPlant((prev) => prev + val);
    if (name === 'Energy') setEnergy((prev) => prev + val);
    if (name === 'Heat') setHeat((prev) => prev + val);
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
      <Resource name="Plant" value={plant} setValue={handleResourceChange} />
      <Resource name="Energy" value={energy} setValue={handleResourceChange} />
      <Resource name="Heat" value={heat} setValue={handleResourceChange} />
      {/* <Text style={{ fontSize: 21 }}>{message}</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333533',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
  },
});
