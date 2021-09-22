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
// undefined is not an object (evaluating 'productionArray[i].value')]

//fixing functions start
const handleAdvanceGeneration = (valuesArray, setGenNumber) => {
  const resources = valuesArray.map((el, i) => {
    if ((i + 1) % 2 !== 0) {
      const { name, value } = el;
      return { name, value };
    }
  });
  valuesArray.forEach((el, i) => {
    if ((i + 1) % 2 === 0) {
      resources[i - 1].prod = el.value;
    }
  });

  const [{ value: trCount }] = valuesArray.filter((el) => el.name === 'TR');
  const [{ value: energyVal }] = valuesArray.filter(
    (el) => el.name === 'Energy'
  );
  resources.forEach((el) => {
    if (el.name === 'Money') {
      handleResourceChange(el.name, el.prod + trCount, valuesArray);
    }
    if (el.name === 'Heat') {
      handleResourceChange(el.name, el.prod + energyVal, valuesArray);
    }
    if (el.name === 'Energy') {
      handleResourceChange(el.name, el.prod, valuesArray, true);
    } else handleResourceChange(el.name, el.prod, valuesArray);
  });
  addNewHistoryElement(valuesArray, setGenNumber);
};
//fixing functions end

export {
  handleResourceChange,
  handleReset,
  handleAdvanceGeneration,
  handleGoBack,
  handleAppMount,
};

// const handleAdvanceGeneration = (valuesArray, setGenNumber) => {
//   const productionVals = valuesArray.map((el, i) => {
//     if ((i + 1) % 2 === 0) {
//       // return Number(el.value);
//       return 1;
//     }
//   });
//   const namesArray = valuesArray.map((el, i) => {
//     if ((i + 1) % 2 !== 0) return el.name;
//   });
//   const [trElement] = valuesArray.filter((el) => el.name === 'TR');
//   const [energyElement] = valuesArray.filter((el) => el.name === 'Energy');
//   for (let i = 0; i < 12; i++) {
//     if (namesArray[i] === 'Money') {
//       const value = trElement.value;
//       handleResourceChange(namesArray[i], value, valuesArray);
//     }
//     if (namesArray[i] === 'Heat') {
//       const value = productionVals[i] + energyElement.value;
//       handleResourceChange(namesArray[i], value, valuesArray);
//     }
//     if (namesArray[i] === 'Energy') {
//       const value = productionVals[i];
//       handleResourceChange(namesArray[i], value, valuesArray, true);
//     } else {
//       const value = productionVals[i];
//       handleResourceChange(namesArray[i], value, valuesArray, true);
//     }
//   }
//   addNewHistoryElement(valuesArray, setGenNumber);
// };
