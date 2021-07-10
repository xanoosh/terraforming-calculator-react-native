import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { MMKV } from 'react-native-mmkv';
//style & components
// import styles from './styles.js';
import Resource from './Resource.js';

export default function App() {
  const [money, setMoney] = useState(0);
  const [steel, setSteel] = useState(0);
  const [titanium, setTitanium] = useState(0);
  useEffect(() => {
    //get stored data on app load
    if (MMKV.getNumber('money')) setMoney(MMKV.getNumber('money'));
    if (MMKV.getNumber('steel')) setSteel(MMKV.getNumber('steel'));
    if (MMKV.getNumber('titanium')) setSteel(MMKV.getNumber('titanium'));
  }, []);
  useEffect(() => {
    //get stored data on app load
    if (MMKV.getNumber('money')) setMoney(MMKV.getNumber('money'));
    if (MMKV.getNumber('steel')) setSteel(MMKV.getNumber('steel'));
    if (MMKV.getNumber('titanium')) setSteel(MMKV.getNumber('titanium'));
  }, []);

  const handleResourceChange = (name, val) => {
    switch (name) {
      case 'money':
        MMKV.set('money', val);
      case 'steel':
        MMKV.set('steel', val);
      case 'titanium':
        MMKV.set('titanium', val);
    }
  };

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
