import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';

import Resource from './modules/Resource.js';
import ResourceList from './modules/ResourcesList';
import TerraformingPoints from './modules/TerraformingPoints';
import { mainStyles } from './style/styles.js';
import {
  getData,
  saveResource,
  loadValues,
  handleReset,
  handleResourceChange,
} from './functions/Functions';

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
    { name: 'Money', value: money, setter: (val) => setMoney(val) },
    { name: 'MoneyProd', value: moneyProd, setter: setMoneyProd },
    { name: 'Steel', value: steel, setter: setSteel },
    { name: 'SteelProd', value: steelProd, setter: setSteelProd },
    { name: 'Titanium', value: titanium, setter: setTitanium },
    { name: 'TitaniumProd', value: titaniumProd, setter: setTitaniumProd },
    { name: 'Plant', value: plant, setter: setPlant },
    { name: 'PlantProd', value: plantProd, setter: setPlantProd },
    { name: 'Energy', value: energy, setter: setEnergy },
    { name: 'EnergyProd', value: energyProd, setter: setEnergyProd },
    { name: 'Heat', value: heat, setter: setHeat },
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
    //edge case: energy on adv gen is always equal to energy production
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
      <View style={mainStyles.descriptiton}>
        <Text style={mainStyles.descriptitonTxt}>Quantity</Text>
        <Text style={mainStyles.descriptitonTxt}>Name</Text>
        <Text style={mainStyles.descriptitonTxt}>Production</Text>
      </View>
      <ResourceList
        valuesArray={valuesArray}
        handleResourceChange={handleResourceChange}
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

//old resources:

{
  /* <Resource
name="Money"
productionName="MoneyProd"
value={money}
production={moneyProd}
setter={handleResourceChange}
valuesArray={valuesArray}
/>
<Resource
name="Steel"
productionName="SteelProd"
value={steel}
production={steelProd}
setter={handleResourceChange}
valuesArray={valuesArray}
/>
<Resource
name="Titanium"
productionName="TitaniumProd"
value={titanium}
production={titaniumProd}
setter={handleResourceChange}
valuesArray={valuesArray}
/>
<Resource
name="Plant"
productionName="PlantProd"
value={plant}
production={plantProd}
setter={handleResourceChange}
valuesArray={valuesArray}
/>
<Resource
name="Energy"
productionName="EnergyProd"
value={energy}
production={energyProd}
setter={handleResourceChange}
valuesArray={valuesArray}
/>
<Resource
name="Heat"
productionName="HeatProd"
value={heat}
production={heatProd}
setter={handleResourceChange}
valuesArray={valuesArray}
/> */
}
