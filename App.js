import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';

import Resource from './modules/Resource.js';
import TerraformingPoints from './modules/TerraformingPoints';
import { mainStyles } from './style/styles.js';
import { getData, saveResource, loadValues } from './functions/Functions';

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
  const [TR, setTR] = useState(20);

  const valuesArray = [
    { name: 'Money', value: money, setter: setMoney },
    { name: 'MoneyProd', value: moneyProd, setter: setMoneyProd },
    { name: 'Steel', value: steel, setter: setSteel },
    { name: 'SteelProd', value: steelProd, setter: setSteelProd },
    { name: 'Titanium', value: titanium, setter: setTitanium },
    { name: 'TitaniumProd', value: titaniumProd, setter: setTitaniumProd },
    { name: 'Plant', value: plant, setter: setPlant },
    { name: 'PlantProd', value: plantProd, setPlantProd },
    { name: 'Energy', value: energy, setter: setEnergy },
    { name: 'EnergyProd', value: energyProd, setter: setEnergyProd },
    { name: 'Heat', value: heat, setter: setHeat },
    { name: 'HeatProd', value: heatProd, setter: setHeatProd },
    { name: 'TR', value: TR, setter: setTR },
  ];

  //get stored data on load
  useEffect(() => {
    loadValues(valuesArray);
    // (async () => {
    //   const moneyValue = await getData('Money');
    //   if (moneyValue) setMoney(Number(moneyValue));
    //   const moneyProd = await getData('MoneyProd');
    //   if (moneyProd) setMoneyProd(Number(moneyProd));
    //   const steelValue = await getData('Steel');
    //   if (steelValue) setSteel(Number(steelValue));
    //   const steelProd = await getData('SteelProd');
    //   if (steelProd) setSteelProd(Number(steelProd));
    //   const titaniumValue = await getData('Titanium');
    //   if (titaniumValue) setTitanium(Number(titaniumValue));
    //   const titaniumProd = await getData('TitaniumProd');
    //   if (titaniumProd) setTitaniumProd(Number(titaniumProd));
    //   const plantValue = await getData('Plant');
    //   if (plantValue) setPlant(Number(plantValue));
    //   const plantProd = await getData('PlantProd');
    //   if (plantProd) setPlantProd(Number(plantProd));
    //   const energyValue = await getData('Energy');
    //   if (energyValue) setEnergy(Number(energyValue));
    //   const energyProd = await getData('EnergyProd');
    //   if (energyProd) setEnergyProd(Number(energyProd));
    //   const heatValue = await getData('Heat');
    //   if (heatValue) setHeat(Number(heatValue));
    //   const heatProd = await getData('HeatProd');
    //   if (heatProd) setHeatProd(Number(heatProd));
    //   const TR = await getData('TR');
    //   if (TR) setTR(Number(TR));
    // })();
  }, []);

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
    if (name === 'TR') {
      saveResource(name, TR + val);
      setTR((prev) => prev + val);
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
    saveResource('TR', 20);
    setTR(20);
  };
  const handleAdvanceGeneration = () => {
    handleResourceChange('Money', moneyProd + TR);
    handleResourceChange('Steel', steelProd);
    handleResourceChange('Titanium', titaniumProd);
    handleResourceChange('Plant', plantProd);
    handleResourceChange('Heat', energy + heatProd);
    //edge case: energy on adv gen is always equal to energy production
    setEnergy(energyProd);
    saveResource('Energy', energyProd);
  };
  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.viewTop}>
        <Pressable style={mainStyles.resetBtn} onPress={() => handleReset()}>
          <Text style={mainStyles.resetBtnTxt}>Reset</Text>
        </Pressable>
        <TerraformingPoints
          name="TR"
          value={TR}
          setter={handleResourceChange}
        />
      </View>
      <View style={mainStyles.descriptiton}>
        <Text style={mainStyles.descriptitonTxt}>Quantity</Text>
        <Text style={mainStyles.descriptitonTxt}>Name</Text>
        <Text style={mainStyles.descriptitonTxt}>Production</Text>
      </View>
      <Resource
        name="Money"
        productionName="MoneyProd"
        value={money}
        production={moneyProd}
        setter={handleResourceChange}
      />
      <Resource
        name="Steel"
        productionName="SteelProd"
        value={steel}
        production={steelProd}
        setter={handleResourceChange}
      />
      <Resource
        name="Titanium"
        productionName="TitaniumProd"
        value={titanium}
        production={titaniumProd}
        setter={handleResourceChange}
      />
      <Resource
        name="Plant"
        productionName="PlantProd"
        value={plant}
        production={plantProd}
        setter={handleResourceChange}
      />
      <Resource
        name="Energy"
        productionName="EnergyProd"
        value={energy}
        production={energyProd}
        setter={handleResourceChange}
      />
      <Resource
        name="Heat"
        productionName="HeatProd"
        value={heat}
        production={heatProd}
        setter={handleResourceChange}
      />

      <Pressable
        style={mainStyles.advanceBtn}
        onPress={() => handleAdvanceGeneration()}
      >
        <Text style={mainStyles.advanceBtnTxt}>Advance Generation</Text>
      </Pressable>
    </View>
  );
}
