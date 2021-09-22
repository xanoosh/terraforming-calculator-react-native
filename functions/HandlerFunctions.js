import {
  updateResourceHistory,
  createNewHistoryElement,
  mutateLastHistoryElement,
} from './BaseFunctions.js';

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

export { handleResourceChange, handleReset };
