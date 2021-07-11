import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, View, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//style & components
// import styles from './styles.js';
import Resource from './Resource.js';

export default function App() {
  //hooks with resource values and production level
  const [money, setMoney] = useState(0);
  const [moneyProd, setMoneyProd] = useState(0);
  const [steel, setSteel] = useState(0);
  const [steelProd, setSteelProd] = useState(0);
  const [titanium, setTitanium] = useState(0);
  const [titaniumProd, setTitaniumProd] = useState(0);
  const [plant, setPlant] = useState(0);
  const [plantProd, setPlantProd] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [energyProd, setEnergyProd] = useState(0);
  const [heat, setHeat] = useState(0);
  const [heatProd, setHeatProd] = useState(0);

  //get AsyncStorage data or return false
  const getData = async (name) => {
    try {
      const value = await AsyncStorage.getItem(name);
      if (value !== null) return value;
      else return false;
    } catch (e) {
      return false;
    }
  };

  //get stored data on load
  useEffect(() => {
    (async () => {
      const moneyValue = await getData('Money');
      if (moneyValue) setMoney(Number(moneyValue));
      const moneyProd = await getData('MoneyProd');
      if (moneyProd) setMoneyProd(Number(moneyProd));
      const steelValue = await getData('Steel');
      if (steelValue) setSteel(Number(steelValue));
      const steelProd = await getData('SteelProd');
      if (steelProd) setSteelProd(Number(steelProd));
      const titaniumValue = await getData('Titanium');
      if (titaniumValue) setTitanium(Number(titaniumValue));
      const titaniumProd = await getData('TitaniumProd');
      if (titaniumProd) setTitaniumProd(Number(titaniumProd));
      const plantValue = await getData('Plant');
      if (plantValue) setPlant(Number(plantValue));
      const plantProd = await getData('PlantProd');
      if (plantProd) setPlantProd(Number(plantProd));
      const energyValue = await getData('Energy');
      if (energyValue) setEnergy(Number(energyValue));
      const energyProd = await getData('EnergyProd');
      if (energyProd) setEnergyProd(Number(energyProd));
      const heatValue = await getData('Heat');
      if (heatValue) setHeat(Number(heatValue));
      const heatProd = await getData('HeatProd');
      if (heatProd) setHeatProd(Number(heatProd));
    })();
  }, []);

  //save resource changes in asyncstorage
  const saveResource = (name, val) => {
    (async () => {
      await AsyncStorage.setItem(name, val + '');
    })();
  };

  const handleResourceChange = (name, val) => {
    if (name === 'Money') {
      saveResource(name, money + val);
      setMoney((prev) => prev + val);
    }
    if (name === 'MoneyProd') {
      saveResource(name, moneyProd + val);
      setMoneyProd((prev) => prev + val);
    }
    if (name === 'Steel') {
      saveResource(name, steel + val);
      setSteel((prev) => prev + val);
    }
    if (name === 'SteelProd') {
      saveResource(name, steelProd + val);
      setSteelProd((prev) => prev + val);
    }
    if (name === 'Titanium') {
      saveResource(name, titanium + val);
      setTitanium((prev) => prev + val);
    }
    if (name === 'TitaniumProd') {
      saveResource(name, titaniumProd + val);
      setTitaniumProd((prev) => prev + val);
    }
    if (name === 'Plant') {
      saveResource(name, plant + val);
      setPlant((prev) => prev + val);
    }
    if (name === 'PlantProd') {
      saveResource(name, plantProd + val);
      setPlantProd((prev) => prev + val);
    }
    if (name === 'Energy') {
      saveResource(name, energy + val);
      setEnergy((prev) => prev + val);
    }
    if (name === 'EnergyProd') {
      saveResource(name, energyProd + val);
      setEnergyProd((prev) => prev + val);
    }
    if (name === 'Heat') {
      saveResource(name, heat + val);
      setHeat((prev) => prev + val);
    }
    if (name === 'HeatProd') {
      saveResource(name, heatProd + val);
      setHeatProd((prev) => prev + val);
    }
  };

  const handleReset = () => {
    const resourcesArray = [
      'Money',
      'MoneyProd',
      'Steel',
      'SteelProd',
      'Titanium',
      'TitaniumProd',
      'Plant',
      'PlantProd',
      'Energy',
      'EnergyProd',
      'Heat',
      'HeatProd',
    ];
    resourcesArray.forEach((resource) => {
      saveResource(resource, 0);
    });
    setMoney(0);
    setMoneyProd(0);
    setSteel(0);
    setSteelProd(0);
    setTitanium(0);
    setTitaniumProd(0);
    setPlant(0);
    setPlantProd(0);
    setEnergy(0);
    setEnergyProd(0);
    setHeat(0);
    setHeatProd(0);
  };

  return (
    <View style={styles.container}>
      <Resource
        name="Money"
        value={money}
        production={moneyProd}
        setter={handleResourceChange}
      />
      <Resource
        name="Steel"
        value={steel}
        production={steelProd}
        setter={handleResourceChange}
      />
      <Resource
        name="Titanium"
        value={titanium}
        production={titaniumProd}
        setter={handleResourceChange}
      />
      <Resource
        name="Plant"
        value={plant}
        production={plantProd}
        setter={handleResourceChange}
      />
      <Resource
        name="Energy"
        value={energy}
        production={energyProd}
        setter={handleResourceChange}
      />
      <Resource
        name="Heat"
        value={heat}
        production={heatProd}
        setter={handleResourceChange}
      />

      <Pressable style={styles.resetBtn} onPress={() => handleReset()}>
        <Text style={styles.resetBtnTxt}>Reset</Text>
      </Pressable>

      {/* <Text style={{ fontSize: 21, color: '#fff' }}>{message}</Text> */}
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
  resetBtn: {
    width: '100%',
    position: 'absolute',
    top: '10%',
  },
  resetBtnTxt: {
    width: '100%',
    color: '#fff',
    textAlign: 'center',
  },
});
