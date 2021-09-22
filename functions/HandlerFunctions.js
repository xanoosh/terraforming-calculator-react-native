import {
  updateResourceHistory,
  createNewHistoryElement,
  mutateLastHistoryElement,
} from './BaseFunctions.js';
import {
  loadValuesFromHistoryArray,
  addNewHistoryElement,
  removeLastHistoryElement,
} from './HistoryFunctions.js';

//component mount handler (first app load) based on loadValuesFromHistoryArray function
const handleAppMount = (valuesArray, setGeneration) => {
  loadValuesFromHistoryArray(valuesArray, setGeneration);
};
//set base resource, TR points and generation count and reset history array
const handleReset = async (valuesArray, setGeneration) => {
  for (let i = 0; i < valuesArray.length; i++) {
    if (valuesArray[i].name === 'TR') {
      valuesArray[i].setter(20);
      valuesArray[i].value = 20;
    } else {
      valuesArray[i].setter(0);
      valuesArray[i].value = 0;
    }
  }
  const firstElement = createNewHistoryElement(valuesArray);
  updateResourceHistory([firstElement]);
  setGeneration([firstElement].length);
};
// change resource values in current state and reset last history element with these values
const handleResourceChange = (name, val, valuesArray, edgeCase = false) => {
  for (let i = 0; i < valuesArray.length; i++) {
    if (valuesArray[i].name === name) {
      if (edgeCase) {
        valuesArray[i].setter(val);
        valuesArray[i].value = val;
      }
      if (!edgeCase) {
        valuesArray[i].setter((prev) => prev + val);
        valuesArray[i].value += val;
      }
    }
  }
  mutateLastHistoryElement(valuesArray);
};
//call removeLastHistoryElement to 'go back'  1 generation
const handleGoBack = (valuesArray, setGenNumber) => {
  removeLastHistoryElement(valuesArray, setGenNumber);
};
// calculate resources
//[Unhandled promise rejection: TypeError: undefined is not an object (evaluating 'productionArray[i].value')]
const handleAdvanceGeneration = async (valuesArray, setGenNumber) => {
  const productionArray = valuesArray.map((el, i) => {
    if (i % 2 === 0) {
      return { name: el.name, value: el.value };
    }
  });
  const namesArray = valuesArray.map((el, i) => {
    if (i % 2 !== 0) return el.name;
  });
  const [trElement] = valuesArray.filter((el) => el.name === 'TR');
  const [energyElement] = valuesArray.filter((el) => el.name === 'Energy');
  for (let i = 0; i < 6; i++) {
    if (namesArray[i] === 'Money') {
      const value = productionArray[i].value + trElement.value;
      handleResourceChange(namesArray[i], value, valuesArray);
    }
    if (namesArray[i] === 'Heat') {
      const value = productionArray[i].value + energyElement.value;
      handleResourceChange(namesArray[i], value, valuesArray);
    }
    if (namesArray[i] === 'Energy') {
      const value = productionArray[i].value;
      handleResourceChange(namesArray[i], value, valuesArray, true);
    } else {
      const value = productionArray[i].value;
      handleResourceChange(namesArray[i], value, valuesArray, true);
    }
  }
  addNewHistoryElement(valuesArray, setGenNumber);

  //   handleResourceChange('Money', moneyProd + TR, valuesArray);
  //   handleResourceChange('Steel', steelProd, valuesArray);
  //   handleResourceChange('Titanium', titaniumProd, valuesArray);
  //   handleResourceChange('Plant', plantProd, valuesArray);
  //   handleResourceChange('Heat', energy + heatProd, valuesArray);
  //   handleResourceChange('Energy', energyProd, valuesArray, true);
  //   addNewHistoryElement(valuesArray, setGenNumber);
};

export {
  handleResourceChange,
  handleReset,
  handleAdvanceGeneration,
  handleGoBack,
  handleAppMount,
};
