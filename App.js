import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';

import ResourceList from './modules/ResourcesList';
import TerraformingPoints from './modules/TerraformingPoints';
import { mainStyles } from './style/styles.js';
import {
  // getData,
  saveResource,
  loadValues,
  handleReset,
  handleResourceChange,
} from './functions/Functions';

import hImg from './assets/rheat.png';
import eImg from './assets/renergy.png';
import sImg from './assets/rsteel.png';
import tImg from './assets/rtitanium.png';
import pImg from './assets/rplant.png';

export default function App() {
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
    { name: 'Steel', value: steel, setter: setSteel, img: sImg },
    { name: 'SteelProd', value: steelProd, setter: setSteelProd },
    { name: 'Titanium', value: titanium, setter: setTitanium, img: tImg },
    { name: 'TitaniumProd', value: titaniumProd, setter: setTitaniumProd },
    { name: 'Plant', value: plant, setter: setPlant, img: pImg },
    { name: 'PlantProd', value: plantProd, setter: setPlantProd },
    { name: 'Energy', value: energy, setter: setEnergy, img: eImg },
    { name: 'EnergyProd', value: energyProd, setter: setEnergyProd },
    { name: 'Heat', value: heat, setter: setHeat, img: hImg },
    { name: 'HeatProd', value: heatProd, setter: setHeatProd },
    { name: 'TR', value: TR, setter: setTR },
  ];

  //get stored data on load
  useEffect(() => {
    loadValues(valuesArray);
  }, []);

  const handleAdvanceGeneration = () => {
    handleResourceChange('Money', moneyProd + TR, valuesArray);
    handleResourceChange('Steel', steelProd, valuesArray);
    handleResourceChange('Titanium', titaniumProd, valuesArray);
    handleResourceChange('Plant', plantProd, valuesArray);
    handleResourceChange('Heat', energy + heatProd, valuesArray);
    //energy on adv gen is always equal to energy production
    setEnergy(energyProd);
    saveResource('Energy', energyProd);
  };
  const handleGoBack = () => {
    handleResourceChange('Money', (moneyProd + TR) * -1, valuesArray);
    handleResourceChange('Steel', steelProd * -1, valuesArray);
    handleResourceChange('Titanium', titaniumProd * -1, valuesArray);
    handleResourceChange('Plant', plantProd * -1, valuesArray);
    handleResourceChange('Heat', (energy + heatProd) * -1, valuesArray);
    setEnergy(energyProd);
    saveResource('Energy', energyProd);
  };
  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.viewTop}>
        <Pressable
          style={mainStyles.resetBtn}
          onPress={() => handleReset(valuesArray)}
        >
          <Text style={mainStyles.resetBtnTxt}>Reset</Text>
        </Pressable>
        <TerraformingPoints
          name="TR"
          value={TR}
          setter={handleResourceChange}
          valuesArray={valuesArray}
        />
      </View>
      <ResourceList
        valuesArray={valuesArray}
        handleResourceChange={handleResourceChange}
      />
      <Pressable style={mainStyles.backBtn} onPress={() => handleGoBack()}>
        <Text style={mainStyles.backBtnTxt}>Back</Text>
      </Pressable>
      <Pressable
        style={mainStyles.advanceBtn}
        onPress={() => handleAdvanceGeneration()}
      >
        <Text style={mainStyles.advanceBtnTxt}>Advance Generation</Text>
      </Pressable>
    </View>
  );
}
