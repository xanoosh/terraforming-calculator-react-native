import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';

import TerraformingPoints from './modules/TerraformingPoints';
import ResourceList from './modules/ResourcesList';
import GenerationPanel from './modules/GenerationPanel';
import SettingsModal from './modules/SettingsModal';
import { mainStyles } from './style/styles.js';
import {
  handleResourceChange,
  handleReset,
  handleAdvanceGeneration,
  handleGoBack,
  handleAppMount,
} from './functions/HandlerFunctions';
import { addNewHistoryElement } from './functions/HistoryFunctions';

import mImg from './assets/rmoney.png';
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
  const [genNumber, setGenNumber] = useState(0);
  const [settingsModalOpened, setSettingsModalOpened] = useState(false);
  const [keepAwake, setKeepAwake] = useState(false);

  const valuesArray = [
    { name: 'Money', value: money, setter: setMoney, img: mImg },
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

  useEffect(() => {
    handleAppMount(valuesArray, setGenNumber);
  }, []);

  const handleAdvGeneration = (valuesArray, setGenNumber) => {
    handleResourceChange('Money', moneyProd + TR, valuesArray);
    handleResourceChange('Steel', steelProd, valuesArray);
    handleResourceChange('Titanium', titaniumProd, valuesArray);
    handleResourceChange('Plant', plantProd, valuesArray);
    handleResourceChange('Heat', energy + heatProd, valuesArray);
    handleResourceChange('Energy', energyProd, valuesArray, true);
    addNewHistoryElement(valuesArray, setGenNumber);
  };

  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.viewTop}>
        {/* <Pressable
          style={mainStyles.resetBtn}
          onPress={() => handleReset(valuesArray, setGenNumber)}
        >
          <Text style={mainStyles.resetBtnTxt}>Reset</Text>
        </Pressable> */}
        <SettingsModal
          opened={settingsModalOpened}
          setOpened={setSettingsModalOpened}
          keepAwake={keepAwake}
          setKeepAwake={setKeepAwake}
          resetHandler={() => handleReset(valuesArray, setGenNumber)}
        />
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

      <GenerationPanel
        handleAdvanceGeneration={handleAdvGeneration}
        handleGoBack={() => handleGoBack(valuesArray, setGenNumber)}
        genNumber={genNumber}
        valuesArray={valuesArray}
        setGenNumber={setGenNumber}
      />
    </View>
  );
}
